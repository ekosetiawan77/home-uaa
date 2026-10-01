<script lang="ts">
	const kerjasama = {
		internasional: 45,
		nasional: 78,
		total: 123
	};

	const contactInfo = {
		email: "uaa@almaata.ac.id",
		phone: "(0274) 434 2288 & (0274) 434 2270",
		whatsapp: "6281390374871"
	};

	const mitraInternasional = [
		{ src: "https://almaata.ac.id/wp-content/uploads/2025/10/Johns-Hopkins-University.png", alt: "Partner International 1" },
		{ src: "https://almaata.ac.id/wp-content/uploads/2025/10/Mahidol-University-.png", alt: "Partner International 2" },
		{ src: "https://almaata.ac.id/wp-content/uploads/2025/10/International-Islamic-University-Malaysia-IIUM-.png", alt: "Partner International 3" },
		{ src: "https://almaata.ac.id/wp-content/uploads/2025/10/Universiti-Kebangsaan-Malaysia-UKM-.png", alt: "Partner International 4" },
		{ src: "https://almaata.ac.id/wp-content/uploads/2025/10/Prince-of-Songkla-University.jpeg", alt: "Partner International 5" },
		{ src: "https://almaata.ac.id/wp-content/uploads/2025/10/Universiti-Teknikal-Malaysia-Melaka-UTeM-.png", alt: "Partner International 6" },
		{ src: "https://almaata.ac.id/wp-content/uploads/2025/10/University-of-Malaya-UM-.png", alt: "Partner International 7" },
		{ src: "https://almaata.ac.id/wp-content/uploads/2025/10/Universiti-Putra-Malaysia-UPM-.png", alt: "Partner International 8" },
		{ src: "https://almaata.ac.id/wp-content/uploads/2025/10/NIHN-NIBIOHN-Japan.png", alt: "Partner International 9" },
		{ src: "https://almaata.ac.id/wp-content/uploads/2025/10/Boromarajonani-College-of-Nursing-Nopparat-Vajira-.jpeg", alt: "Partner International 10" },
		{ src: "https://almaata.ac.id/wp-content/uploads/2025/10/Universiti-Malaysia-Sarawak-UNIMAS-.png", alt: "Partner International 11" },
		{ src: "https://almaata.ac.id/wp-content/uploads/2025/10/Benguet-State-University.png", alt: "Partner International 12" },
	];

	const mitraNasional = [
		{ src: "https://almaata.ac.id/wp-content/uploads/2025/10/BKKBN-Jateng.png", alt: "Partner Nasional 1" },
		{ src: "https://almaata.ac.id/wp-content/uploads/2025/10/Pemerintah-Kota-Tegal.png", alt: "Partner Nasional 2" },
		{ src: "https://almaata.ac.id/wp-content/uploads/2025/10/RSUP-Dr.-Sardjito-Yogyakarta.png", alt: "Partner Nasional 3" },
		{ src: "https://almaata.ac.id/wp-content/uploads/2025/10/Dinas-Kesehatan-Pemerintah-Kabupaten-Sleman.jpeg", alt: "Partner Nasional 4" },
		{ src: "https://almaata.ac.id/wp-content/uploads/2025/10/Pemerintah-Daerah-Kabupaten-Kutai-Kartanegara.png", alt: "Partner Nasional 5" },
		{ src: "https://almaata.ac.id/wp-content/uploads/2025/10/PEMERINTAH-KABUPATEN-BREBES.jpeg", alt: "Partner Nasional 6" }
	];
</script>

