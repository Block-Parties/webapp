<script lang="ts">
    import BlockPartiesApi from "$lib/api/block_parties_api"

    import PartyCard from "$lib/components/parties/PartyCard.svelte"
    import PartyPopup from "$lib/components/parties/PartyPopup.svelte"
    import { onMount } from "svelte"

    let selectedParty
    function closePopup() {
        selectedParty = null
    }

    function showPopup(party) {
        selectedParty = party
    }

    let parties: Promise<any[]> = new Promise(() => {})
    onMount(async () => {
        // TODO: refactor request
        parties = await BlockPartiesApi.fetchParties()
    })
</script>

{#if selectedParty != null}
    <PartyPopup party={selectedParty} on:close={closePopup} />
{/if}

<div class="page">
    <h2>Public Parties</h2>
    <p><b>Explore</b> and <b>invest</b> in Public Parties here.</p>

    <div class="party-grid">
        {#await parties}
            <!-- LOADING -->
        {:then parties}
            {#each parties as party}
                <PartyCard {party} on:click={() => showPopup(party)} />
            {/each}
        {/await}
    </div>
</div>

<style lang="scss">
    .page {
        margin: 0 80px;
        padding: 16px;
    }

    h2 {
        color: black;
        font-weight: 500;
    }

    p {
        color: black;
    }

    .party-grid {
        display: flex;
        flex-flow: row wrap;

        margin: 0 -16px;
    }
</style>
