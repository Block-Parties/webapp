<script lang="ts">
    export let percentage = 0
</script>

<div class="outer">
    <div class="inner" style="width: {percentage * 100}%;" />
</div>

<style lang="scss">
    .outer {
        background: #efe6ff;
        border-radius: 20px;

        width: 100%;
        height: 12px;
    }

    .inner {
        transition: all 0.3s;

        height: 12px;
        background: #6a37bc;
        border-radius: 20px;
    }
</style>
