<script lang="ts">
    import kampus from '$lib/assets/kampus.png'
</script>

<section class="bg-primary w-full flex rounded-xl items-center relative">
    <section class="lg:p-20 px-5 py-10 flex flex-col gap-4">
        <p class="font-philosopher text-white lg:text-5xl text-lg font-bold lg:max-w-none max-w-52">
            Kuliah di Universitas Alma Ata Yogyakarta aja!
        </p>
        <a href="https://pmb.almaata.ac.id/" target="_blank" class="bg-white hover:bg-gray-200 text-primary px-4 py-2 rounded-xl w-fit lg:text-base text-sm">
            Daftar sekarang
        </a>
    </section>
    <!-- Transaprent only in left -->
    <img 
        src={kampus} 
        alt="kampus" 
        class="w-1/2 lg:h-[505px] h-full lg:static absolute top-0 right-0 object-cover [mask-image:linear-gradient(to_right,transparent,black)] rounded-xl" 
    />
</section>