import WalletHelper from "$lib/api/wallet_helper"
import { BigNumber, ethers } from "ethers"
import BlockPartiesAbi from "./blockparties_abi"

module BlockParties {

    export const RINKEBY_ADDRESS = "0x64F692aF00Cc1B4C9fb2501DAA8Dd5cd7cFBda5e"

    let contract: ethers.Contract
    let signer: ethers.Signer

    /** Initialize connection to contract */
    async function initialize() {
        const metamaskProvider = await WalletHelper.getProvider()
        const provider = new ethers.providers.Web3Provider(metamaskProvider)

        signer = provider.getSigner()
        contract = new ethers.Contract(RINKEBY_ADDRESS, BlockPartiesAbi, signer)
    }

    // /** Create a new party on chain. Returns its ID. */
    // export async function createParty(tokenAddress: string, tokenId: ethers.BigNumberish, buyPrice: ethers.BigNumberish, resalePrice: ethers.BigNumberish): Promise<BigNumber> {
    //     if (contract == null) await initialize()

    //     const tx: ethers.ContractTransaction = await contract.createParty(tokenAddress, tokenId, buyPrice, resalePrice)
    //     const receipt = await tx.wait()

    //     // extract new party ID from Created event
    //     const decodedEvent = ethers.utils.defaultAbiCoder.decode(
    //         ['uint256', 'address', 'uint256'],
    //         receipt.logs[0].data
    //     )

    //     return decodedEvent[0]
    // }

    export async function deposit(partyId: ethers.BigNumberish, amount: ethers.BigNumberish) {
        if (contract == null) await initialize()

        const tx: ethers.ContractTransaction = await contract.deposit(partyId, { value: amount })
        return await tx.wait()
    }

    export async function withdraw(partyId) {
        if (contract == null) await initialize()


    }

    /** Get the party's funding progress as a percetange (decimal) */
    export async function getProgress(party) {
        if (contract == null) await initialize()

        const balance = await contract.getBalance(party.id)
        console.log("BALANCE")
        console.log(balance.toString())


        return balance.mul(10000).div(BigNumber.from(party.buyPrice)) / 10000
    }

    // export async function buy() {
    //     if (contract == null) await initialize()


    // }
}

export default BlockParties