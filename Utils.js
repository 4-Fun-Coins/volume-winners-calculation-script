const Web3 = require('web3');
let ethereumNode = new Web3.providers.HttpProvider(process.env.NODE_RPC_URL);
let web3 = new Web3(ethereumNode);
const {BN} = web3.utils;

const fs = require('fs');

module.exports = {
    /**
     * requires winners count to be greater than 3 to succeed
     * assumes we get BN
     * assumes winners are already sorted
     *
     */
    getWinnersAndAmounts: (participants, totalPot, winnersCount) => {
        const ratios = [new BN('25'), new BN('15'), new BN('10'), new BN('50')]
        let potLeft = totalPot;

        let amounts = [];
        let winners = [];

        for (let i = 0; i < winnersCount && i < participants.length; i++) {
            const ratio = ratios[i < 3 ? i : 3];
            amounts[i] = new BN(totalPot).mul(ratio).div(new BN('100'));
            // if this is 4th place and up is 50 percent divided by the number of the rest of the winners example 1000
            // we calculate this way to not lose precision as BN do not have decimals
            if (i > 2)
                amounts[i] = amounts[i].div(new BN((winnersCount - 3) + ''));
            potLeft = potLeft.sub(amounts[i]);
            winners[i] = participants[i].address;
        }
        if (potLeft.gt(new BN('0'))) {
            // there is left (because there is less winners than the allowed winners for this milestone)
            // is that case we divide the left amount equally on all participants
            const share = potLeft.div(new BN('' + amounts.length));
            amounts = amounts.map(amount => {
                potLeft = potLeft.sub(share);
                return amount.add(share);
            });
            // in case there is leftover it means the amount was not dividable by number of winners
            // so the left over is left%numberOfWinners
            // give it to the first place he could use that extra 0.000000000000000999 VOL
            if (potLeft.gt(new BN('0'))) {
                amounts[0] = amounts[0].add(potLeft);
                potLeft = potLeft.sub(potLeft);
            }
        }

        // check that the winning amounts are actually the same as the jackpot
        // if it is not throw
        let total = new BN("0")
        amounts.forEach(amount => {
            total = total.add(amount);
        });
        if (!total.eq(totalPot)) throw 'Total winnings are not equal to total pot';
        return {
            totalPot: totalPot.toString(),
            milestoneId: process.env.NODE_MILESTONE_ID,
            winners,
            amounts: amounts.map(amount => amount.toString())
        }
    },

    /**
     * Gives a date string (file system friendly) yyyy-mm-dd_HH.MM.SS
     * @returns {string}
     */
    getDateString: () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = `${date.getMonth() + 1}`.padStart(2, '0');
        const day = `${date.getDate()}`.padStart(2, '0');
        const hour = `${date.getHours()}`.padStart(2, '0');
        const minutes = `${date.getMinutes()}`.padStart(2, '0');
        const seconds = `${date.getSeconds()}`.padStart(2, '0');

        return `${day}-${month}-${year}_${hour}.${minutes}.${seconds}`
    },
    createFolder: (dir) => {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, {recursive: true});
        }
    }
}