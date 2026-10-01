<script lang="ts">
	import CardFakultas from '$lib/components/CardFakultas.svelte';
	import arrow from '$lib/assets/arrow.svg';

	// @ts-ignore
	import Splide from '@splidejs/svelte-splide/components/Splide/Splide.svelte';
	// @ts-ignore
	import SplideSlide from '@splidejs/svelte-splide/components/SplideSlide/SplideSlide.svelte';
	import { writable } from 'svelte/store';
	import { fakultas } from './fakultas';

	const data = fakultas;

	let splide = $state(null);

	let currentSlide = writable(0);

	function goToSlide(index: number) {
		// @ts-ignore
		splide?.go(index);
		currentSlide.set(index);
	}

	let slideLength = fakultas.length;

	function prevSlide() {
		currentSlide.update((n) => {
			const newIndex = n === 0 ? slideLength - 1 : n - 1;
			goToSlide(newIndex);
			return newIndex;
		});
	}

	function nextSlide() {
		currentSlide.update((n) => {
			const newIndex = n === slideLength - 1 ? 0 : n + 1;
			goToSlide(newIndex);
			return newIndex;
		});
	}

	$effect(() => {
		// @ts-ignore
		splide?.on('moved', (newIndex: number) => {
			currentSlide.set(newIndex);
		});
	});
</script>

<section class="flex items-center justify-center lg:py-16" id="fakultas">
	<div class="w-full max-w-6xl lg:max-w-full">
		<section class="flex flex-col gap-4">
			<p class="text-primary font-philosopher text-center text-3xl font-bold lg:text-6xl">
				Fakultas & Program Studi
			</p>
			<p
				class="font-instrument mx-auto max-w-4xl text-center text-base font-light text-[#4A6470] md:text-lg"
			>
				Universitas Alma Ata menawarkan berbagai program studi unggulan yang dirancang untuk
				mencetak lulusan yang berkompeten, inovatif, dan siap bersaing di dunia kerja.
			</p>
		</section>

		<section class="mt-12 sm:mt-16">
			<Splide
				bind:splide
				options={{
					perPage: 1,
					perMove: 1,
					arrows: false,
					pagination: false,
					gap: '1rem',
					autoplay: true,
                    loop: true,
					interval: 3000,
					breakpoints: {
						1024: { perPage: 1 }, // Mobile dan tablet
						1280: { perPage: 2 } // Desktop besar
					}
				}}
			>
				{#each data as item}
					<SplideSlide>
						<CardFakultas fakultas={item.fakultas} image={item.image} data={item.data} link={item.link} link_fakultas={item.link_fakultas}/>
					</SplideSlide>
				{/each}
			</Splide>

			<div class="mt-3 flex justify-center gap-2 lg:mt-8">
				<button
					class="border-primary/50 hover:bg-primary/10 cursor-pointer rounded-full border p-3 transition-all sm:p-4"
					onclick={prevSlide}
					aria-label="Previous"
				>
					<img src={arrow} alt="arrow" class="w-4 sm:w-5" />
				</button>
				<button
					class="border-primary/50 hover:bg-primary/10 cursor-pointer rounded-full border p-3 transition-all sm:p-4"
					onclick={nextSlide}
					aria-label="Next"
				>
					<img src={arrow} alt="arrow" class="w-4 rotate-180 sm:w-5" />
				</button>
			</div>
		</section>
	</div>
</section>
