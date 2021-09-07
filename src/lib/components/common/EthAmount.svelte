<script lang="ts">
    // TODO: should probably be big number
    export let amount
</script>

<div>
    <div class="eth-amount">
        <img src="/images/coins/ethereum.png" alt="ether-icon" />
        <p>{amount}</p>
    </div>
</div>

<style lang="scss">
    div {
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 24px;
            height: 24px;
            margin-right: 4px;
        }

        p {
            color: #333333;
            font-weight: 600;
            margin: 0;
        }
    }
</style>
