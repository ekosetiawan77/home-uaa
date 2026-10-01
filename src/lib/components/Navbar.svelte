<script lang="ts">
	import { page } from '$app/state';
	import logo from '$lib/assets/almaata.png';
	let isSidebarOpen = $state(false);
	let hoveredDropdown = $state<number | null>(null);
	let hoverTimeout: number | null = null;
	let isDropdown = $state<number | null>(null);

	function toggleDropdown(index: number) {
		isDropdown = isDropdown === index ? null : index;
	}

	const routes = [
		{ name: 'Beranda', href: '/' },
		{
			name: 'Tentang UAA',
			dropdown: true,
			children: [
				{ name: 'Visi & Misi', href: '/about' },
				{ name: 'Struktur Organisasi', href: '/struktur-organisasi' },
				{
					name: 'UAA Prospectus',
					href: 'https://drive.google.com/file/d/1tggUyCGsSft2DWhlL-QwCxeah7CMgrKN/view'
				},
				{ name: 'Lowongan Kerja UAA', href: '/lowongan-kerja' },
				{ name: 'Kegiatan Internasional', href: '/kegiatan-internasional' },
				{ name: 'Kerja sama', href: '/kerja-sama' },
				{
					name: 'Download File Universitas',
					href: '/download-file'
				}
			]
		},
		{
			name: 'Fakultas',
			dropdown: true,
			children: [
				{ name: 'Fakultas Kedokteran dan Ilmu-ilmu Kesehatan', href: 'https://fkik.almaata.ac.id/' },
				{ name: 'Fakultas Ilmu Tarbiyah dan Keguruan  ', href: 'https://fitk.almaata.ac.id/' },
				{ name: 'Fakultas Ekonomi dan Bisnis', href: 'https://feb.almaata.ac.id/' },
				{ name: 'Fakultas Sains, Rekayasa dan Teknologi', href: 'https://fkt.almaata.ac.id/' }
			]
		},
		{ name: 'Penelitian & Pengabdian', href: 'https://lppm.almaata.ac.id/' },
		{ name: 'KJM', href: 'https://kjm.almaata.ac.id/' },
		{ name: 'Kemahasiswaan', href: 'https://kemahasiswaan.almaata.ac.id/' },
		{ name: 'CDC & Alumni', href: 'https://cdc.almaata.ac.id/' },
		{ name: 'Sarana Prasarana', href: 'https://almaata.ac.id/sarana-prasarana/' }
	];

	function handleMouseEnter(index: number) {
		if (hoverTimeout) {
			clearTimeout(hoverTimeout);
			hoverTimeout = null;
		}
		hoveredDropdown = index;
	}

	function handleMouseLeave() {
		hoverTimeout = setTimeout(() => {
			hoveredDropdown = null;
		}, 150);
	}

	$effect(() => {
		page.url && (isSidebarOpen = false);
		// Close sidebar when clicking outside
		const handleClickOutside = (event: MouseEvent) => {
			const sidebar = document.getElementById('sidebar');
			const menuToggle = document.getElementById('menu-toggle');

			if (
				sidebar &&
				menuToggle &&
				!sidebar.contains(event.target as Node) &&
				!menuToggle.contains(event.target as Node) &&
				isSidebarOpen
			) {
				// isSidebarOpen = false;
			}
		};

		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	});

	$effect(() => {
		const ai = document.getElementsByTagName('elevenlabs-convai');
		if (ai) {
			if (isSidebarOpen) {
				ai[0].classList.add('hidden');
			} else {
				ai[0].classList.remove('hidden');
			}
		}

		const whatsApp = document.getElementById('whatsapp');
		if (whatsApp) {
			if (isSidebarOpen) {
				whatsApp.classList.add('hidden');
			} else {
				whatsApp.classList.remove('hidden');
			}
		}
	});
</script>

