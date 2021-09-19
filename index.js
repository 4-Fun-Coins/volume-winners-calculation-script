require('dotenv').config();
const Web3 = require('web3');
const Big = require('big.js');
const {getWinnersAndAmounts, getDateString, createFolder} = require('./Utils')
const {VolumeJackpotABI} = require('./ABIs')
const fs = require('fs');
const path = require('path');

if (!process.env.NODE_RPC_URL) console.error('NODE_RPC_URL envirement variable is not available');

let ethereumNode = new Web3.providers.HttpProvider(process.env.NODE_RPC_URL);
let web3 = new Web3(ethereumNode);
const {BN} = web3.utils;
const volumeJackpot = new web3.eth.Contract(VolumeJackpotABI, process.env.NODE_JACKPOT_ADDRESS);

const outDir = `${__dirname}/calculated`


const getMilestoneForId = (id) => {
    return new Promise((resolve, reject) => {
        volumeJackpot.methods.getMilestoneForId(id).call(async (err, {startBlock, endBlock, name, amountInPot, totalFuelAdded}) => {
            resolve({amountInPot, totalFuelAdded})
        })
    });

}

const getParticipantsInMilestone = (id) => {
    return new Promise((resolve, reject) => {
        volumeJackpot.methods.getAllParticipantsInMilestone(id).call(async (err, participants) => {
            if (err)
                reject(err);

            // map and get fuel added for each participant
            let fuelAddedPerParticipant = await Promise.all(participants.map(async (participant, index) => {
                const fuelAdded = await volumeJackpot.methods.getFuelAddedInMilestone(id, participant).call();
                return {
                    address: participant,
                    fuelAdded: fuelAdded,
                }
            }));

            resolve(fuelAddedPerParticipant.sort((a, b) => {
                return new Big(b.fuelAdded).minus(a.fuelAdded);
            }));
        });
    })
}
let saveFile = `${process.env.NODE_MILESTONE_ID}_${getDateString()}`
const main = async () => {
    const mileStone = await getMilestoneForId(process.env.NODE_MILESTONE_ID);
    const participants = await getParticipantsInMilestone(process.env.NODE_MILESTONE_ID);
    const winningArgs = await getWinnersAndAmounts(participants, new BN(mileStone.amountInPot), new BN('1000'));

    fs.writeFileSync(path.join(outDir, `${saveFile}.json`), JSON.stringify({
        jackpotAddress: process.env.NODE_JACKPOT_ADDRESS,
        chainId: process.env.NODE_CHAIN_ID,
        ...winningArgs
    }, null, 0));

    console.log("\n\nWinners Calculated and file was save to: \n" + path.join(outDir, `${saveFile}.json`).toString());

}

createFolder(outDir);

main().catch(error => {
    console.error(error)
})