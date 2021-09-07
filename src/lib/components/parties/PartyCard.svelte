<script lang="ts">
    import StatusTag from "$lib/components/common/StatusTag.svelte"
    import ProgressBar from "$lib/components/common/ProgressBar.svelte"
    import NftDisplay from "$lib/components/common/NftDisplay.svelte"
    import EthAmount from "$lib/components/common/EthAmount.svelte"
    import { ethers } from "ethers"

    export let party
</script>

<div class="card" on:click>
    <div class="row">
        <StatusTag status={"public"} />
    </div>

    <NftDisplay imageUrl={party.imageUrl} />

    <div class="details">
        <h3>{party.name}</h3>
        <p class="collection">{party.collection}</p>

        <div class="row">
            <div class="column">
                <p class="label">Initial Price</p>
                <EthAmount amount={ethers.utils.formatEther(party.buyPrice)} />
            </div>

            <div class="column">
                <p class="label">Resale Price</p>
                <EthAmount amount={ethers.utils.formatEther(party.resalePrice)} />
            </div>
        </div>
    </div>

    <!-- TODO -->
    <ProgressBar percentage={party.progress} />
</div>

<style lang="scss">
    .row {
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
    }

    .card {
        cursor: pointer;
        transition: all 0.3s;

        width: 320px;
        margin: 16px;

        box-sizing: border-box;
        border-radius: 10px;
        border: 1px solid #e0e0e0;
        padding: 16px;

        h3 {
            color: black;
        }

        &:hover {
            box-shadow: 0px 0px 3px 1px #e0e0e0aa;
        }
    }

    .details {
        margin-bottom: 16px;

        h3 {
            color: black;
            font-weight: 600;
        }

        p {
            color: gray;
        }

        .collection {
            margin-top: -8px;
            text-transform: uppercase;
            font-size: smaller;
        }
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
</style>
