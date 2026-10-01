<script lang="ts">
    const reasons = [
        'Terakreditasi UNGGUL, menjamin kualitas pendidikan tinggi yang sangat terpercaya.',
        'Peringkat 79 PTN PTS se-Indonesia & 8 PTN PTS se-DIY berdasarkan Webometrics 2026',
        'Salah satu universitas dengan pertumbuhan tercepat menurut KEMENRISTEK DIKTI.',
        'Kurikulum yang fleksibel untuk pengembangan potensi mahasiswa',
        'Jaringan luas dalam & luar negeri, membuka peluang studi lanjut dan karier global.',
        'Peraih penghargaan Uji Kompetensi Terbaik: Peringkat #1 Regional & #3 Nasional.',
        'Kesempatan magang bersertifikat di BUMN, menambah pengalaman profesional.',
        'Masa tunggu kerja singkat, dengan lulusan yang siap bersaing di dunia industri.',
        'Biaya kuliah terjangkau, didukung kualitas tinggi dan berbagai beasiswa.'
    ]

    // State untuk reveal
    let isExpanded = $state(false);

    // Toggle expand/collapse
    function toggleExpand() {
        isExpanded = !isExpanded;
    }
</script>

<section class="w-full flex justify-center items-center lg:pt-32 py-16">
    <section class="flex flex-col gap-4 w-full">
      <p class="text-center justify-start text-sky-800 lg:text-5xl text-3xl font-bold font-philosopher">
        9 Alasan Memilih Universitas Alma Ata
      </p>
      <p class="max-w-4xl mx-auto text-center justify-start text-slate-600 lg:text-lg text-base font-medium font-instrument leading-relaxed">
        Universitas Alma Ata memiliki berbagai keunggulan yang menjadikannya pilihan tepat bagi calon mahasiswa dan menawarkan lingkungan akademik berkualitas dan modern.
      </p>
      
      <div class="relative lg:pt-12 pt-4">
        <!-- Grid section dengan efek revealable -->
        <section 
          class={`grid lg:grid-cols-3 grid-cols-1 lg:gap-4 gap-2 transition-all duration-500 ease-in-out
          ${!isExpanded ? 'max-h-96 overflow-hidden lg:max-h-none' : 'max-h-[2000px] lg:max-h-none'}`}
        >
          {#each reasons as alasan, i}
            <div 
              class="h-32 bg-sky-50 rounded-lg px-[22px] py-[19px] flex flex-col gap-2 transform transition-all duration-500 hover:shadow-md hover:-translate-y-1"
              style="transition-delay: {i * 50}ms"
            >
              <div class="w-6 h-6 bg-sky-800 rounded-lg flex justify-center items-center">
                <p class="text-center justify-start text-slate-100 text-sm font-semibold font-instrument leading-tight">
                  {i + 1}
                </p>
              </div>
              <p class="justify-start text-gray-600 text-base font-semibold font-instrument leading-snug">
                {alasan}
              </p>
            </div>
          {/each}
        </section>
        
        <!-- Gradient overlay yang muncul saat collapsed -->
        {#if !isExpanded}
          <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none block lg:hidden"></div>
        {/if}
        
        <!-- Tombol Show More / Show Less -->
        <div class="flex justify-center mt-4">
          <button 
            onclick={toggleExpand}
            class="px-6 py-2 bg-sky-800 text-white rounded-full hover:bg-sky-700 lg:text-base text-sm transition-all duration-300 flex items-center gap-2 font-instrument z-10 lg:hidden"
          >
            {#if isExpanded}
              Tampilkan Lebih Sedikit
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
              </svg>
            {:else}
              Tampilkan Semua
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            {/if}
          </button>
        </div>
      </div>
    </section>
  </section>
