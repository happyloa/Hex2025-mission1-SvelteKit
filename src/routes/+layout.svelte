<script>
	import { links } from 'unplugin-fonts/head';
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	{#each links as link}
		<link {...link?.attrs ?? {}} />
	{/each}
</svelte:head>

{@render children?.()}
