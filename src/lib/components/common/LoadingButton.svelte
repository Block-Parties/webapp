<script lang="ts">
    import { Circle3 } from "svelte-loading-spinners"

    export let loading: boolean = false
</script>

<button on:click>
    {#if !loading}
        <slot />
    {:else}
        <div class="loading-indicator">
            <Circle3
                duration="2.5s"
                size="32"
                unit="px"
                ballTopLeft="#FFC6EF"
                ballTopRight="#FFD235"
                ballBottomLeft="#FFA620"
                ballBottomRight="#FF551F"
            />
        </div>
    {/if}

    <div style="width: 100%;" />
</button>

<style lang="scss">
    .loading-indicator {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    button {
        cursor: pointer;
        transition: all 0.3s;
        background: #6a37bc;
        border: none;
        border-radius: 40px;

        height: 40px;
        width: 100%;
        // margin-top: 32px;
        font-size: medium;
        font-weight: 600;

        &:hover {
            background: rgb(72, 30, 139);
        }
    }
</style>
