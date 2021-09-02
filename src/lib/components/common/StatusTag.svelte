<script lang="ts">
    export let status: string

    function getColor() {
        switch (status) {
            case "public": return "#EBF9F9"
        }
    }

    function getTextColor() {
        switch (status) {
            case "public": return "#49ABAB"
        }
    }
</script>

<div style="background: {getColor()}">
    <p style="color: {getTextColor()}">{status}</p>
</div>


<style lang="scss">
    div {
        padding: 8px;
        border-radius: 4px;
    }

    p {
        margin: 0;
        text-transform: uppercase;
        font-size: smaller;
        font-weight: 500;
    }
</style>