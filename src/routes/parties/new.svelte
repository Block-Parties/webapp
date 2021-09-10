<script context="module" lang="ts">
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
    import BlockPartiesApi from "$lib/api/block_parties_api"
    import WalletHelper from "$lib/api/wallet_helper"
    import type { Asset } from "opensea-js/lib/types"
    import EthAmount from "$lib/components/common/EthAmount.svelte"
    import NftDisplay from "$lib/components/common/NftDisplay.svelte"
    import { ethers, utils } from "ethers"

    import { onMount } from "svelte"
    // import { Network } from "wyvern-js/lib/types"
    import PartyCard from "$lib/components/parties/PartyCard.svelte"
    import PartyPopup from "$lib/components/parties/PartyPopup.svelte"
    import SharePartyPopup from "$lib/components/parties/SharePartyPopup.svelte"

    export let params

    let asset: Promise<Asset> = new Promise(() => {})
    let awaitingConfirmation = false

    onMount(async () => {
        const opensea = (await import("$lib/api/opensea_helper")).default
        asset = opensea.getOrders("rinkeby", params.tokenAddress, params.tokenId)
    })

    async function createParty() {
        const a = await asset
        // TODO: Error checking for assets with no open sell orders
        a.host = await WalletHelper.getAccount()
        a.buyPrice = a.orders[0].currentPrice
        a.resalePrice = "" + params.resalePrice * 10.0 ** 18 // TODO: ideally this would be made consistent on the extension side in an update
        console.log(a)

        awaitingConfirmation = true
        const newParty = await BlockPartiesApi.createParty(a)
        asset.id = newParty.id
    }

    let hidePopup = false
    function closePopup() {
        hidePopup = true
    }
</script>

{#if !hidePopup && asset.id != null}
    <SharePartyPopup party={asset} on:close={closePopup} />
{/if}

<!-- TODO: show popup on create party -->

<div class="page">
    {#await asset then asset}
        <NftDisplay imageUrl={asset.imageUrl} />

        <div class="details">
            <h2>{asset.name}</h2>
            <h5>{asset.assetContract.name}</h5>

            <button on:click={createParty}>Set it live!</button>

            <div class="row">
                <div class="column">
                    <p class="label">Host</p>
                    {#await WalletHelper.getAccount()}
                        <p class="host">Please connect your wallet</p>
                    {:then account}
                        <p class="host">{account.substring(0, 10)}</p>
                    {/await}
                </div>

                <div class="column">
                    <p class="label">Initial Price</p>
                    <EthAmount
                        amount={ethers.utils.formatEther(
                            ethers.BigNumber.from(asset.orders[0].currentPrice.toString())
                        )}
                    />
                </div>

                <div class="column">
                    <p class="label">Resale Price</p>
                    <EthAmount amount={params.resalePrice} />
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

    .details {
        flex: 1;
        margin-left: 48px;

        h2 {
            color: black;
            font-weight: 400;
            margin-bottom: 8px;
        }

        h5 {
            color: #828282;
            font-weight: 400;
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
            align-items: stretch;
            margin-top: 32px;
        }

        .column {
            .label {
                color: #4f4f4f;
                font-size: smaller;
                font-weight: 600;
            }
            .host {
                color: #333333;
                font-weight: 600;
                margin: 0;
            }

            .body {
                color: #828282;
                font-size: smaller;
                font-weight: 300;
            }
        }
    }
</style>
