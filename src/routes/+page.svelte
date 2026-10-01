<script lang="ts">
	import unggul from '$lib/assets/unggul.png';
	import bg from '$lib/assets/background.svg';
	import play from '$lib/assets/play.svg';
	// @ts-ignore
	import Splide from '@splidejs/svelte-splide/components/Splide/Splide.svelte';
	// @ts-ignore
	import SplideSlide from '@splidejs/svelte-splide/components/SplideSlide/SplideSlide.svelte';
	import { writable } from 'svelte/store';
	import Card from '$lib/components/Card.svelte';
	import Fakultas from '$lib/sections/Fakultas.svelte';
	import Pesantren from '$lib/sections/Pesantren.svelte';
	import Daftar from '$lib/sections/Daftar.svelte';
	import Alasan from '$lib/sections/Alasan.svelte';
	import profile_banner from '$lib/assets/images/profile_banner.png';

	let splide = $state(null);
	let isPlaying = $state(false);

	let currentSlide = writable(0);

	function goToSlide(index: number) {
		// @ts-ignore
		splide?.go(index);
		currentSlide.set(index);
	}

	$effect(() => {
		// @ts-ignore
		splide?.on('moved', (newIndex: number) => {
			currentSlide.set(newIndex);
		});
	});

	const images = $state([
		'/banner-web.webp',
		'/Banner-3.webp',
		'/S1-Sistem-Informasi-ASIIN.webp',
		'/S1-Informatika-ASIIN.webp',
		'/S1-Pend-Matematika-ASIIN.webp',
		'/S1-ESY-Unggul.webp',
		'/Banner-10.webp',
		'/Banner-7.webp',
		'/Banner-9.webp',
		'/Banner-8.webp',
		'/Banner-5.webp',
		'/uaa-site-banner-6.webp'
	]);

	const prestasi = [
		{
			title: 'Mahasiswa Universitas Alma Ata Raih Juara 3 Silat Nasional',
			image: '/images/prestasi/Arep-Kurniawan.jpg',
			link: 'https://almaata.ac.id/prestasi-mahasiswa-uaa-juara-3-silat-nasional-2025/'
		},
		{
			title: 'Mahasiswa FEB Universitas Alma Ata Raih Bronze Medal di Inventsy Essay Competition',
			image: '/images/prestasi/Mutamaroh.jpg',
			link: 'https://almaata.ac.id/prestasi-mahasiswa-uaa-bronze-medal-inventsy-competition/'
		},
		{
			title:
				'Cleo Meidita Shafira atas diraihnya Juara Umum 2 dan Juara 2 Lomba Infografis Tingkat Nasional',
			image: '/images/prestasi/Cleo-Meidita-Shafira.png',
			link: 'https://kemahasiswaan.almaata.ac.id/cleo-meidita-shafira-atas-diraihnya-juara-umum-2-dan-juara-2-lomba-infografis/'
		},
		{
			title: '3rd Winner Speech Competition at Eldufest International Competition',
			image: '/images/prestasi/Muhammad-Gilang-Syabani.png',
			link: 'https://kemahasiswaan.almaata.ac.id/m-gilang-syabani-atas-diraihnya-3rd-winner-speech-competition/'
		}
	];

	const uaa_updates = [
		{
			title: 'Universitas Alma Ata Gelar 7th APHNI Conference 2025',
			image: 'https://almaata.ac.id/wp-content/uploads/2025/09/7th-APHNI.jpeg',
			link: 'https://almaata.ac.id/7th-aphni-conference-2025-universitas-alma-ata/'
		},
		{
			title: 'Universitas Alma Ata Resmikan Kecerdasan Buatan untuk Belajar Nahwu AI',
			image: 'https://almaata.ac.id/wp-content/uploads/2025/09/IMG_20250921_093543-3562425161.webp',
			link: 'https://kedu.suaramerdeka.com/pendidikan/2115951990/pertama-di-dunia-universitas-alma-ata-resmikan-kecerdasan-buatan-untuk-belajar-nahwu-ai'
		},
		{
			title: '2nd Alma Ata International Conference',
			image:
				'https://almaata.ac.id/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-18-at-16.29.23.jpeg',
			link: 'https://almaata.ac.id/2nd-alma-ata-international-conference/'
		}
	];

	const kemitraan = [
		{
			title:
				'Kerja Sama UAA dan EAGI Kazakhstan Fokus Pengembangan Pendidikan dan Riset',
			image:
				'https://almaata.ac.id/wp-content/uploads/2026/05/kerja-sama-UAA-dan-EAGI.png',
			link: 'https://almaata.ac.id/kerja-sama-uaa-dan-eagi-kazakhstan-fokus-pengembangan-pendidikan-dan-riset/'
		},
		{
			title:
				'Disaksikan Dubes RI, UAA dan MNU Kazakhstan Resmi Bangun Kemitraan Akademik',
			image:
				'https://almaata.ac.id/wp-content/uploads/2026/05/image.png',
			link: 'https://almaata.ac.id/disaksikan-dubes-ri-uaa-dan-mnu-kazakhstan-resmi-bangun-kemitraan-akademik/'
		},
		{
			title:
				'Universitas Alma Ata Teken MoU dengan Samarkand State Medical University Uzbekistan, Perkuat Kerja Sama Akademik, Riset Hingga Student Exchange',
			image:
				'https://almaata.ac.id/wp-content/uploads/2026/05/image-1-1080x675.jpeg',
			link: 'https://almaata.ac.id/universitas-alma-ata-teken-mou-dengan-samarkand-state-medical-university-uzbekistan-perkuat-kerja-sama-akademik-riset-hingga-student-exchange/'
		}
	];