<section class="container mx-auto px-4 sm:px-6 lg:px-16 py-16">
	<!-- Header Section -->
	<div class="text-center mb-16">
		<h3 class="text-accent font-philosopher text-lg font-medium sm:text-xl md:text-2xl mb-4">
			Partnership & Collaboration
		</h3>
		<h1 class="text-primary font-philosopher text-3xl font-semibold sm:text-4xl md:text-5xl">
			Kerja Sama
		</h1>
		<p class="font-instrument text-[#567784] text-base sm:text-lg mt-6 max-w-3xl mx-auto text-center">
			Universitas Alma Ata berkomitmen untuk membangun kerjasama strategis dengan berbagai institusi pendidikan, 
			pemerintah, dan industri baik di tingkat nasional maupun internasional. Melalui kerjasama ini, kami berupaya 
			meningkatkan kualitas pendidikan, penelitian, dan pengabdian kepada masyarakat.
		</p>
	</div>

	<!-- Statistik dan Jenis Kerjasama -->
	<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
		<!-- Grafik Kerjasama -->
		<div class="bg-white rounded-2xl shadow-lg p-8">
			<h2 class="text-primary font-philosopher text-xl font-semibold mb-6">
				Statistik Kerjasama
			</h2>
			
			<!-- Simple Chart -->
			<div class="flex items-end justify-center space-x-8 mb-6" style="height: 200px;">
				<div class="flex flex-col items-center">
					<div 
						class="bg-primary rounded-t-lg transition-all duration-1000 ease-out flex items-end justify-center pb-2"
						style="width: 60px; height: {(kerjasama.nasional / kerjasama.total) * 180}px;"
					>
						<span class="text-white font-instrument text-sm font-semibold">{kerjasama.nasional}</span>
					</div>
					<p class="font-philosopher text-sm font-medium text-primary mt-2">Nasional</p>
				</div>
				<div class="flex flex-col items-center">
					<div 
						class="bg-accent rounded-t-lg transition-all duration-1000 ease-out flex items-end justify-center pb-2"
						style="width: 60px; height: {(kerjasama.internasional / kerjasama.total) * 180}px;"
					>
						<span class="text-white font-instrument text-sm font-semibold">{kerjasama.internasional}</span>
					</div>
					<p class="font-philosopher text-sm font-medium text-accent mt-2">Internasional</p>
				</div>
			</div>

			<div class="text-center p-4 bg-gray-50 rounded-lg">
				<p class="font-instrument text-sm text-gray-600">
					Total {kerjasama.total} kerjasama aktif per tahun 2024
				</p>
			</div>
		</div>

		<!-- Jenis Kerjasama -->
		<div class="space-y-6">
			<div class="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6">
				<h3 class="text-primary font-philosopher text-lg font-semibold mb-4">Kerjasama Akademik</h3>
				<ul class="space-y-2 font-instrument text-[#567784] text-sm">
					<li>• Student Exchange Program</li>
					<li>• Joint Degree Program</li>
					<li>• Faculty Exchange</li>
					<li>• Curriculum Development</li>
				</ul>
			</div>

			<div class="bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl p-6">
				<h3 class="text-accent font-philosopher text-lg font-semibold mb-4">Kerjasama Penelitian</h3>
				<ul class="space-y-2 font-instrument text-[#567784] text-sm">
					<li>• Joint Research Projects</li>
					<li>• Publication Collaboration</li>
					<li>• Research Grant Applications</li>
					<li>• Technology Transfer</li>
				</ul>
			</div>
		</div>
	</div>

	<!-- Mitra Internasional -->
	<div class="mb-16">
		<div class="text-center mb-8">
			<h2 class="text-primary font-philosopher text-2xl sm:text-3xl font-semibold mb-4">
				Mitra Internasional
			</h2>
			<p class="font-instrument text-[#567784] text-base">
				Universitas dan institusi partner dari berbagai negara
			</p>
		</div>
		<div class="bg-white rounded-2xl shadow-lg p-8">
			<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
				{#each mitraInternasional as partner}
					<div class="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
						<img src="{partner.src}" alt="{partner.alt}" class="max-h-16 w-auto object-contain" />
					</div>
				{/each}
			</div>
		</div>
	</div>

	<!-- Mitra Nasional -->
	<div class="mb-16">
		<div class="text-center mb-8">
			<h2 class="text-primary font-philosopher text-2xl sm:text-3xl font-semibold mb-4">
				Mitra Nasional
			</h2>
			<p class="font-instrument text-[#567784] text-base">
				Universitas, pemerintah, dan industri dalam negeri
			</p>
		</div>
		<div class="bg-white rounded-2xl shadow-lg p-8">
			<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
				{#each mitraNasional as partner}
					<div class="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
						<img src="{partner.src}" alt="{partner.alt}" class="max-h-16 w-auto object-contain" />
					</div>
				{/each}
			</div>
		</div>
	</div>

	<!-- Contact Section -->
	<div class="bg-white rounded-2xl shadow-lg p-8">
		<div class="text-center mb-8">
			<h2 class="text-primary font-philosopher text-2xl sm:text-3xl font-semibold mb-4">
				Hubungi Kami
			</h2>
			<p class="font-instrument text-[#567784] text-base">
				Tertarik untuk bermitra? Hubungi tim kerjasama kami
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
			<div class="text-center">
				<h3 class="font-philosopher text-lg font-semibold text-primary mb-2">Email</h3>
				<a href="mailto:{contactInfo.email}" class="font-instrument text-[#567784] hover:text-primary transition-colors">
					{contactInfo.email}
				</a>
			</div>

			<div class="text-center">
				<h3 class="font-philosopher text-lg font-semibold text-primary mb-2">Telepon</h3>
				<a href="tel:{contactInfo.phone}" class="font-instrument text-[#567784] hover:text-primary transition-colors">
					{contactInfo.phone}
				</a>
			</div>

			<div class="text-center">
				<h3 class="font-philosopher text-lg font-semibold text-primary mb-2">WhatsApp</h3>
				<a href="https://wa.me/{contactInfo.whatsapp.replace(/[^0-9]/g, '')}" target="_blank" class="font-instrument text-[#567784] hover:text-primary transition-colors">
					{contactInfo.whatsapp}
				</a>
			</div>
		</div>
	</div>
</section>