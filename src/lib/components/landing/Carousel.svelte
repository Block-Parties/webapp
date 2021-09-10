<script lang="ts">
    import { onMount } from "svelte"
    import { each } from "svelte/internal"

    let itemCount: number
    let activeIndex = 0
    let items: HTMLElement[]

    // listen for changes to activeIndex and items
    // $: if (activeIndex != null && items != null) updateContent()

    onMount(() => {
        items = [...document.getElementById("content-wrapper").childNodes].filter((e: Element) => e.tagName == "DIV")
        itemCount = items.length

        items.slice(1).forEach((i) => (i.style.display = "none"))

        updateContent()
    })

    function updateContent() {
        const container = document.getElementById("content-wrapper")
        container.style.opacity = "0"

        setTimeout(() => {
            for (let i = 0; i < items.length; i++) {
                items[i].style.display = i == activeIndex ? "flex" : "none"
            }

            container.style.opacity = "1"
        }, 250)
    }

    function showNext() {
        activeIndex = (activeIndex + 1) % itemCount
        updateContent()
    }

    function showPrev() {
        activeIndex = activeIndex == 0 ? itemCount - 1 : activeIndex - 1
        updateContent()
    }
</script>

<div class="outer">
    <div class="arrow" on:click={showPrev}>
        <img src="/images/arrow_left.svg" alt="previous" />
    </div>

    <div id="content-wrapper">
        <slot />
    </div>

    <div class="arrow" on:click={showNext}>
        <img src="/images/arrow_right.svg" alt="previous" />
    </div>
</div>

<div class="dots">
    {#each { length: itemCount } as _, i}
        <div class="dot {activeIndex == i ? 'active' : ''}" on:click={() => (activeIndex = i)} />
    {/each}
</div>

<style lang="scss">
    .outer {
        display: flex;
        align-items: center;
    }

    #content-wrapper {
        margin: 0 32px;

        transition: all 0.25s;
    }

    .arrow {
        cursor: pointer;
        transition: all 0.3s;
        opacity: 0.2;

        &:hover {
            opacity: 1;
        }
    }

    .dots {
        display: flex;
        justify-content: center;
        margin-top: 64px;

        .dot {
            cursor: pointer;
            transition: all 0.3s;

            margin: 0 16px;
            width: 16px;
            height: 16px;
            border-radius: 8px;

            background: #d7d4e7;

            &.active {
                background: #170d4d;
            }
        }
    }
</style>