</script>

<section class="container mx-auto px-4 sm:px-6 lg:px-16">
	<!-- Hero section - Improved responsiveness -->
	<section
		class="relative flex flex-col gap-6 px-4 py-16 text-center sm:px-6 sm:py-20 md:py-24 lg:px-0 lg:py-32"
	>
		<section class="z-10 flex h-full w-full flex-col gap-2 lg:gap-4">
			<img src={unggul} alt="Unggul" class="mx-auto h-20 lg:h-28" />
			<h1
				class="text-accent font-philosopher flex flex-col gap-2 pt-4 font-bold sm:gap-3 sm:pt-6 lg:pt-0"
			>
				<span class="text-2xl sm:text-3xl md:text-4xl lg:text-6xl">
					The Globe Inspiring University
				</span>
				<span class="text-primary text-xl leading-tight sm:text-2xl md:text-3xl lg:text-6xl">
					Mencetak Profesional Muda Berakhlak Mulia
				</span>
			</h1>
			<p
				class="font-instrument mx-auto max-w-4xl px-4 text-center text-sm text-gray-600 sm:px-0 sm:text-base lg:text-xl"
			>
				Universitas Alma Ata didirikan oleh para cendikiawan muslim dan para ulama pondok pesantren
				untuk memfasilitasi dan mempercepat pertumbuhan ilmu pengetahuan dan teknologi di bumi
				Indonesia.
			</p>
		</section>
		<section class="z-10 flex flex-col justify-center gap-3 sm:gap-4 lg:flex-row lg:gap-6">
			<a
				href="https://almaata.id/Website"
				target="_blank"
				class="bg-primary hover:bg-primary/80 font-instrument rounded-xl px-6 py-3 font-medium text-white transition-all duration-300 sm:px-8 sm:py-4"
			>
				Pendaftaran Mahasiswa Baru
			</a>
			<a
				href="#fakultas"
				class="bg-accent hover:bg-accent/80 font-instrument rounded-xl px-6 py-3 font-medium text-white transition-all duration-300 sm:px-8 sm:py-4"
			>
				Kenali Lebih Dekat
			</a>
		</section>
	</section>
	<img
		src={bg}
		alt="Background"
		class="absolute -top-0 left-0 z-0 h-[270px] w-full object-cover opacity-80 lg:-top-32 lg:h-auto lg:opacity-70"
	/>

	<!-- Banner section - Improved responsiveness -->
	<section class="">
		<Splide
			options={{
				rewind: true,
				pagination: false,
				autoplay: true,
				interval: 3000,
				gap: '1rem',
				breakpoints: {
					640: { perPage: 1 },
					768: { perPage: 1 },
					1024: { perPage: 1 }
				},
				arrows: false
			}}
			aria-label="Banner Kampus"
			bind:splide
		>
			{#each images as image}
				<SplideSlide>
					<img src={image} alt="Globe" class="h-auto w-full rounded-xl object-cover" />
				</SplideSlide>
			{/each}
		</Splide>
		<div class="mt-4 flex justify-center gap-2">
			{#each images as _, i}
				<button
					class="h-2 w-6 rounded-lg bg-gray-300 transition-all duration-300 hover:cursor-pointer sm:w-8 md:w-10 {i ===
					$currentSlide
						? 'bg-primary'
						: 'bg-gray-300'}"
					onclick={() => goToSlide(i)}
					aria-label={`Slide ${i + 1}`}
				>
				</button>
			{/each}
		</div>
	</section>

	<Alasan />

	<!-- About section - Improved responsiveness -->
	<section
		class="grid grid-cols-1 items-center gap-8 py-16 sm:gap-10 sm:py-20 md:grid-cols-2 md:gap-12 md:py-24 lg:gap-20 lg:py-16"
	>
		<div class="order-2 flex flex-col gap-3 text-left sm:gap-4 md:order-1">
			<h3
				class="text-accent font-philosopher text-start text-lg font-medium md:text-xl lg:text-2xl"
			>
				Profil Singkat
			</h3>
			<h1
				class="font-philosopher text-primary max-w-xl text-start text-[32px]/10 font-semibold md:text-4xl"
			>
				Alma Ata Lahir dari Cendekiawan Muslim dan Para Ulama
			</h1>
			<p class="font-instrument text-justify font-light text-[#567784] md:text-lg">
				Alma Ata lahir sebagai tanggapan para cendekiawan muslim dan para ulama terhadap
				perkembangan zaman, kecenderungan perubahan peradaban pola hidup, dan perilaku manusia
				dewasa ini, dan merupakan bagian dari refleksi tanggung jawab moral keagamaan untuk
				membuktikan bahwa "Islam is always suitable to be a way of life anytime and anywhere" bahwa
				"Islam sholichun fi kulli zaman wa makan". Untuk merealisasikan misi luhur dari Alma Ata
				tersebut, dibutuhkan Visi dan Misi yang baik dan dapat mengakomodir perkembangan zaman.
			</p>
			<a
				href="https://almaata.ac.id/about-alma-ata"
				target="_blank"
				class="border-primary hover:bg-primary text-primary font-instrument w-fit cursor-pointer rounded-xl border px-6 py-3 text-sm transition-all duration-300 hover:text-white sm:text-base"
			>
				Lihat selengkapnya
			</a>
		</div>
		<div class="relative order-1 md:order-2">
			{#if isPlaying}
				<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
					<div class="relative w-full max-w-3xl">
						<iframe
							width="560"
							height="315"
							src="https://www.youtube.com/embed/-eNLQF-rtnU?si=cO8Yy5BiiC7vcG4Z&autoplay=1&controls=0"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerpolicy="strict-origin-when-cross-origin"
							allowfullscreen
							class="h-[315px] w-full rounded-lg shadow-lg md:h-[450px]"
						></iframe>
						<!-- Tombol Close -->
						<button
							onclick={() => (isPlaying = false)}
							class="absolute top-0 right-0 m-2 rounded-full bg-white p-2 text-black shadow-md hover:bg-gray-200"
						>
							✕
						</button>
					</div>
				</div>
			{/if}
			<img
				src="/uaa-front-buildings.webp"
				alt="Alma Ata"
				class="h-64 w-full rounded-xl object-cover sm:h-80 md:h-auto"
			/>
			<div
				class="absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 rounded-full p-8 backdrop-blur-sm lg:p-12"
			></div>
			<button
				onclick={() => (isPlaying = !isPlaying)}
				class="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white p-4 text-white hover:cursor-pointer hover:bg-gray-200"
			>
				<img src={play} alt="Play" class="h-5 w-5 lg:h-10 lg:w-10" />
			</button>
		</div>
	</section>

	<Fakultas />

	<!-- Prestasi section - Improved responsiveness -->
	<section class="flex flex-col gap-4 py-10 sm:gap-6 lg:gap-8">
		<div class="flex flex-col gap-2 sm:gap-4">
			<h1
				class="text-primary font-philosopher text-center text-3xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl"
			>
				Prestasi kami
			</h1>
			<h3
				class="font-instrument text-center text-sm text-[#4A6470] sm:text-base md:text-lg lg:text-xl"
			>
				Prestasi Universitas Alma Ata Baik Nasional maupun Internasional
			</h3>
		</div>
		<div class="grid grid-cols-1 gap-4 py-2 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
			{#each prestasi as item}
				<Card
					variant="instagram"
					image={item.image}
					link={item.link}
					name="Prestasi"
					description={item.title}
				/>
			{/each}
		</div>
		<a
			href="https://almaata.ac.id/category/prestasi/"
			target="_blank"
			class="bg-primary hover:bg-primary/80 font-instrument mx-auto w-fit rounded-xl px-6 py-3 text-sm font-medium text-white transition-all duration-300 sm:px-8 sm:py-4 sm:text-base"
		>
			Lihat prestasi lainnya
		</a>
	</section>
</section>

<Pesantren />

<section class="container mx-auto flex flex-col gap-16 px-4 pb-16 sm:px-6 lg:px-16">
	<!-- Kemitraan section - Improved responsiveness -->
	<section class="flex flex-col gap-4">
		<div class="flex flex-col gap-2 sm:gap-4">
			<h1
				class="text-primary font-philosopher text-center text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl"
			>
				Kemitraan & Kerjasama
			</h1>
			<h3
				class="font-instrument text-center text-sm text-[#4A6470] sm:text-base md:text-lg lg:text-xl"
			>
				Universitas Alma Ata Melakukan Kerjasama Dalam Negeri Maupun Luar Negeri
			</h3>
		</div>
		<div class="grid grid-cols-1 gap-4 py-2 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
			{#each kemitraan as item}
				<Card
					variant="square"
					image={item.image}
					link={item.link}
					name="Kemitraan & Kerjasama"
					description={item.title}
				/>
			{/each}
		</div>
		<button
			class="bg-primary hover:bg-primary/80 font-instrument mx-auto w-fit rounded-xl px-6 py-3 text-sm font-medium text-white transition-all duration-300 sm:px-8 sm:py-4 sm:text-base"
		>
			Lihat kerjasama lainnya
		</button>
	</section>

	<!-- Update section - Improved responsiveness -->
	<section class="flex flex-col gap-4 sm:gap-6 lg:gap-8">
		<div class="flex flex-col gap-2 sm:gap-4">
			<h1
				class="text-primary font-philosopher text-center text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl"
			>
				UAA Update
			</h1>
			<h3
				class="font-instrument text-center text-sm text-[#4A6470] sm:text-base md:text-lg lg:text-xl"
			>
				Berita dan informasi terbaru tentang berbagai aktivitas di kampus Universitas Alma Ata
			</h3>
		</div>
		<div class="grid grid-cols-1 gap-4 py-2 sm:grid-cols-2 sm:gap-6 md:grid-cols-3">
			{#each uaa_updates as post}
				<Card
					variant="square"
					name="Update"
					link={post.link}
					image={post.image}
					description={post.title}
				/>
			{/each}
		</div>
		<button
			class="bg-primary hover:bg-primary/80 font-instrument mx-auto w-fit rounded-xl px-6 py-3 text-sm font-medium text-white transition-all duration-300 sm:px-8 sm:py-4 sm:text-base"
		>
			Lihat berita lainnya
		</button>
	</section>

	<Daftar />
</section>
