<script>
	import Head from '$lib/components/layout/Head.svelte';
	import Blogs from '$lib/components/Blogs.svelte';

	export let data;
	let posts = data.posts;
</script>

<Head />

<div class="pt-12">
	<img src="/vaibhav.jpg" alt="Vaibhav Chopra" class="rounded-full h-16 mb-6"/>
	<h1
		class="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"
	>
		Welcome to SudoMakes!
	</h1>
	<p class="text-xl prose-xl text-gray-800 dark:text-gray-400">
		This is my personal website where I write about my projects and ventures. To get updates, please check this site often, or subscribe to my RSS Feed.
	</p>
</div>

<Blogs title="Latest Posts" h2 {posts} search={false} count={3} />
