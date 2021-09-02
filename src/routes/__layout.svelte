<script lang="ts">
	import Footer from '$lib/components/layout/Footer.svelte';
	import NavBar from '$lib/components/layout/NavBar.svelte';
</script>

<NavBar />

<main>
	<slot />
</main>

<Footer />

<style lang="scss">
	:global(body) {
		margin: 0;
	}

	main {
		min-height: calc(100vh - 70px - 360px);
	}
</style>
