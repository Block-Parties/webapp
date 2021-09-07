<script lang="ts">
    import BlockPartiesApi from "$lib/api/block_parties_api"

    import WalletHelper from "$lib/api/wallet_helper"
    import PartyCard from "$lib/components/parties/PartyCard.svelte"
    import PartyPopup from "$lib/components/parties/PartyPopup.svelte"

    import { onMount } from "svelte"

    let hostedParties: Promise<any[]> = new Promise(() => {})
    let myParties: Promise<any[]> = new Promise(() => {})

    onMount(async () => {
        await WalletHelper.connect()

        const host = await WalletHelper.getAccount()
        if (host == null) return

        hostedParties = BlockPartiesApi.fetchHostedParties(host)
        // myParties = Blo
    })

    let selectedParty
    function closePopup() {
        selectedParty = null
    }

    function showPopup(party) {
        selectedParty = party
    }
</script>

{#if selectedParty != null}
    <PartyPopup party={selectedParty} on:close={closePopup} />
{/if}

<div class="page">
    <div>
        {#await hostedParties}
            <!-- LOADING -->
        {:then parties}
            {#if parties.length > 0}
                <h1>My Hosted Parties</h1>
                <p>You're the host! Check out the parties you've started.</p>

                <div class="party-grid">
                    {#each parties as party}
                        <PartyCard {party} on:click={() => showPopup(party)} />
                    {/each}
                </div>
            {/if}
        {/await}
    </div>

    {#await myParties}
        <!-- LOADING -->
    {:then parties}
        {#if parties.length > 0}
            <h1>My Hosted Parties</h1>
            <p>You're the host! Check out the parties you've started.</p>

            <div class="party-grid">
                {#each parties as party}
                    <PartyCard {party} on:click={() => showPopup(party)} />
                {/each}
            </div>
        {/if}
    {/await}
</div>

<style lang="scss">
    .page {
        padding: 80px;
    }

    h1,
    p {
        color: black;
    }

    .party-grid {
        display: flex;
        flex-flow: row wrap;
    }
</style>
