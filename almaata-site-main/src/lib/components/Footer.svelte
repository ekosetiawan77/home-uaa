<script lang="ts">
	import logo from '$lib/assets/almaata.png';
	import Youtube from '$lib/assets/Youtube.svelte';
	import Facebook from '$lib/assets/Facebook.svelte';
	import Instagram from '$lib/assets/Instagram.svelte';
	import { SITE_INFO } from '$lib/SITE_INFO';
	import TikTok from '$lib/assets/TikTok.svelte';
	import wa_icon from '$lib/assets/whatsapp_icon.svg';

	const menus = {
		'Menu Direktorat': [
			{
				judul: 'Direktorat SDM',
				link: '#'
			},
			{
				judul: 'Direktorat CISDT',
				link: '#'
			},
			{
				judul: 'Direktorat Akademik',
				link: 'https://almaata.ac.id/akademik/'
			},
			{
				judul: 'Direktorat Perencanaan Aset dan Sarpras',
				link: '#'
			},
			{
				judul: 'Direktorat Admisi',
				link: 'https://pmb.almaata.ac.id/'
			},
			{
				judul: 'Direktorat Kemahasiswaan',
				link: 'https://kemahasiswaan.almaata.ac.id/'
			}
		],
		'Menu Lainnya': [
			{
				judul: 'CDC dan Alumni',
				link: 'https://cdc.almaata.ac.id/'
			}
		],
		'Menu Unit Kerja': [
			{
				judul: 'LPPM',
				link: 'https://lppm.almaata.ac.id/'
			},
			{
				judul: 'KJM',
				link: 'https://kjm.almaata.ac.id/'
			},
			{
				judul: 'AAU Press',
				link: 'https://aaupress.almaata.ac.id/'
			},
			{
				judul: 'ALTC ',
				link: 'https://altc.almaata.ac.id/'
			},
			{
				judul: 'Perpustakaan',
				link: 'https://lib.almaata.ac.id/'
			}
		]
	};

	const contact = ['Telp (0274) 434 2288 & (0274) 434 2270', 'uaa@almaata.ac.id'];
	const socials = [
		{
			icon: Facebook,
			link: 'https://www.facebook.com/UniversitasAlmaAtaYogyakarta/'
		},
		{
			icon: Instagram,
			link: 'http://instagram.com/universitas_almaata'
		},
		{
			icon: Youtube,
			link: 'https://www.youtube.com/channel/UCxPQvyN22GKU5xdU-DD4P4w'
		},
		{
			icon: TikTok,
			link: 'https://www.tiktok.com/@universitas_almaata'
		}
	];
</script>

<footer class="bg-primary flex w-full flex-col justify-between">
	<elevenlabs-convai agent-id="VfNNXlJa13G9FY33cuYr"></elevenlabs-convai><script
		src="https://elevenlabs.io/convai-widget/index.js"
		async
		type="text/javascript"
	></script>
	<button
		id="whatsapp"
		class="fixed right-4 bottom-32 z-50 m-4 cursor-pointer rounded-full bg-[#3EB54C] p-2 duration-150 ease-in-out hover:bg-green-500"
		onclick={() =>
			window.open(
				`https://api.whatsapp.com/send?phone=${SITE_INFO.phone_number}&text=Halo, saya ingin bertanya tentang hal-hal yang terkait dengan universitas Alma Ata`
			)}
		aria-label="Whatsapp"
	>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="h-12 w-12">
			<path
				fill="#fff"
				d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
			></path><path
				fill="#fff"
				d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
			></path><path
				fill="#cfd8dc"
				d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
			></path><path
				fill="#40c351"
				d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
			></path><path
				fill="#fff"
				fill-rule="evenodd"
				d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
				clip-rule="evenodd"
			></path>
		</svg>
	</button>
	<section class="container mx-auto px-4 py-8 sm:px-6 lg:px-16">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
			<!-- Logo & Contact -->
			<div class="lg:col-span-2">
				<a href="/" class="block mb-4">
					<img src={logo} alt="Universitas Alma Ata" class="h-16 w-auto" />
				</a>
				<p class="text-white text-sm mb-4 max-w-sm">
					Jl. Brawijaya No.99, Tamantirto, Kasihan, Bantul, DIY 55183
				</p>
				<div class="space-y-2 mb-4">
					{#each contact as item}
						<p class="text-white text-sm flex items-center gap-2">
							<span class="w-2 h-2 bg-accent rounded-full"></span>
							{item}
						</p>
					{/each}
				</div>
				<div class="flex items-center gap-3">
					{#each socials as social}
						{@const Icon = social.icon}
						<a href={social.link} target="_blank" class="hover:scale-110 transition-transform">
							<Icon classname="text-gray-100 hover:text-accent transition-colors" />
						</a>
					{/each}
				</div>
			</div>

			<!-- Quick Links -->
			<div>
				<h3 class="text-accent font-philosopher text-lg font-semibold mb-3">Link Cepat</h3>
				<div class="space-y-2">
					<a href="https://almaata.id/Website" target="_blank" class="block text-white text-sm hover:text-accent transition-colors">PMB</a>
					<a href="https://kemahasiswaan.almaata.ac.id/" target="_blank" class="block text-white text-sm hover:text-accent transition-colors">Kemahasiswaan</a>
					<a href="https://lppm.almaata.ac.id/" target="_blank" class="block text-white text-sm hover:text-accent transition-colors">LPPM</a>
					<a href="https://cdc.almaata.ac.id/" target="_blank" class="block text-white text-sm hover:text-accent transition-colors">CDC & Alumni</a>
					<a href="https://lib.almaata.ac.id/" target="_blank" class="block text-white text-sm hover:text-accent transition-colors">Perpustakaan</a>
				</div>
			</div>

			<!-- Fakultas -->
			<div>
				<h3 class="text-accent font-philosopher text-lg font-semibold mb-3">Fakultas</h3>
				<div class="space-y-2">
					<a href="https://fkik.almaata.ac.id/" target="_blank" class="block text-white text-sm hover:text-accent transition-colors">FKIK</a>
					<a href="https://fitk.almaata.ac.id/" target="_blank" class="block text-white text-sm hover:text-accent transition-colors">FITK</a>
					<a href="https://feb.almaata.ac.id/" target="_blank" class="block text-white text-sm hover:text-accent transition-colors">FEB</a>
					<a href="https://fkt.almaata.ac.id/" target="_blank" class="block text-white text-sm hover:text-accent transition-colors">FSET</a>
				</div>
			</div>
		</div>
	</section>
	<section class="w-full bg-black/30 p-3">
		<p class="text-center text-white">Copyright &copy; 2025 Universitas Alma Ata</p>
	</section>
</footer>
