import WalletHelper from "$lib/api/wallet_helper"
import { BigNumber, ethers } from "ethers"
import WyvernABI from "./wyvern_exchange_abi"

module WyvernExchangeHost {

    const RINKEBY_ADDRESS = "0x27e4AD6B04Ab324B1fB5931FBdCCcfbeC610D648"

    let contract: ethers.Contract
    let signer: ethers.Signer

    /** Initialize connection to contract */
    async function initialize() {
        const metamaskProvider = await WalletHelper.getProvider()
        const provider = new ethers.providers.Web3Provider(metamaskProvider)

        signer = provider.getSigner()
        contract = new ethers.Contract(RINKEBY_ADDRESS, WyvernABI, signer)
    }

    export async function getState(partyId: ethers.BigNumberish) {
        if (contract == null) await initialize()

        return await contract.getState(partyId)
    }

    /** Create a new party on chain. Returns its ID. */
    export async function createParty(tokenAddress: string, tokenId: ethers.BigNumberish, buyPrice: ethers.BigNumberish, resalePrice: ethers.BigNumberish): Promise<BigNumber> {
        if (contract == null) await initialize()

        const tx: ethers.ContractTransaction = await contract.createParty(tokenAddress, tokenId, buyPrice, resalePrice)
        const receipt = await tx.wait()

        // extract new party ID from Created event
        const decodedEvent = ethers.utils.defaultAbiCoder.decode(
            ['uint256', 'address', 'uint256'],
            receipt.logs[0].data
        )

        return decodedEvent[0]
    }

    export async function buy(party) {
        if (contract == null) await initialize()

        console.log("SAY SOMETHING")
        const response = await fetch("http://localhost:8001/buy?" + new URLSearchParams({
            network: "rinkeby",
            tokenAddress: party.tokenAddress,
            tokenId: party.tokenId,
            addr: RINKEBY_ADDRESS
        }))
        console.log(response)

        const wyvernData = await response.json()
        console.log(wyvernData)

        const tx = await contract.buy(party.id, wyvernData)
        console.log(tx)
        const receipt = await tx.wait()
        console.log(receipt)






        // contract.buy()
    }

    export async function sell(party) {
        if (contract == null) await initialize()

        const response = await fetch("http://localhost:8001/sell?" + new URLSearchParams({
            network: "rinkeby",
            tokenAddress: party.tokenAddress,
            tokenId: party.tokenId,
            resalePrice: party.resalePrice,

            addr: RINKEBY_ADDRESS
        }))

        const wyvernData = await response.json()
        console.log(wyvernData)

        console.log("YO")

        const tx = await contract.relist(party.id, wyvernData)
        console.log(tx)
        const receipt = await tx.wait()
        console.log(receipt)



        // console.log(response)


    }
}

export default WyvernExchangeHost