<!-- Navbar -->
<nav class="bg-primary sticky top-0 z-50 w-full px-6 py-4">
	<div class="container mx-auto flex w-full items-center justify-between lg:px-16">
		<!-- Logo -->
		<a href="/">
			<img src={logo} alt="Almaata Logo" class="h-10" />
		</a>

		<!-- Desktop Menu -->
		<ul class="hidden items-center gap-4 md:flex">
			{#each routes as route, i}
				{#if route.dropdown}
					<li class="group relative">
						<div
							class="font-philosopher font-medium text-white transition-all duration-300 flex items-center gap-1 hover:text-accent cursor-pointer py-2"
						>
							{route.name}
							<svg class="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
							</svg>
						</div>
						<ul
							class="absolute top-full left-0 min-w-64 rounded-lg bg-white text-black shadow-lg border border-gray-100 py-2 opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-200 transform origin-top"
						>
							{#each route.children as child}
								<li>
									<a 
										href={child.href} 
										class="block px-4 py-3 text-sm hover:bg-accent/10 hover:text-accent transition-colors duration-200 font-philosopher"
									>
										{child.name}
									</a>
								</li>
							{/each}
						</ul>
					</li>
				{:else}
					<li>
						<a
							href={route.href}
							class="font-philosopher hover:text-accent font-medium text-white transition-all duration-300"
						>
							{route.name}
						</a>
					</li>
				{/if}
			{/each}
			<a
				href="https://almaata.id/Website"
				target="_blank"
				class="bg-accent font-philosopher hover:bg-accent/80 rounded-md px-4 py-2 font-medium text-white transition-all duration-300"
			>
				PMB
			</a>
		</ul>

		<!-- Mobile Menu Button -->
		<button
			id="menu-toggle"
			class="text-white focus:outline-none md:hidden"
			onclick={() => (isSidebarOpen = !isSidebarOpen)}
		>
			{#if isSidebarOpen}
				<!-- Icon Close -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			{:else}
				<!-- Icon Burger -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16m-7 6h7"
					/>
				</svg>
			{/if}
		</button>
	</div>
</nav>

<!-- Sidebar for Mobile -->
<div
	id="sidebar"
	class="bg-primary fixed top-0 right-0 z-40 h-full w-full transform shadow-lg transition-transform duration-300 ease-in-out md:hidden"
	class:translate-x-0={isSidebarOpen}
	class:translate-x-full={!isSidebarOpen}
>
	<div class="flex items-center justify-between p-4">
		<img src={logo} alt="Almaata Logo" class="h-10" />
		<button
			class="text-white focus:outline-none"
			onclick={() => (isSidebarOpen = false)}
			aria-label="Close sidebar"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6M6 6l12 12"
				/>
			</svg>
		</button>
	</div>

	<ul class="flex flex-col py-4">
		{#each routes as route, i}
			{#if route.dropdown}
				<li class="w-full border-b border-white/10">
					<button
						onclick={() => toggleDropdown(i)}
						class="font-philosopher flex w-full items-center justify-between px-6 py-4 font-medium text-white transition-all duration-300 hover:bg-accent/10 text-left"
					>
						<span>{route.name.toUpperCase()}</span>
						<svg class="w-5 h-5 transition-transform duration-200" class:rotate-180={isDropdown === i} fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
						</svg>
					</button>
					<div class="overflow-hidden transition-all duration-300" class:max-h-0={isDropdown !== i} class:max-h-96={isDropdown === i}>
						<ul class="bg-primary/60 pb-2">
							{#each route.children as child}
								<li>
									<a 
										href={child.href} 
											class="block w-full px-8 py-3 text-sm text-white/90 transition-all duration-200 hover:bg-accent/20 hover:text-white font-philosopher text-left"
									>
										{child.name}
									</a>
								</li>
							{/each}
						</ul>
					</div>
				</li>
			{:else}
				<li class="w-full border-b border-white/10">
					<a
						href={route.href}
						class="font-philosopher block w-full px-6 py-4 font-medium text-white transition-all duration-300 hover:bg-accent/10 text-left"
					>
						{route.name.toUpperCase()}
					</a>
				</li>
			{/if}
		{/each}
		<li class="mt-6 px-6">
			<a
				href="https://almaata.id/Website"
				target="_blank"
				class="bg-accent font-philosopher hover:bg-accent/80 block w-full rounded-lg px-4 py-3 font-medium text-white transition-all duration-300 text-center"
			>
				PMB
			</a>
		</li>
	</ul>
</div>

<!-- Overlay when sidebar is open -->
{#if isSidebarOpen}
	<button
		class="fixed inset-0 z-30 bg-black/40 md:hidden"
		onclick={() => (isSidebarOpen = false)}
		aria-label="Close sidebar"
	></button>
{/if}
