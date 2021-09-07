<script lang="ts">
    export let value: string
</script>

<div>
    <input bind:value />
    <p>ETH</p>
</div>

<style lang="scss">
    div {
        display: flex;
    }

    input {
        height: 32px;
        color: black;
        background: #ffffff;
        padding: 4px 8px;

        border: 1px solid #e0e0e0;
        box-sizing: border-box;
        border-radius: 4px;
    }

    p {
        color: black;
        font-weight: 600;
        margin-top: 8px;
        margin-left: -40px;
        margin-bottom: 0;
    }
</style>
