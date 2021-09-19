const deployments = {
    42: {
        volumeABI: [{
            "inputs": [{
                "internalType": "address",
                "name": "escrowAcc",
                "type": "address"
            }, {"internalType": "address", "name": "mulitisig", "type": "address"}, {
                "internalType": "address",
                "name": "volumeJackpot",
                "type": "address"
            }], "stateMutability": "nonpayable", "type": "constructor"
        }, {
            "anonymous": false,
            "inputs": [{"indexed": true, "internalType": "address", "name": "freeloader", "type": "address"}],
            "name": "ADDED_FREELOADER",
            "type": "event"
        }, {
            "anonymous": false,
            "inputs": [{"indexed": true, "internalType": "address", "name": "owner", "type": "address"}, {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }, {"indexed": false, "internalType": "uint256", "name": "value", "type": "uint256"}],
            "name": "Approval",
            "type": "event"
        }, {
            "anonymous": false,
            "inputs": [{"indexed": true, "internalType": "address", "name": "claimer", "type": "address"}, {
                "indexed": true,
                "internalType": "string",
                "name": "nickname",
                "type": "string"
            }],
            "name": "NICKNAME_CLAIMED",
            "type": "event"
        }, {
            "anonymous": false,
            "inputs": [{"indexed": true, "internalType": "address", "name": "fueler", "type": "address"}, {
                "indexed": true,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }],
            "name": "REFUEL",
            "type": "event"
        }, {
            "anonymous": false,
            "inputs": [{"indexed": true, "internalType": "address", "name": "from", "type": "address"}, {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            }, {"indexed": false, "internalType": "uint256", "name": "value", "type": "uint256"}],
            "name": "Transfer",
            "type": "event"
        }, {
            "inputs": [{"internalType": "address", "name": "newDirectBurner_", "type": "address"}],
            "name": "addDirectBurner",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "inputs": [{"internalType": "address", "name": "newfreeloader_", "type": "address"}],
            "name": "addFreeloader",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "inputs": [{"internalType": "address", "name": "newcreaditor_", "type": "address"}],
            "name": "addfuelCreditor",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "inputs": [{"internalType": "address", "name": "owner", "type": "address"}, {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }],
            "name": "allowance",
            "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
            "stateMutability": "view",
            "type": "function"
        }, {
            "inputs": [{"internalType": "address", "name": "spender", "type": "address"}, {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }],
            "name": "approve",
            "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "inputs": [{"internalType": "address", "name": "account", "type": "address"}],
            "name": "balanceOf",
            "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
            "stateMutability": "view",
            "type": "function"
        }, {
            "inputs": [{"internalType": "string", "name": "newUserName_", "type": "string"}],
            "name": "canClaimNickname",
            "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
            "stateMutability": "view",
            "type": "function"
        }, {
            "inputs": [{"internalType": "uint256", "name": "newPrice_", "type": "uint256"}],
            "name": "changeNicknamePrice",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "inputs": [{"internalType": "string", "name": "nikname_", "type": "string"}],
            "name": "claimNickname",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "inputs": [],
            "name": "decimals",
            "outputs": [{"internalType": "uint8", "name": "", "type": "uint8"}],
            "stateMutability": "view",
            "type": "function"
        }, {
            "inputs": [{"internalType": "address", "name": "spender", "type": "address"}, {
                "internalType": "uint256",
                "name": "subtractedValue",
                "type": "uint256"
            }],
            "name": "decreaseAllowance",
            "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "inputs": [{"internalType": "uint256", "name": "amount_", "type": "uint256"}],
            "name": "directBurn",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "inputs": [{"internalType": "uint256", "name": "fuel_", "type": "uint256"}],
            "name": "directRefuel",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "inputs": [{"internalType": "uint256", "name": "fuel_", "type": "uint256"}, {
                "internalType": "address",
                "name": "fuelFor_",
                "type": "address"
            }], "name": "directRefuelFor", "outputs": [], "stateMutability": "nonpayable", "type": "function"
        }, {
            "inputs": [],
            "name": "fly",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "inputs": [{"internalType": "string", "name": "nickname_", "type": "string"}],
            "name": "getAddressForNickname",
            "outputs": [{"internalType": "address", "name": "", "type": "address"}],
            "stateMutability": "view",
            "type": "function"
        }, {
            "inputs": [{"internalType": "uint256", "name": "start_", "type": "uint256"}, {
                "internalType": "uint256",
                "name": "end_",
                "type": "uint256"
            }],
            "name": "getAllUsersFuelAdded",
            "outputs": [{
                "components": [{
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                }, {"internalType": "uint256", "name": "fuelAdded", "type": "uint256"}],
                "internalType": "struct Volume.UserFuel[]",
                "name": "_array",
                "type": "tuple[]"
            }],
            "stateMutability": "view",
            "type": "function"
        }, {
            "inputs": [],
            "name": "getAllUsersLength",
            "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
            "stateMutability": "view",
            "type": "function"
        }, {
            "inputs": [],
            "name": "getBlockNumber",
            "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
            "stateMutability": "view",
            "type": "function"
        }, {
            "inputs": [],
            "name": "getBlocksTravelled",
            "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
            "stateMutability": "view",
            "type": "function"
        }, {
            "inputs": [],
            "name": "getCurrentBlock",
            "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
            "stateMutability": "view",
            "type": "function"
        }, {
            "inputs": [],
            "name": "getEscrowAddress",
            "outputs": [{"internalType": "address", "name": "", "type": "address"}],
            "stateMutability": "view",
            "type": "function"
        }, {
            "inputs": [],
            "name": "getFuel",
            "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
            "stateMutability": "view",
            "type": "function"
        }, {
            "inputs": [],
            "name": "getLPAddress",
            "outputs": [{"internalType": "address", "name": "", "type": "address"}],
            "stateMutability": "view",
            "type": "function"
        }, {
            "inputs": [],
            "name": "getLastRefuel",
            "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
            "stateMutability": "view",
            "type": "function"
        }, {
            "inputs": [{"internalType": "address", "name": "address_", "type": "address"}],
            "name": "getNicknameForAddress",
            "outputs": [{"internalType": "string", "name": "", "type": "string"}],
            "stateMutability": "view",
            "type": "function"
        }, {
            "inputs": [],
            "name": "getNicknamePrice",
            "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
            "stateMutability": "view",
            "type": "function"
        }, {
            "inputs": [],
            "name": "getTakeoffBlock",
            "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
            "stateMutability": "view",
            "type": "function"
        }, {
            "inputs": [],
            "name": "getTotalFuelAdded",
            "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
            "stateMutability": "view",
            "type": "function"
        }, {
            "inputs": [{"internalType": "address", "name": "account_", "type": "address"}],
            "name": "getUserFuelAdded",
            "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
            "stateMutability": "view",
            "type": "function"
        }, {
            "inputs": [{"internalType": "address", "name": "spender", "type": "address"}, {
                "internalType": "uint256",
                "name": "addedValue",
                "type": "uint256"
            }],
            "name": "increaseAllowance",
            "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "inputs": [{"internalType": "address", "name": "potentialDirectBurner_", "type": "address"}],
            "name": "isDirectBurner",
            "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
            "stateMutability": "view",
            "type": "function"
        }, {
            "inputs": [{"internalType": "address", "name": "potentialFreeloader_", "type": "address"}],
            "name": "isFreeloader",
            "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
            "stateMutability": "view",
            "type": "function"
        }, {
            "inputs": [{"internalType": "address", "name": "potentialCreditor_", "type": "address"}],
            "name": "isFuelCreditor",
            "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
            "stateMutability": "view",
            "type": "function"
        }, {
            "inputs": [],
            "name": "name",
            "outputs": [{"internalType": "string", "name": "", "type": "string"}],
            "stateMutability": "view",
            "type": "function"
        }, {
            "inputs": [{"internalType": "address", "name": "directBurnerToBeRemoved_", "type": "address"}],
            "name": "removeDirectBurner",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "inputs": [{"internalType": "address", "name": "freeLoaderToBeRemoved_", "type": "address"}],
            "name": "removeFreeloader",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "inputs": [{"internalType": "address", "name": "creditorToBeRemoved_", "type": "address"}],
            "name": "removefuelCreditor",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "inputs": [{"internalType": "uint256", "name": "newFuel", "type": "uint256"}],
            "name": "setFuelTank",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "inputs": [{"internalType": "address", "name": "lpPairAddress_", "type": "address"}],
            "name": "setLPAddressAsCreditor",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "inputs": [{"internalType": "uint256", "name": "blockNumber_", "type": "uint256"}, {
                "internalType": "uint256",
                "name": "initialFuelTank",
                "type": "uint256"
            }, {"internalType": "string", "name": "milestoneName_", "type": "string"}],
            "name": "setTakeOffBlock",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "inputs": [],
            "name": "symbol",
            "outputs": [{"internalType": "string", "name": "", "type": "string"}],
            "stateMutability": "view",
            "type": "function"
        }, {
            "inputs": [],
            "name": "totalSupply",
            "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
            "stateMutability": "view",
            "type": "function"
        }, {
            "inputs": [{"internalType": "address", "name": "recipient_", "type": "address"}, {
                "internalType": "uint256",
                "name": "amount_",
                "type": "uint256"
            }],
            "name": "transfer",
            "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "inputs": [{"internalType": "address", "name": "sender_", "type": "address"}, {
                "internalType": "address",
                "name": "recipient_",
                "type": "address"
            }, {"internalType": "uint256", "name": "amount_", "type": "uint256"}],
            "name": "transferFrom",
            "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "inputs": [],
            "name": "updateBlock",
            "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
            "stateMutability": "nonpayable",
            "type": "function"
        }],
        VolumeJackpotABI: [{
            "inputs": [{
                "internalType": "address",
                "name": "multisig_",
                "type": "address"
            }, {"internalType": "address", "name": "escrow_", "type": "address"}],
            "stateMutability": "nonpayable",
            "type": "constructor"
        }, {
            "anonymous": false,
            "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            }, {"indexed": true, "internalType": "address", "name": "newOwner", "type": "address"}],
            "name": "OwnershipTransferred",
            "type": "event"
        }, {
            "inputs": [],
            "name": "BASE",
            "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
            "stateMutability": "view",
            "type": "function"
        }, {
            "inputs": [],
            "name": "MAX_INT_TYPE",
            "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
            "stateMutability": "view",
            "type": "function"
        }, {
            "inputs": [{"internalType": "address", "name": "allowedDepositer_", "type": "address"}],
            "name": "addDepositer",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "inputs": [],
            "name": "burnItAfterCrash",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "inputs": [{"internalType": "address", "name": "user_", "type": "address"}],
            "name": "claim",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "inputs": [{"internalType": "uint256", "name": "startBlock_", "type": "uint256"}, {
                "internalType": "string",
                "name": "milestoneName_",
                "type": "string"
            }], "name": "createMilestone", "outputs": [], "stateMutability": "nonpayable", "type": "function"
        }, {
            "inputs": [{"internalType": "uint256", "name": "amount_", "type": "uint256"}, {
                "internalType": "uint256",
                "name": "fuelContributed_",
                "type": "uint256"
            }, {"internalType": "address", "name": "creditsTo_", "type": "address"}],
            "name": "deposit",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "inputs": [{"internalType": "uint256", "name": "amount_", "type": "uint256"}, {
                "internalType": "uint256",
                "name": "milestoneId_",
                "type": "uint256"
            }], "name": "depositIntoMilestone", "outputs": [], "stateMutability": "nonpayable", "type": "function"
        }, {
            "inputs": [],
            "name": "getAllMilestones",
            "outputs": [{
                "components": [{
                    "internalType": "uint256",
                    "name": "startBlock",
                    "type": "uint256"
                }, {"internalType": "uint256", "name": "endBlock", "type": "uint256"}, {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                }, {"internalType": "uint256", "name": "amountInPot", "type": "uint256"}, {
                    "internalType": "uint256",
                    "name": "totalFuelAdded",
                    "type": "uint256"
                }], "internalType": "struct MileStone[]", "name": "", "type": "tuple[]"
            }],
            "stateMutability": "view",
            "type": "function"
        }, {
            "inputs": [{"internalType": "uint256", "name": "milestoneId_", "type": "uint256"}],
            "name": "getAllParticipantsInMilestone",
            "outputs": [{"internalType": "address[]", "name": "", "type": "address[]"}],
            "stateMutability": "view",
            "type": "function"
        }, {
            "inputs": [{"internalType": "address", "name": "user_", "type": "address"}],
            "name": "getClaimableAmount",
            "outputs": [{"internalType": "uint256", "name": "claimableAmount", "type": "uint256"}],
            "stateMutability": "view",
            "type": "function"
        }, {
            "inputs": [{"internalType": "address", "name": "user_", "type": "address"}, {
                "internalType": "uint256",
                "name": "milestone_",
                "type": "uint256"
            }],
            "name": "getClaimableAmountForMilestone",
            "outputs": [{"internalType": "uint256", "name": "claimableAmount", "type": "uint256"}],
            "stateMutability": "view",
            "type": "function"
        }, {
            "inputs": [],
            "name": "getCurrentActiveMilestone",
            "outputs": [{
                "components": [{
                    "internalType": "uint256",
                    "name": "startBlock",
                    "type": "uint256"
                }, {"internalType": "uint256", "name": "endBlock", "type": "uint256"}, {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                }, {"internalType": "uint256", "name": "amountInPot", "type": "uint256"}, {
                    "internalType": "uint256",
                    "name": "totalFuelAdded",
                    "type": "uint256"
                }], "internalType": "struct MileStone", "name": "", "type": "tuple"
            }],
            "stateMutability": "view",
            "type": "function"
        }, {
            "inputs": [{"internalType": "uint256", "name": "milestoneId_", "type": "uint256"}, {
                "internalType": "address",
                "name": "participant_",
                "type": "address"
            }],
            "name": "getFuelAddedInMilestone",
            "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
            "stateMutability": "view",
            "type": "function"
        }, {
            "inputs": [{"internalType": "uint256", "name": "milestoneId_", "type": "uint256"}],
            "name": "getMilestoneForId",
            "outputs": [{
                "components": [{
                    "internalType": "uint256",
                    "name": "startBlock",
                    "type": "uint256"
                }, {"internalType": "uint256", "name": "endBlock", "type": "uint256"}, {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                }, {"internalType": "uint256", "name": "amountInPot", "type": "uint256"}, {
                    "internalType": "uint256",
                    "name": "totalFuelAdded",
                    "type": "uint256"
                }], "internalType": "struct MileStone", "name": "", "type": "tuple"
            }],
            "stateMutability": "view",
            "type": "function"
        }, {
            "inputs": [{"internalType": "uint256", "name": "milestoneId_", "type": "uint256"}],
            "name": "getMilestoneIndex",
            "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
            "stateMutability": "view",
            "type": "function"
        }, {
            "inputs": [{"internalType": "uint256", "name": "milestoneIindex_", "type": "uint256"}],
            "name": "getMilestoneatIndex",
            "outputs": [{
                "components": [{
                    "internalType": "uint256",
                    "name": "startBlock",
                    "type": "uint256"
                }, {"internalType": "uint256", "name": "endBlock", "type": "uint256"}, {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                }, {"internalType": "uint256", "name": "amountInPot", "type": "uint256"}, {
                    "internalType": "uint256",
                    "name": "totalFuelAdded",
                    "type": "uint256"
                }], "internalType": "struct MileStone", "name": "", "type": "tuple"
            }],
            "stateMutability": "view",
            "type": "function"
        }, {
            "inputs": [],
            "name": "getMilestonesLength",
            "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
            "stateMutability": "view",
            "type": "function"
        }, {
            "inputs": [{"internalType": "uint256", "name": "milestoneId_", "type": "uint256"}, {
                "internalType": "address",
                "name": "participant_",
                "type": "address"
            }],
            "name": "getParticipationAmountInMilestone",
            "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
            "stateMutability": "view",
            "type": "function"
        }, {
            "inputs": [{"internalType": "uint256", "name": "milestoneId_", "type": "uint256"}],
            "name": "getPotAmountForMilestonre",
            "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
            "stateMutability": "view",
            "type": "function"
        }, {
            "inputs": [{"internalType": "uint256", "name": "milestoneId_", "type": "uint256"}],
            "name": "getWinners",
            "outputs": [{"internalType": "address[]", "name": "", "type": "address[]"}],
            "stateMutability": "view",
            "type": "function"
        }, {
            "inputs": [{"internalType": "address", "name": "user_", "type": "address"}, {
                "internalType": "uint256",
                "name": "milestone_",
                "type": "uint256"
            }],
            "name": "getWinningAmount",
            "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
            "stateMutability": "view",
            "type": "function"
        }, {
            "inputs": [{"internalType": "uint256", "name": "milestoneId_", "type": "uint256"}],
            "name": "getWinningAmounts",
            "outputs": [{"internalType": "uint256[]", "name": "", "type": "uint256[]"}],
            "stateMutability": "view",
            "type": "function"
        }, {
            "inputs": [{"internalType": "address", "name": "potentialDepositer_", "type": "address"}],
            "name": "isDepositer",
            "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
            "stateMutability": "view",
            "type": "function"
        }, {
            "inputs": [],
            "name": "owner",
            "outputs": [{"internalType": "address", "name": "", "type": "address"}],
            "stateMutability": "view",
            "type": "function"
        }, {
            "inputs": [{"internalType": "address", "name": "depositerToBeRemoved_", "type": "address"}],
            "name": "removeDepositer",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "inputs": [{"internalType": "uint256", "name": "milestoneId_", "type": "uint256"}, {
                "internalType": "address[]",
                "name": "winners_",
                "type": "address[]"
            }, {"internalType": "uint256[]", "name": "amounts_", "type": "uint256[]"}],
            "name": "setWinnersForMilestone",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "inputs": [{"internalType": "address", "name": "newOwner", "type": "address"}],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }]
    },
}

module.exports = {
    volumeABI: deployments[process.env.NODE_CHAIN_ID].volumeABI,
    VolumeJackpotABI: deployments[process.env.NODE_CHAIN_ID].VolumeJackpotABI,
}