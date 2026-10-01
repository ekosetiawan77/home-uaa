<script lang="ts">
	const pimpinan = {
		rektor: {
			nama: 'Prof. Dr. H. Hamam Hadi, MS., Sc.D., Sp.GK.',
			jabatan: 'Rektor Universitas Alma Ata',
			foto: '/images/struktur-organisasi/prof-hamam.webp',
			bio: 'Prof. Dr. H. Hamam Hadi adalah seorang akademisi dan praktisi kesehatan yang berpengalaman luas dalam bidang gizi klinik dan kesehatan masyarakat. Beliau memimpin Universitas Alma Ata dengan visi mengembangkan institusi pendidikan tinggi yang unggul dan berakhlak mulia.'
		},
		warek: [
			{
				nama: 'Dr. Ahmad Yunadi, SE., MA.',
				jabatan: 'Wakil Rektor Bidang Administrasi Umum,  Pengelolaan Aset dan Sumber Daya',
				foto: '/images/struktur-organisasi/ahmad-yunadi.webp',
				bio: 'Dr. Ahmad Yunadi memiliki keahlian dalam bidang administrasi dan manajemen sumber daya manusia, bertanggung jawab dalam pengembangan sistem administrasi dan peningkatan kualitas SDM di lingkungan Universitas Alma Ata.'
			},
			{
				nama: 'Dr. Rino Richardo, S.Pd., M.Pd',
				jabatan: 'Wakil Rektor Bidang Riset, Pengembangan dan Pengabdian Masyarakat',
				foto: '/images/struktur-organisasi/rino-ricardo.webp',
				bio: 'Dr. Rino Richardo memiliki keahlian dalam bidang penelitian dan pengembangan pendidikan, bertanggung jawab dalam mengembangkan riset berkualitas dan program pengabdian masyarakat yang berdampak nyata bagi kemajuan ilmu pengetahuan dan kesejahteraan masyarakat.'
			}
		],
		sekretaris: {
			nama: 'Ridho Satria Harahap, S.I.Kom., M.B.A.',
			jabatan: 'Sekretaris Pimpinan',
			foto: '/images/struktur-organisasi/ridho.webp',
			bio: 'Ridho Satria Harahap berperan dalam koordinasi dan administrasi pimpinan universitas, memastikan kelancaran operasional dan komunikasi antar unit di lingkungan Universitas Alma Ata.'
		}
	};
</script>

