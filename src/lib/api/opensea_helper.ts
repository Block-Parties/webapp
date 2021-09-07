// // // import type { ethers } from "ethers"
// import type { BigNumberish } from "ethers"
// import { OpenSeaPort } from "opensea-js"
// import { Asset, Network, OrderSide } from "opensea-js/lib/types"
// // import WalletHelper from "./wallet_helper"

import type { Asset, Network } from 'opensea-js/lib/types'


module OpenSeaHelper {
    let openSeaApi
    let network
    //     //     let seaport

    async function initialize() {
        if (window.global != null) return

        // polyfills
        (window as any).global = window
        global.process = await import('process')
        global.Buffer = global.Buffer || (await import('buffer')).Buffer

        let { OpenSeaPort, Network, OpenSeaAPI } = await import("opensea-js")
        openSeaApi = OpenSeaAPI
        network = Network
    }

    //     //     /**
    //     //      * 
    //     //      * @param party Backend party object
    //     //      */
    //     //     export async function getAsset(party) {

    //     //     }

    export async function test(tokenAddress: string, tokenId: string) {
        const response = await fetch("http://localhost:8001/buy?" + new URLSearchParams({
            network: "rinkeby",
            tokenAddress: tokenAddress,
            tokenId: tokenId,
        }))

        const wyvernData = await response.json()





        // console.log(Network)
        // const 
        //         await initialize()

        // const seaport = new OpenSeaPort(web3.currentProvider, { networkName: Network.Rinkeby })

        // const { orders, _ } = await seaport.api.getOrders({
        //     asset_contract_address: tokenAddress,
        //     token_id: tokenId,
        //     side: OrderSide.Sell,
        // })

        // if (orders.length == 0) {
        //     throw "NO ORDERS"
        // }

        // console.log(orders[0])
        // return orders[0]
    }

    export async function getOrders(network: Network, tokenAddress: string, tokenId: string): Promise<Asset> {
        await initialize()

        // const provider = await WalletHelper.getProvider()
        // const seaport = new OpenSeaPort(provider, {
        //     networkName: Network.Main
        // })

        // console.log(seaport)

        const api = new openSeaApi({
            networkName: "rinkeby",
        })

        const asset = await api.getAsset({ tokenAddress, tokenId })
        console.log(asset)

        return asset
    }
}

export default OpenSeaHelper