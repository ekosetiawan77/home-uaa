<script lang="ts">
	// Data kegiatan internasional - akan diisi nanti
	const kegiatanInternasional = [
		{
			id: 1,
			judul: "Universitas Alma Ata dan Al-Farabi KazNU Perkuat Kerja Sama Internasional di Bidang Pendidikan dan Riset",
			gambar: "https://almaata.ac.id/wp-content/uploads/2026/06/image-3-1080x675.jpeg",
			link: "https://almaata.ac.id/universitas-alma-ata-dan-al-farabi-kaznu-perkuat-kerja-sama-internasional-di-bidang-pendidikan-dan-riset/",
			tanggal: "2026-06-2",
			kategori: "Collaboration"
		},
		{
			id: 2,
			judul: "Kerja Sama UAA dan EAGI Kazakhstan Fokus Pengembangan Pendidikan dan Riset", 
			gambar: "https://almaata.ac.id/wp-content/uploads/2026/05/kerja-sama-UAA-dan-EAGI.png",
			link: "https://almaata.ac.id/kerja-sama-uaa-dan-eagi-kazakhstan-fokus-pengembangan-pendidikan-dan-riset/",
			tanggal: "2026-05-26",
			kategori: "Collaboration"
		},
		{
			id: 3,
			judul: "Alma Ata dan MNU Kazakhstan Resmi Bangun Kemitraan Akademik",
			gambar: "https://almaata.ac.id/wp-content/uploads/2026/05/image.png", 
			link: "https://almaata.ac.id/disaksikan-dubes-ri-uaa-dan-mnu-kazakhstan-resmi-bangun-kemitraan-akademik/",
			tanggal: "2026-05-24",
			kategori: "Collaboration"
		},
		{
			id: 4,
			judul: "Universitas Alma Ata Teken MoU dengan Samarkand State Medical University Uzbekistan",
			gambar: "https://almaata.ac.id/wp-content/uploads/2026/05/image-1-1080x675.jpeg",
			link: "https://almaata.ac.id/universitas-alma-ata-teken-mou-dengan-samarkand-state-medical-university-uzbekistan-perkuat-kerja-sama-akademik-riset-hingga-student-exchange/",
			tanggal: "2026-05-21",
			kategori: "Collaboration"
		},
		{
			id: 5,
			judul: "Universitas Alma Ata Tandatangani MoU dengan Universiti Kebangsaan Malaysia ",
			gambar: "https://almaata.ac.id/wp-content/uploads/2024/03/TTD-MoU-Malaysia-UAA.png",
			link: "https://almaata.ac.id/universitas-alma-ata-tandatangani-mou-dengan-universiti-kebangsaan-malaysia-untuk-mengawal-menuju-world-class-university/",
			tanggal: "2024-03-6",
			kategori: "Collaboration"
		},
		{
			id: 6,
			judul: "UAA Yogyakarta dan UKM Bangi Tandatangani MoU untuk Wujudkan World Class University",
			gambar: "https://almaata.ac.id/wp-content/uploads/2024/03/MoU-Malaysia-UAA.png",
			link: "https://almaata.ac.id/uaa-yogyakarta-dan-ukm-bangi-tandatangani-mou-untuk-wujudkan-world-class-university/",
			tanggal: "2024-03-06",
			kategori: "Collaboration"
		}
	];

	const kategoriColors = {
		"Conference": "bg-primary text-white",
		"Workshop": "bg-accent text-white", 
		"Seminar": "bg-green-500 text-white",
		"Collaboration": "bg-purple-500 text-white",
		"Exchange": "bg-orange-500 text-white",
		"Research": "bg-blue-500 text-white"
	};
</script>

<section class="container mx-auto px-4 sm:px-6 lg:px-16 py-16">
	<!-- Header Section -->
	<div class="text-center mb-16">
		<h3 class="text-accent font-philosopher text-lg font-medium sm:text-xl md:text-2xl mb-4">
			Global Engagement
		</h3>
		<h1 class="text-primary font-philosopher text-3xl font-semibold sm:text-4xl md:text-5xl">
			Kegiatan Internasional
		</h1>
		<p class="font-instrument text-[#567784] text-base sm:text-lg mt-6 max-w-3xl mx-auto">
			Universitas Alma Ata aktif dalam berbagai kegiatan internasional untuk memperluas jaringan dan meningkatkan kualitas pendidikan
		</p>
	</div>

	<!-- Kegiatan Grid -->
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
		{#each kegiatanInternasional as kegiatan}
			<article class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
				<div class="relative">
					<img 
						src={kegiatan.gambar} 
						alt={kegiatan.judul}
						class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
					/>
					<div class="absolute top-4 left-4">
						<span class="px-3 py-1 rounded-full text-xs font-medium font-instrument {kategoriColors[kegiatan.kategori] || 'bg-gray-500 text-white'}">
							{kegiatan.kategori}
						</span>
					</div>
					<div class="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
						<span class="text-xs font-instrument text-gray-700">{new Date(kegiatan.tanggal).toLocaleDateString('id-ID')}</span>
					</div>
				</div>
				<div class="p-6">
					<h3 class="text-primary font-philosopher text-lg font-semibold mb-3 line-clamp-2">
						{kegiatan.judul}
					</h3>
					<a 
						href={kegiatan.link}
						target="_blank"
						class="inline-flex items-center text-accent font-instrument text-sm font-medium hover:text-accent/80 transition-colors duration-200"
					>
						Baca Selengkapnya
						<svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
						</svg>
					</a>
				</div>
			</article>
		{/each}
	</div>

	<!-- Load More Button -->
	<div class="text-center mb-16">
		<a
			href="https://almaata.ac.id/category/kerjasama/"
			class="inline-block bg-primary hover:bg-primary/80 font-instrument rounded-xl px-8 py-4 text-white font-medium transition-all duration-300"
		>
			Lihat Lebih Banyak
		</a>
	</div>
	


</section>

<style>
	.line-clamp-2 {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>