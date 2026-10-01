<script lang="ts">
	const fasilitas = [
		{
			kategori: "Fasilitas Akademik",
			items: [
				{
					nama: "Perpustakaan",
					deskripsi: "Perpustakaan modern dengan koleksi buku dan jurnal lengkap serta akses digital",
					gambar: "/Gedung.webp"
				},
				{
					nama: "Laboratorium Komputer",
					deskripsi: "Lab komputer dengan perangkat terkini untuk mendukung pembelajaran teknologi",
					gambar: "/Gedung.webp"
				},
				{
					nama: "Laboratorium Kesehatan",
					deskripsi: "Fasilitas laboratorium lengkap untuk praktikum mahasiswa kesehatan",
					gambar: "/Gedung.webp"
				},
				{
					nama: "Ruang Kuliah",
					deskripsi: "Ruang kuliah ber-AC dengan fasilitas multimedia dan kapasitas yang memadai",
					gambar: "/Gedung.webp"
				}
			]
		},
		{
			kategori: "Fasilitas Penunjang",
			items: [
				{
					nama: "Masjid Kampus",
					deskripsi: "Masjid yang nyaman untuk kegiatan ibadah dan kajian keislaman",
					gambar: "/Gedung.webp"
				},
				{
					nama: "Kantin & Cafeteria",
					deskripsi: "Area makan dengan berbagai pilihan makanan sehat dan halal",
					gambar: "/Gedung.webp"
				},
				{
					nama: "Parkir",
					deskripsi: "Area parkir yang luas dan aman untuk kendaraan mahasiswa dan dosen",
					gambar: "/Gedung.webp"
				},
				{
					nama: "Taman & Area Hijau",
					deskripsi: "Ruang terbuka hijau untuk refreshing dan kegiatan outdoor",
					gambar: "/Gedung.webp"
				}
			]
		},
		{
			kategori: "Fasilitas Olahraga",
			items: [
				{
					nama: "Lapangan Futsal",
					deskripsi: "Lapangan futsal standar untuk kegiatan olahraga mahasiswa",
					gambar: "/Gedung.webp"
				},
				{
					nama: "Lapangan Basket",
					deskripsi: "Lapangan basket outdoor untuk aktivitas olahraga dan turnamen",
					gambar: "/Gedung.webp"
				},
				{
					nama: "Gym & Fitness",
					deskripsi: "Fasilitas gym dengan peralatan fitness modern",
					gambar: "/Gedung.webp"
				}
			]
		}
	];

	const statistik = [
		{ label: "Ruang Kuliah", jumlah: "45+", icon: "🏫" },
		{ label: "Laboratorium", jumlah: "15+", icon: "🔬" },
		{ label: "Perpustakaan", jumlah: "1", icon: "📚" },
		{ label: "Area Parkir", jumlah: "3", icon: "🚗" }
	];
</script>

<section class="container mx-auto px-4 sm:px-6 lg:px-16 py-16">
	<!-- Header Section -->
	<div class="text-center mb-16">
		<h3 class="text-accent font-philosopher text-lg font-medium sm:text-xl md:text-2xl mb-4">
			Fasilitas Kampus
		</h3>
		<h1 class="text-primary font-philosopher text-3xl font-semibold sm:text-4xl md:text-5xl">
			Sarana & Prasarana
		</h1>
		<p class="font-instrument text-[#567784] text-base sm:text-lg mt-6 max-w-3xl mx-auto">
			Universitas Alma Ata menyediakan berbagai fasilitas modern dan lengkap untuk mendukung kegiatan akademik dan non-akademik mahasiswa
		</p>
	</div>

	<!-- Statistik Fasilitas -->
	<div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
		{#each statistik as stat}
			<div class="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300">
				<div class="text-4xl mb-3">{stat.icon}</div>
				<div class="text-2xl font-philosopher font-bold text-primary mb-2">{stat.jumlah}</div>
				<div class="font-instrument text-[#567784] text-sm">{stat.label}</div>
			</div>
		{/each}
	</div>

	<!-- Fasilitas by Category -->
	{#each fasilitas as kategori}
		<div class="mb-16">
			<div class="text-center mb-8">
				<h2 class="text-primary font-philosopher text-2xl sm:text-3xl font-semibold mb-4">
					{kategori.kategori}
				</h2>
			</div>

			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
				{#each kategori.items as fasilitas}
					<div class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
						<div class="relative">
							<img 
								src={fasilitas.gambar} 
								alt={fasilitas.nama}
								class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
							/>
							<div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						</div>
						<div class="p-6">
							<h3 class="text-primary font-philosopher text-lg font-semibold mb-3">
								{fasilitas.nama}
							</h3>
							<p class="font-instrument text-[#567784] text-sm leading-relaxed">
								{fasilitas.deskripsi}
							</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	{/each}

	<!-- Info Section -->
	<div class="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 text-center">
		<h2 class="text-primary font-philosopher text-2xl sm:text-3xl font-semibold mb-4">
			Fasilitas Terus Berkembang
		</h2>
		<p class="font-instrument text-[#567784] text-base sm:text-lg mb-6 max-w-2xl mx-auto">
			Kami terus berkomitmen untuk mengembangkan dan meningkatkan kualitas fasilitas kampus demi mendukung proses pembelajaran yang optimal
		</p>
		<a 
			href="https://almaata.ac.id/sarana-prasarana/" 
			target="_blank"
			class="bg-primary hover:bg-primary/80 font-instrument rounded-xl px-6 py-3 text-white font-medium transition-all duration-300 inline-block"
		>
			Lihat Informasi Lengkap
		</a>
	</div>
</section>