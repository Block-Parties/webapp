import BlockParties from "$lib/contracts/blockparties"
import WyvernExchangeHost from "$lib/contracts/wyvern_exchange_host"
import { BigNumber } from "ethers"

module BlockPartiesApi {
    const API_ENDPOINT = "http://localhost:8000"

    /** Create a new party, on chain and then off chain for easy indexing/filtering. */
    export async function createParty(asset) {
        const party = {
            name: asset.name,
            collection: asset.assetContract.name,
            description: asset.description,
            tokenId: asset.tokenId,
            tokenAddress: asset.tokenAddress,
            imageUrl: asset.imageUrl,
            buyPrice: asset.buyPrice,
            resalePrice: asset.resalePrice,
            host: asset.host,
        }

        // create party on chain
        const newId = await WyvernExchangeHost.createParty(
            party.tokenAddress,
            BigNumber.from(party.tokenId),

            // buyPrice comes from OpenSea as a BigNumber, encoded with a different library
            BigNumber.from(party.buyPrice.toString()),
            BigNumber.from(party.resalePrice),
        )

        console.log(newId)
        console.log(newId.toString())

        if (newId == null) {
            alert("Something went wrong. Please let us know via Discord!")
            return
        }


        party.id = newId.toString()
        console.log(party.id)
        console.log(party)




        const request = await fetch(`${API_ENDPOINT}/parties`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(party)
        })

        if (request.status != 201) {
            console.error("TODO: better error handling")
            return
        }

        return party
    }


    // TODO: filters, search, etc.
    export async function fetchParties(): Promise<any[]> {
        const response = await fetch(`${API_ENDPOINT}/parties`)
        const parties = await response.json()

        for (let i = 0; i < parties.length; i++) {
            parties[i].progress = await BlockParties.getProgress(parties[i])
            parties[i].state = await WyvernExchangeHost.getState(parties[i].id)
            console.log(parties[i])
        }

        return parties
    }


    /** Fetch parties hosted by the given host (address) */
    export async function fetchHostedParties(host: string): Promise<any[]> {
        const response = await fetch(`${API_ENDPOINT}/parties?host=${host}`)
        const parties = await response.json()

        for (let i = 0; i < parties.length; i++) {
            parties[i].progress = await BlockParties.getProgress(parties[i])
            parties[i].state = await WyvernExchangeHost.getState(parties[i].id)
            console.log(parties[i])
        }

        return parties
    }

    /** Fetch all parties a user is a member of, based on their wallet address. */
    export async function fetchJoinedParties(memberAddress: string): Promise<any[]> {
        const response = await fetch(`${API_ENDPOINT}/parties?host=${memberAddress}`)
        const parties = await response.json()

        return parties
    }
}

export default BlockPartiesApi