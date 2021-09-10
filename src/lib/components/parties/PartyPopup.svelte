<script lang="ts">
    import NftDisplay from "../common/NftDisplay.svelte"
    import Popup from "../common/Popup.svelte"
    import StatusTag from "$lib/components/common/StatusTag.svelte"
    import EthAmount from "$lib/components/common/EthAmount.svelte"
    import ProgressBar from "$lib/components/common/ProgressBar.svelte"
    import EthInput from "../common/EthInput.svelte"
    import { ethers } from "ethers"
    import SharePartyPopup from "./SharePartyPopup.svelte"
    import BlockParties from "$lib/contracts/blockparties"
    import { Stretch } from "svelte-loading-spinners"
    import { onMount } from "svelte"
    // import { OpenSeaPort } from "opensea-js"
    import OpenSeaHelper from "$lib/api/opensea_helper"
    import WyvernExchangeHost from "$lib/contracts/wyvern_exchange_host"

    export let party

    let state = "invest"
    let investmentAmount
    let awaiting = false

    let opensea

    onMount(async () => {
        // TODO: Get state
        console.log(party.state)
        console.log(party.progress)

        switch (party.state) {
            case 0:
                if (party.progress < 1) {
                    state = "invest"
                } else {
                    state = "buy"

                    // alert("ASASD")
                    // awaiting = true
                    // const asd = await WyvernExchangeHost.buy(party)
                    // console.log(asd)

                    // ;(window as any).global = window
                    // global.process = await import("process")
                    // global.Buffer = global.Buffer || (await import("buffer")).Buffer

                    // opensea = (await import("$lib/api/opensea_helper")).default
                    // opensea = (await import("$lib/api/opensea/exchange")).default
                    // console.log(opensea)
                    // opensea.buy()
                    // console.log(OpenSeaPort)

                    // await opensea.test(party.tokenAddress, party.tokenId)
                }

                break

            case 1:
                state = "relist"
                console.log("LETS SELL IT")
        }
        console.log(state)

        // console.log(party.progress);
        // if (party.progress >= 1) {
        //     // state == "buy"
        // }
    })

    async function invest() {
        if (state == "awaiting") return

        state = "awaiting"
        await BlockParties.deposit(party.id, ethers.utils.parseEther(investmentAmount))
        state = "post-investment"
    }

    async function buy() {
        if (state == "awaiting") return

        state = "awaiting"
        awaiting = true
        console.log("DO THE THING")
        await WyvernExchangeHost.buy(party)
        // TODO: BUY NFT
        state = "post-investment "
    }

    async function sell() {
        if (state == "awaiting") return

        state = "awaiting"
        awaiting = true
        console.log("DO THE SELL")
        await WyvernExchangeHost.sell(party)
        // TODO: BUY NFT
        state = "post-investment "
    }
</script>

{#if state == "post-investment"}
    <SharePartyPopup {party} on:close />
{:else}
    <Popup on:close>
        <div class="row">
            <NftDisplay imageUrl={party.imageUrl} />

            <div class="details">
                <h2>{party.name}</h2>
                <p class="collection">{party.collection}</p>

                <!-- TODO -->
                <StatusTag status={"public"} />

                <div class="invest-box">
                    {#if state == "invest"}
                        <p>How much would you like to invest in this party?</p>
                        <div>
                            <EthInput bind:value={investmentAmount} />
                            <!-- {#if awaiting}
                                <button class="submit" disabled>
                                    <Stretch size="40" color="#ffffff" unit="px" duration="2s" />
                                </button>
                            {:else} -->
                            <button class="submit" on:click={invest}>Invest</button>
                            <!-- {/if} -->
                        </div>
                        <!-- {:else if state == "awaiting"} -->
                        <!-- <button class="submit" disabled>
                            <Stretch size="40" color="#ffffff" unit="px" duration="2s" />
                        <!-- </button> -->
                    {:else if state == "buy"}
                        <p>This party is full, click to buy the NFT!</p>
                        <button class="buy" on:click={buy}>Buy!</button>
                    {:else if state == "relist"}
                        <p>This NFT has been bought! Click to list it for resale!</p>
                        <button class="buy" on:click={sell}>Sell!</button>
                    {/if}
                </div>

                {#if state == "awaiting"}
                    <div class="confirmation">
                        <p>Awaiting confirmation from blockchain...</p>
                    </div>
                {/if}

                <div class="row">
                    <div class="column">
                        <p class="label">Host</p>
                        <p class="host">{party.host.substring(0, 10)}</p>
                    </div>

                    <div class="column">
                        <p class="label">Initial Price</p>
                        <EthAmount amount={ethers.utils.formatEther(party.buyPrice)} />
                    </div>

                    <div class="column">
                        <p class="label">Resale Price</p>
                        <EthAmount amount={ethers.utils.formatEther(party.resalePrice)} />
                    </div>
                </div>

                {#if state == "invest" || state == "filled"}
                    <div>
                        <p class="label">Progress</p>
                        <ProgressBar percentage={party.progress} />
                    </div>
                {/if}

                <div>
                    <p class="label">Description</p>
                    <p class="description">{party.description ?? "No description available."}</p>
                </div>
            </div>
        </div>
    </Popup>
{/if}

<style lang="scss">
    .row {
        display: flex;
        justify-content: space-between;

        .details {
            width: calc(50% - 16px);
            margin-left: 32px;

            h2 {
                color: black;
                font-weight: 500;
                margin: 0;
            }

            .collection {
                color: #828282;
                text-transform: uppercase;
            }
        }
    }

    .invest-box {
        margin-top: 16px;
        background: #efefef;
        border-radius: 4px;
        padding: 16px;

        div {
            display: flex;
        }

        p {
            color: #4f4f4f;
            font-size: small;
            margin-top: 0;
        }

        button {
            cursor: pointer;
            transition: all 0.3s;
            height: 30px;
            background: #6a37bc;
            border: none;
            border-radius: 4px;
            padding: 8px;
            margin-top: 1px;
            margin-left: 16px;

            font-weight: 600;

            &:hover {
                background: rgb(86, 42, 156);
            }

            &.buy {
                margin-left: 0;
                width: 100%;
            }
        }

        .confirmation {
            p {
                margin: 16px 0 0 0;
            }
        }
    }

    .host {
        color: #333333;
        font-weight: 600;
        margin: 0;
    }

    .label {
        color: #4f4f4f;
        font-size: smaller;
        font-weight: 600;
    }

    .description {
        color: #828282;
        font-size: smaller;
    }
</style>
