<script lang="ts">
    let activeIndex = 0

    function showNext() {}

    function showPrev() {}
</script>

<div class="outer">
    <div class="arrow" on:click={showPrev}>
        <img src="/images/arrow_left.svg" alt="previous" />
    </div>

    <div class="content">
        <slot />
    </div>

    <div class="arrow" on:click={showPrev}>
        <img src="/images/arrow_right.svg" alt="previous" />
    </div>
</div>

<div class="dots">
    <div class="dot {activeIndex == 0 ? 'active' : ''}" />
    <div class="dot {activeIndex == 1 ? 'active' : ''}" />
    <div class="dot {activeIndex == 2 ? 'active' : ''}" />
</div>

<style lang="scss">
    .outer {
        display: flex;
        align-items: center;
    }

    .content {
        margin: 0 32px;
    }

    .dots {
        display: flex;
        justify-content: center;
        margin-top: 64px;

        .dot {
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
