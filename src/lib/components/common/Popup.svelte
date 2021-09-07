<script lang="ts">
    import { createEventDispatcher } from "svelte"

    const dispatch = createEventDispatcher()
    function close() {
        dispatch("close", {})
    }

    function stopPropagation(e: Event) {
        e.stopPropagation()
    }
</script>

<div class="shadow" on:click={close}>
    <div class="container" on:click={stopPropagation}>
        <div class="close-button" on:click={close}>
            <img src="/images/close.svg" alt="close" />
        </div>

        <slot />
    </div>
</div>

<style lang="scss">
    .shadow {
        animation: fadeIn 0.4s;

        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 1000;
        background: #000000aa;
    }

    .container {
        position: relative;
        animation: slideIn 0.4s;

        background: white;
        border: 2px solid #f2f2f2;
        border-radius: 8px;

        margin: 128px auto;
        min-width: 480px;
        max-width: 60vw;

        padding: 24px;
    }

    .close-button {
        cursor: pointer;
        position: absolute;
        padding: 8px;
        right: 16px;
        top: 16px;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes slideIn {
        from {
            transform: translate(0, 80px);
        }
        to {
            transform: translate(0, 0);
        }
    }
</style>
