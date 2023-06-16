<script>
import { page } from '$app/stores'

const dev = process.env.NODE_ENV === 'development'
</script>

<svelte:head>
	<title>{$page.status} - uhhhdetective.xyz</title>
</svelte:head>

<div class="m-auto flex h-screen text-center">
	<div class="m-auto">
		<h1 class="text-9xl font-bold text-red-300">{$page.status}</h1>
		<h2 class="text-3xl font-bold text-white">{$page.error.message}</h2>
		{#if dev}
			<pre class="text-white">{$page.error.stack}</pre>
		{/if}
	</div>
</div>