<section class="container mx-auto px-4 py-16 sm:px-6 lg:px-16">
	<!-- Header Section -->
	<div class="mb-16 text-center">
		<h3 class="text-accent font-philosopher mb-4 text-lg font-medium sm:text-xl md:text-2xl">
			Pimpinan Universitas
		</h3>
		<h1 class="text-primary font-philosopher text-3xl font-semibold sm:text-4xl md:text-5xl">
			Struktur Organisasi
		</h1>
		<p class="font-instrument mx-auto mt-6 max-w-3xl text-base text-[#567784] sm:text-lg">
			Kepemimpinan yang kuat dan berpengalaman dalam memajukan pendidikan tinggi yang berkualitas
			dan berakhlak mulia
		</p>
	</div>

	<!-- Rektor Section - Hero Style -->
	<div class="from-primary/5 to-accent/5 mb-16 rounded-2xl bg-gradient-to-r p-8 sm:p-12">
		<div class="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
			<div class="order-2 lg:order-1">
				<h2 class="text-primary font-philosopher mb-4 text-2xl font-semibold sm:text-3xl">
					{pimpinan.rektor.nama}
				</h2>
				<h3 class="text-accent font-philosopher mb-6 text-lg font-medium sm:text-xl">
					{pimpinan.rektor.jabatan}
				</h3>
				<p class="font-instrument text-justify text-base leading-relaxed text-[#567784] sm:text-lg">
					{pimpinan.rektor.bio}
				</p>
			</div>
			<div class="order-1 flex justify-center lg:order-2">
				<div class="relative">
					<img
						src={pimpinan.rektor.foto}
						alt={pimpinan.rektor.nama}
						class="h-64 w-64 rounded-2xl object-cover shadow-lg sm:h-80 sm:w-80"
					/>
				</div>
			</div>
		</div>
	</div>

	<!-- Wakil Rektor & Sekretaris Section -->
	<div class="space-y-12">
		<!-- Wakil Rektor Section -->
		<div class="space-y-8">
			<h2 class="text-primary font-philosopher mb-8 text-center text-2xl font-semibold sm:text-3xl">
				Wakil Rektor
			</h2>
			<div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
				<!-- Wakil Rektor 1 - Layout Horizontal -->
				<div
					class="from-primary/5 to-primary/10 rounded-2xl bg-gradient-to-br p-6 transition-all duration-300 hover:shadow-xl"
				>
					<div class="flex flex-col items-center gap-6 sm:flex-row">
						<div class="flex-shrink-0">
							<img
								src={pimpinan.warek[0].foto}
								alt={pimpinan.warek[0].nama}
								class="h-32 w-32 rounded-xl object-cover shadow-md sm:h-40 sm:w-40"
							/>
						</div>
						<div class="flex-1 text-center sm:text-left">
							<div class="mb-4">
								<span
									class="bg-primary font-instrument mb-3 inline-block rounded-full px-3 py-1 text-xs font-medium text-white"
								>
									Wakil Rektor I
								</span>
								<h3 class="text-primary font-philosopher mb-2 text-lg font-semibold sm:text-xl">
									{pimpinan.warek[0].nama}
								</h3>
								<h4 class="text-accent font-philosopher mb-3 text-sm leading-tight font-medium">
									{pimpinan.warek[0].jabatan}
								</h4>
							</div>
							<p class="font-instrument text-justify text-sm leading-relaxed text-[#567784]">
								{pimpinan.warek[0].bio}
							</p>
						</div>
					</div>
				</div>

				<!-- Wakil Rektor 2 - Layout Horizontal -->
				<div
					class="from-primary/5 to-primary/10 rounded-2xl bg-gradient-to-br p-6 transition-all duration-300 hover:shadow-xl"
				>
					<div class="flex flex-col items-center gap-6 sm:flex-row">
						<div class="flex-shrink-0">
							<img
								src={pimpinan.warek[1].foto}
								alt={pimpinan.warek[1].nama}
								class="h-32 w-32 rounded-xl object-cover shadow-md sm:h-40 sm:w-40"
							/>
						</div>
						<div class="flex-1 text-center sm:text-left">
							<div class="mb-4">
								<span
									class="bg-primary font-instrument mb-3 inline-block rounded-full px-3 py-1 text-xs font-medium text-white"
								>
									Wakil Rektor II
								</span>
								<h3 class="text-primary font-philosopher mb-2 text-lg font-semibold sm:text-xl">
									{pimpinan.warek[1].nama}
								</h3>
								<h4 class="text-accent font-philosopher mb-3 text-sm leading-tight font-medium">
									{pimpinan.warek[1].jabatan}
								</h4>
							</div>
							<p class="font-instrument text-justify text-sm leading-relaxed text-[#567784]">
								{pimpinan.warek[1].bio}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Sekretaris Section -->
		<div class="space-y-8">
			<h2 class="text-primary font-philosopher mb-8 text-center text-2xl font-semibold sm:text-3xl">
				Sekretaris Pimpinan
			</h2>
			<div class="mx-auto max-w-4xl">
				<div
					class="rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100 p-8 transition-all duration-300 hover:shadow-xl"
				>
					<div class="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
						<div class="flex justify-center md:col-span-1">
							<div class="relative">
								<img
									src={pimpinan.sekretaris.foto}
									alt={pimpinan.sekretaris.nama}
									class="h-48 w-48 rounded-2xl object-cover shadow-lg"
								/>
							</div>
						</div>
						<div class="text-center md:col-span-2 md:text-left">
							<div class="mb-6">
								<h3 class="text-primary font-philosopher mb-3 text-2xl font-semibold sm:text-3xl">
									{pimpinan.sekretaris.nama}
								</h3>
								<h4 class="text-accent font-philosopher mb-4 text-base font-medium">
									{pimpinan.sekretaris.jabatan}
								</h4>
							</div>
							<p class="font-instrument text-justify text-base leading-relaxed text-[#567784]">
								{pimpinan.sekretaris.bio}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
