<script lang="ts">
    export let imageUrl: string
</script>

<div>
    <img src={imageUrl} alt="" />

    <!-- TODO: Eventually we'll want to support more than just OpenSea -->
    <img class="marketplace-logo" src="/images/marketplace/opensea_logo.png" alt="opensea" />
</div>

<style lang="scss">
    div {
        flex: 1;
        align-items: center;
        justify-content: center;

        position: relative;
        background: #f2f2f2;
        border-radius: 16px;

        padding: 48px;

        img {
            object-fit: contain;
            object-position: center;
            margin: auto;
            width: 100%;
            height: 100%;
        }

        .marketplace-logo {
            position: absolute;
            bottom: 8px;
            right: 8px;

            width: 40px;
            height: 40px;
        }
    }
</style>
