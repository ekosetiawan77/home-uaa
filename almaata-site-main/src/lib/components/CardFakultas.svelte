<script lang="ts">
    type Fakultas = {
        fakultas: string;
        link_fakultas?: string;
        image: string;
        data: {
            jenjang: string;
            jurusan: string;
            akreditasi: string;
            link?: string;
        }[];
    }
    let {
        fakultas,
        image,
        data,
        link_fakultas,
    }: Fakultas = $props();

    const listClass = 'text-primary font-instrument text-sm md:text-lg font-semibold';
</script>

<section class="flex flex-col lg:flex-row lg:gap-8 gap-3 bg-white lg:p-0 p-3 rounded-xl lg:rounded-none lg:justify-between lg:h-auto h-full">
    <section class="flex flex-col lg:gap-4 gap-2 lg:order-1 order-2">
        <a href={link_fakultas}>
            <h3 class="text-black font-philosopher text-2xl sm:text-3xl md:text-5xl font-bold max-w-3xl lg:mb-3 text-start" >
                {fakultas}
            </h3>
        </a>
        {#each data as item}
            <a href={item.link}>
                <section class="flex lg:gap-2 gap-1 items-center">
                    <div class="bg-primary rounded-full w-3 h-3"></div>
                    <p class={listClass}>
                        {item.jenjang}
                    </p>
                    <p class={listClass}>
                        {item.jurusan}
                    </p>
                    <p class={listClass}>
                        ({item.akreditasi})
                    </p>
                </section>
            </a>
        {/each}
    </section>
    <section class="lg:order-2 order-1">
        <img src={image} alt={fakultas} class="w-full lg:h-[430px] object-cover rounded-xl" />
    </section>
</section>
