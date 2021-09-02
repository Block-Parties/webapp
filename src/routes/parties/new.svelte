<script context="module" lang="ts">
    export const ssr = false

    // parse query params before loading page
    export function load({ page }) {
        const params = {
            network: page.query.get("network"),
            tokenAddress: page.query.get("tokenAddress"),
            tokenId: page.query.get("tokenId"),
            resalePrice: page.query.get("resalePrice"),
            marketplace: page.query.get("marketplace"),
        }

        return { props: { params } }
    }
</script>

<script lang="ts">
    import OpenSeaHelper from "$lib/api/opensea_helper"
    import WalletHelper from "$lib/api/wallet_helper"
    import type { Asset } from "opensea-js/lib/types"

    import { onMount } from "svelte"
    import { Network } from "wyvern-js/lib/types"
    //   import { OpenSeaAPI, OpenSeaPort, Network } from 'opensea-js'
    //   import OpenSeaHelper from '$lib/api/opensea_helper'

    export let params

    let asset: Promise<Asset> = new Promise(() => {})
    // let

    let opensea

    onMount(async () => {
        const helper = (await import("$lib/api/opensea_helper")).default
        asset = helper.getOrders(Network.Rinkeby, params.tokenAddress, params.tokenId)
    })
</script>

<div class="page">
    {#await asset then asset}
        <div class="nft-container">
            <img src={asset.imageUrl} alt="" />

            <img class="marketplace-logo" src="/images/marketplace/opensea_logo.png" alt="opensea" />
        </div>

        <div class="details">
            <h2>{asset.name}</h2>
            <h5>{asset.assetContract.name}</h5>

            <button>Set it live!</button>

            <div class="row">
                <div class="column">
                    <p class="label">Host</p>
                    {#await WalletHelper.getAccount()}
                        <p>Please connect your wallet</p>
                    {:then account}
                        <p>{account}</p>
                    {/await}
                </div>

                <div class="column">
                    <p class="label">Initial Price</p>
                    <div class="eth-amount">
                        <img src="/images/coins/ethereum.png" alt="" />
                        <p>2</p>
                    </div>
                </div>

                <div class="column">
                    <p class="label">Resale Price</p>
                    <div class="eth-amount">
                        <img src="/images/coins/ethereum.png" alt="" />
                        <p>2</p>
                    </div>
                </div>
            </div>

            <div class="column">
                <p class="label">Description</p>
                <p class="body">{asset.description ?? "No description available."}</p>
            </div>
        </div>
    {/await}
</div>

<style lang="scss">
    .page {
        padding: 80px;
        display: flex;
    }

    .nft-container {
        flex: 1;
        margin-right: 32px;
        align-items: center;
        justify-content: center;

        position: relative;
        background: #f2f2f2;
        border-radius: 24px;

        padding: 56px;

        img {
            object-fit: contain;
            object-position: center;
            margin: auto;
            width: 100%;
            height: 100%;
        }

        .marketplace-logo {
            position: absolute;
            bottom: 16px;
            right: 16px;

            width: 40px;
            height: 40px;
        }
    }

    .details {
        flex: 1;
        margin-left: 32px;

        h2 {
            color: black;
            font-weight: 400;
            margin-bottom: 8px;
        }

        h5 {
            color: #828282;
            font-weight: 300;
            text-transform: uppercase;

            margin: 0;
        }

        button {
            cursor: pointer;
            transition: all 0.3s;
            background: #6a37bc;
            border: none;
            border-radius: 40px;

            height: 40px;
            width: 100%;
            margin-top: 32px;
            font-size: medium;

            &:hover {
                background: rgb(72, 30, 139);
            }
        }

        .row {
            display: flex;
            justify-content: space-between;
            margin-top: 32px;
        }

        .column {
            .label {
                color: #4f4f4f;
                font-size: smaller;
                font-weight: 600;
            }

            .body {
                color: #828282;
                font-size: smaller;
                font-weight: 300;
            }
        }

        .eth-amount {
            display: flex;
            align-items: center;
            justify-content: center;

            img {
                width: 24px;
                height: 24px;
                margin-right: 12px;
            }

            p {
                color: #333333;
                font-weight: 600;
                margin: 0;
            }
        }
    }
</style>
