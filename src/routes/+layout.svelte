<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import Seo from '$lib/components/Seo.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Tracker from '$lib/components/Tracker.svelte';
	import DevMessage from '$lib/components/DevMessage.svelte';
</script>

<Seo
	title="Universitas Alma Ata Yogyakarta"
	description="Alma Ata is a university that provides quality education and produces professional and moral graduates."
/>

<Tracker />
<DevMessage />

<Navbar />
{@render children()}
<Footer />
