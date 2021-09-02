<script lang="ts">
    import StatusTag from "$lib/components/common/StatusTag.svelte"

    export let party
</script>

<div class="card">
    <div class="row">
        <StatusTag status={"public"} />
    </div>

    <div class="nft-display">
        <img src="/images/logo.png" alt="" />
    </div>

    <div class="details">
        <h3>Andrew Yang</h3>
        <p class="collection">Crypto Punks</p>

        <div class="row">
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
    </div>
</div>

<style lang="scss">
    .card {
        box-sizing: border-box;
        border-radius: 10px;
        border: 1px solid #e0e0e0;
        padding: 16px;

        h3 {
            color: black;
        }
    }

    .nft-display {
        background: #f2f2f2;
        border-radius: 10px;
        margin: 16px 0;
        padding: 32px;
    }

    .details {
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

    .row {
        display: flex;
        justify-content: space-between;
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
</style>
