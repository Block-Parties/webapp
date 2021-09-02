<script>
  import PartyCard from '$lib/components/parties/PartyCard.svelte'
</script>

<div>
  <h2>Public Parties</h2>
  <p>Explore and invest in Public Parties here.</p>

  <div class="party-grid">
    <PartyCard />
    <PartyCard />
  </div>
</div>

<style lang="scss">
  .party-grid {
    display: flex;
    flex-flow: row wrap;
  }
</style>
