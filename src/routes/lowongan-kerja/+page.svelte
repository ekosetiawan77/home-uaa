<script lang="ts">
	const contactInfo = {
		email: "sdm@almaata.ac.id",
		alamat: "Universitas Alma Ata Jl.Brawijaya No.99, Tamantirto Yogyakarta",
		subjek: "Rekrutmen"
	};

	const posisiTersedia = ["Tenaga Ahli Humas", "Tenaga Ahli Marketing"];
	
	const kualifikasi = [
		"Pendidikan Minimal S1",
		"Pria/Wanita Usia Maksimal 40 Tahun",
		"Pengalaman min 5 tahun di bidang humas dan marketing",
		"Berpenampilan Menarik",
		"Mampu bekerja sama dalam tim dan bekerja sesuai target",
		"Disiplin, jujur dan bertanggung jawab dalam pekerjaan",
		"Kreatif dan Inovatif",
		"Terbiasa dengan Tantangan dan Tekanan",
		"Memiliki Skill komunikasi dan Negosiasi yang baik"
	];
	
	const berkasDiperlukan = [
		"Surat Lamaran",
		"CV dan Portofolio",
		"Scan/ Fotocopy Ijazah dan Transkrip Nilai yang dilegalisir",
		"Scan/ Foto Copy KTP",
		"Pas Foto",
		"Berkas Pendukung Lainnya"
	];
</script>

<section class="container mx-auto px-4 sm:px-6 lg:px-16 py-16">
	<!-- Header Section -->
	<div class="text-center mb-16">
		<h3 class="text-accent font-philosopher text-lg font-medium sm:text-xl md:text-2xl mb-4">
			Karir Bersama Kami
		</h3>
		<h1 class="text-primary font-philosopher text-3xl font-semibold sm:text-4xl md:text-5xl">
			Lowongan Kerja UAA
		</h1>
		<p class="font-instrument text-[#567784] text-base sm:text-lg mt-6 max-w-3xl mx-auto">
			Bergabunglah dengan keluarga besar Universitas Alma Ata dan berkontribusi dalam memajukan pendidikan tinggi yang berkualitas
		</p>
	</div>

	<!-- Poster Lowongan -->
	<div class="mb-16 flex justify-center">
		<div class="max-w-md w-full">
			<img 
				src="https://almaata.ac.id/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-02-at-08.35.32.jpeg" 
				alt="Poster Lowongan Kerja UAA" 
				class="w-full h-auto rounded-xl shadow-lg"
			/>
		</div>
	</div>

	<!-- Informasi Aplikasi -->
	<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
		<!-- Email Application -->
		<div class="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
			<div class="flex items-center mb-6">
				<div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mr-4">
					<svg class="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
					</svg>
				</div>
				<div>
					<h3 class="text-primary font-philosopher text-xl font-semibold">Via Email</h3>
					<p class="text-accent font-philosopher text-sm">Kirim aplikasi digital</p>
				</div>
			</div>
			<div class="space-y-4">
				<div>
					<label class="font-philosopher text-sm font-medium text-gray-700 block mb-2">Email Tujuan:</label>
					<div class="bg-gray-50 rounded-lg p-3 border">
						<p class="font-instrument text-primary font-medium">{contactInfo.email}</p>
					</div>
				</div>
				<div>
					<label class="font-philosopher text-sm font-medium text-gray-700 block mb-2">Subjek Email:</label>
					<div class="bg-gray-50 rounded-lg p-3 border">
						<p class="font-instrument text-gray-700">{contactInfo.subjek}</p>
					</div>
				</div>
			</div>
			<a 
				href="mailto:{contactInfo.email}?subject={contactInfo.subjek}"
				class="bg-primary hover:bg-primary/80 font-instrument rounded-xl px-6 py-3 text-white font-medium transition-all duration-300 inline-block mt-6 w-full text-center"
			>
				Kirim Email Sekarang
			</a>
		</div>

		<!-- Pos Application -->
		<div class="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
			<div class="flex items-center mb-6">
				<div class="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mr-4">
					<svg class="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
						<path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
					</svg>
				</div>
				<div>
					<h3 class="text-primary font-philosopher text-xl font-semibold">Via Pos</h3>
					<p class="text-accent font-philosopher text-sm">Kirim dokumen fisik</p>
				</div>
			</div>
			<div>
				<label class="font-philosopher text-sm font-medium text-gray-700 block mb-2">Alamat Tujuan:</label>
				<div class="bg-gray-50 rounded-lg p-4 border">
					<p class="font-instrument text-gray-700 leading-relaxed">{contactInfo.alamat}</p>
				</div>
			</div>
			<div class="mt-6 p-4 bg-accent/5 rounded-lg border border-accent/20">
				<p class="font-instrument text-sm text-gray-600">
					<strong>Catatan:</strong> Pastikan dokumen lengkap dan tulis subjek "{contactInfo.subjek}" pada amplop
				</p>
			</div>
		</div>
	</div>
	
</section>