<script lang="ts">
	let activeTab = $state('akreditasi');

	const akreditasiFakultas = [
		{
			nama: "Fakultas Kedokteran dan Ilmu-Ilmu Kesehatan (FKIK)",
			file: "https://drive.google.com/drive/folders/1usFmAW-oz82jc-67PvfvWUDLaQoDvavH?usp=sharing"
		},
		{
			nama: "Fakultas Ilmu Tarbiyah & Keguruan (FITK)",
			file: "https://drive.google.com/drive/folders/1Fmxuvk8ZSIl2-0LuNwkcvoCwmeEAecRm?usp=sharing"
		},
		{
			nama: "Fakultas Ekonomi & Bisnis (FEB)",
			file: "https://drive.google.com/drive/folders/1d-Ms2Pja71jNqCyBKpInC1guHxq6KBqt?usp=sharing"
		},
		{
			nama: "Fakultas Sains, Rekayasa dan Teknologi (FSET)",
			file: "https://drive.google.com/drive/folders/1PwzlNzHjYhVGy_GFfL8A_50KLyIdbjTP?usp=sharing"
		}
	];

	const dokumenAkademik = [
		{
			nama: "Surat keterangan aktif kuliah",
			file: "https://almaata.ac.id/wp-content/uploads/2024/08/surat-keterangan-aktif-kuliah.pdf"
		},
		{
			nama: "Surat Izin Cuti",
			file: "https://almaata.ac.id/wp-content/uploads/2024/08/surat-izin-cuti.pdf"
		},
		{
			nama: "Surat Pengunduran Diri",
			file: "https://almaata.ac.id/wp-content/uploads/2024/08/surat-pengunduran-diri.pdf"
		},
		{
			nama: "Surat Permohonan Aktif Kembali",
			file: "https://almaata.ac.id/wp-content/uploads/2024/08/surat-permohonan-aktif-kembali.pdf"
		},
		{
			nama: "Surat Keterlambatan KRS",
			file: "https://almaata.ac.id/wp-content/uploads/2024/08/surat-keterlambatan-krs.pdf"
		}
	];

	const dokumenLainnya = [
		{
			nama: "Buku Panduan PPKPT UAA",
			file: "https://drive.google.com/file/d/1w0b3gCdMsrF5-o7aCVwlla32m17kyCcT/view?usp=sharing"
		},
		{
			nama: "Panduan Pengembangan Karir Dosen UAA",
			file: "https://drive.google.com/file/d/1psqwi2K2A2-SAt35sVeONyf3YQ2uM8gR/view?usp=sharing"
		},
		{
			nama: "Peraturan Kepegawaian",
			file: "https://drive.google.com/file/d/1zBg3i6sdD-KhsFWdt8i4czkNHgJc7hk5/view?usp=sharing"
		}
	];

	function setActiveTab(tab: string) {
		activeTab = tab;
	}

	function getStatusColor(status: string) {
		return 'bg-primary/10 text-primary border-primary/20';
	}
</script>

