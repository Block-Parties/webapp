import { Asset, Network } from "opensea-js/lib/types"
import WalletHelper from "./wallet_helper"


module OpenSeaHelper {
    let openSeaApi
    let openseaPort

    async function initialize() {
        if (window.global != null) return

        // polyfills
        (window as any).global = window
        global.process = await import('process')
        global.Buffer = global.Buffer || (await import('buffer')).Buffer

        let { OpenSeaPort, Network, OpenSeaAPI } = await import("opensea-js")
        openSeaApi = OpenSeaAPI
        openseaPort = OpenSeaPort
    }


    export async function getOrders(network: Network, tokenAddress: string, tokenId: string): Promise<Asset> {
        await initialize()

        // const provider = await WalletHelper.getProvider()
        // const seaport = new OpenSeaPort(provider, {
        //     networkName: Network.Main
        // })

        // console.log(seaport)

        const api = new openSeaApi({
            networkName: Network.Rinkeby,
        })

        const asset = await api.getAsset({ tokenAddress, tokenId })
        console.log(asset)

        return asset
    }
}

export default OpenSeaHelper