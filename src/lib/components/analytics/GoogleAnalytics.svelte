<script>
	// import { dev } from '$app/environment';
	import { page } from '$app/stores';

	let id = 'G-6GJXBWMVYT';

	$: {
		if (typeof gtag !== 'undefined') {
			gtag('config', id, {
				page_title: document.title,
				page_path: $page.url.pathname
			});
		}
	}
</script>

<svelte:head>
	{#if id}
		<script async src={`https://www.googletagmanager.com/gtag/js?id=${id}`}></script>

		<script>
			window.dataLayer = window.dataLayer || [];

			function gtag() {
				dataLayer.push(arguments);
			}

			gtag('js', new Date());
			gtag('config', 'G-6GJXBWMVYT');
		</script>
	{/if}
</svelte:head>