<section class="container mx-auto px-4 sm:px-6 lg:px-16 py-16">
	<!-- Header Section -->
	<div class="text-center mb-16">
		<h3 class="text-accent font-philosopher text-lg font-medium sm:text-xl md:text-2xl mb-4">
			Download Center
		</h3>
		<h1 class="text-primary font-philosopher text-3xl font-semibold sm:text-4xl md:text-5xl">
			Download File Universitas
		</h1>
		<p class="font-instrument text-[#567784] text-base sm:text-lg mt-6 max-w-3xl mx-auto">
			Akses berbagai dokumen penting Universitas Alma Ata termasuk sertifikat akreditasi dan dokumen keperluan akademik
		</p>
	</div>

	<!-- Tab Navigation -->
	<div class="flex flex-col sm:flex-row justify-center mb-12">
		<div class="bg-gray-100 rounded-xl p-1 inline-flex">
			<button 
				onclick={() => setActiveTab('akreditasi')}
				class="px-6 py-3 rounded-lg font-instrument font-medium transition-all duration-300 {activeTab === 'akreditasi' ? 'bg-primary text-white shadow-md' : 'text-gray-600 hover:text-primary'}"
			>
				Sertifikat Akreditasi
			</button>
			<button 
				onclick={() => setActiveTab('akademik')}
				class="px-6 py-3 rounded-lg font-instrument font-medium transition-all duration-300 {activeTab === 'akademik' ? 'bg-primary text-white shadow-md' : 'text-gray-600 hover:text-primary'}"
			>
				Dokumen Akademik
			</button>
			<button 
				onclick={() => setActiveTab('lainnya')}
				class="px-6 py-3 rounded-lg font-instrument font-medium transition-all duration-300 {activeTab === 'lainnya' ? 'bg-primary text-white shadow-md' : 'text-gray-600 hover:text-primary'}"
			>
				Dokumen Lainnya
			</button>
		</div>
	</div>

	<!-- Sertifikat Akreditasi Tab -->
	{#if activeTab === 'akreditasi'}
		<div class="mb-8">
			<div class="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-6 mb-8">
				<h2 class="text-primary font-philosopher text-xl sm:text-2xl font-semibold text-center mb-2">
					Sertifikat Akreditasi Fakultas
				</h2>
				<p class="font-instrument text-[#567784] text-center">
					Sertifikat akreditasi resmi dari Badan Akreditasi Nasional Perguruan Tinggi (BAN-PT) untuk semua program studi berdasarkan fakultas
				</p>
			</div>

			<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
				{#each akreditasiFakultas as fakultas}
					<div class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
						<div class="p-6">
							<h3 class="text-primary font-philosopher text-lg font-semibold mb-4">
								{fakultas.nama}
							</h3>
							<a 
								href={fakultas.file}
								target="_blank"
								class="bg-primary hover:bg-primary/80 font-instrument rounded-xl px-4 py-3 text-white font-medium transition-all duration-300 inline-flex items-center w-full justify-center"
							>
								Lihat Sertifikat Akreditasi
							</a>
						</div>
					</div>
				{/each}
			</div>
		</div>
	{/if}

	<!-- Dokumen Akademik Tab -->
	{#if activeTab === 'akademik'}
		<div class="mb-8">
			<div class="bg-gradient-to-r from-accent/5 to-primary/5 rounded-2xl p-6 mb-8">
				<h2 class="text-primary font-philosopher text-xl sm:text-2xl font-semibold text-center mb-2">
					Dokumen Keperluan Akademik
				</h2>
				<p class="font-instrument text-[#567784] text-center">
					Berbagai surat dan dokumen yang diperlukan mahasiswa untuk keperluan akademik dan administrasi
				</p>
			</div>

			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{#each dokumenAkademik as dokumen}
					<div class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
						<div class="p-6">
							<h3 class="text-primary font-philosopher text-lg font-semibold mb-4">
								{dokumen.nama}
							</h3>
							<a 
								href={dokumen.file}
								target="_blank"
								class="bg-accent hover:bg-accent/80 font-instrument rounded-xl px-4 py-3 text-white font-medium transition-all duration-300 inline-flex items-center w-full justify-center"
							>
								Download Surat
							</a>
						</div>
					</div>
				{/each}
			</div>
		</div>
	{/if}

	<!-- Dokumen Lainnya Tab -->
	{#if activeTab === 'lainnya'}
		<div class="mb-8">
			<div class="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-6 mb-8">
				<h2 class="text-primary font-philosopher text-xl sm:text-2xl font-semibold text-center mb-2">
					Dokumen Lainnya
				</h2>
				<p class="font-instrument text-[#567784] text-center">
					Berbagai panduan dan peraturan penting untuk civitas akademika Universitas Alma Ata
				</p>
			</div>

			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{#each dokumenLainnya as dokumen}
					<div class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
						<div class="p-6">
							<h3 class="text-primary font-philosopher text-lg font-semibold mb-4">
								{dokumen.nama}
							</h3>
							<a 
								href={dokumen.file}
								target="_blank"
								class="bg-primary hover:bg-primary/80 font-instrument rounded-xl px-4 py-3 text-white font-medium transition-all duration-300 inline-flex items-center w-full justify-center"
							>
								Download Dokumen
							</a>
						</div>
					</div>
				{/each}
			</div>
		</div>
	{/if}

</section>