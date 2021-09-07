export default [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "blockPartiesContract",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "wyvernExchangeContract",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "_tokenAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_tokenId",
                "type": "uint256"
            }
        ],
        "name": "TokenReceived",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_assetId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "_tokenAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_tokenId",
                "type": "uint256"
            }
        ],
        "name": "TokenSold",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_assetId",
                "type": "uint256"
            },
            {
                "components": [
                    {
                        "internalType": "address[14]",
                        "name": "addrs",
                        "type": "address[14]"
                    },
                    {
                        "internalType": "uint256[18]",
                        "name": "uints",
                        "type": "uint256[18]"
                    },
                    {
                        "internalType": "uint8[8]",
                        "name": "feeMethodsSidesKindsHowToCalls",
                        "type": "uint8[8]"
                    },
                    {
                        "internalType": "bytes",
                        "name": "calldataBuy",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes",
                        "name": "calldataSell",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes",
                        "name": "replacementPatternBuy",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes",
                        "name": "replacementPatternSell",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes",
                        "name": "staticExtradataBuy",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes",
                        "name": "staticExtradataSell",
                        "type": "bytes"
                    },
                    {
                        "internalType": "uint8[2]",
                        "name": "vs",
                        "type": "uint8[2]"
                    },
                    {
                        "internalType": "bytes32[5]",
                        "name": "rssMetadata",
                        "type": "bytes32[5]"
                    }
                ],
                "internalType": "struct WyvernExchange.WyvernAtomicMatchData",
                "name": "_data",
                "type": "tuple"
            }
        ],
        "name": "buy",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_assetId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            }
        ],
        "name": "canDeposit",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_assetId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            }
        ],
        "name": "canWithdraw",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_tokenAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_tokenId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_buyPrice",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_resalePrice",
                "type": "uint256"
            }
        ],
        "name": "createParty",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_assetId",
                "type": "uint256"
            }
        ],
        "name": "getBuyPrice",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_assetId",
                "type": "uint256"
            }
        ],
        "name": "getResalePrice",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_assetId",
                "type": "uint256"
            }
        ],
        "name": "getState",
        "outputs": [
            {
                "internalType": "enum WyvernExchange.State",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "giveFunds",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_asetId",
                "type": "uint256"
            }
        ],
        "name": "markFailed",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_tokenId",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "name": "onERC721Received",
        "outputs": [
            {
                "internalType": "bytes4",
                "name": "",
                "type": "bytes4"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_assetId",
                "type": "uint256"
            },
            {
                "components": [
                    {
                        "internalType": "address[7]",
                        "name": "addrs",
                        "type": "address[7]"
                    },
                    {
                        "internalType": "uint256[9]",
                        "name": "uints",
                        "type": "uint256[9]"
                    },
                    {
                        "internalType": "uint8",
                        "name": "feeMethod",
                        "type": "uint8"
                    },
                    {
                        "internalType": "uint8",
                        "name": "side",
                        "type": "uint8"
                    },
                    {
                        "internalType": "uint8",
                        "name": "saleKind",
                        "type": "uint8"
                    },
                    {
                        "internalType": "uint8",
                        "name": "howToCall",
                        "type": "uint8"
                    },
                    {
                        "internalType": "bytes",
                        "name": "callData",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes",
                        "name": "replacementPattern",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes",
                        "name": "staticExtradata",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bool",
                        "name": "orderbookInclusionDesired",
                        "type": "bool"
                    }
                ],
                "internalType": "struct WyvernExchange.wyvernApproveOrderData_",
                "name": "_data",
                "type": "tuple"
            }
        ],
        "name": "relist",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_assetId",
                "type": "uint256"
            }
        ],
        "name": "returnFunds",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]