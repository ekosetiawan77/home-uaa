<script lang="ts">
	type CardProps = {
		image: string;
		name: string;
		description: string;
		link: string;
		variant: 'square' | 'instagram';
	};
	let { image, name, description, link, variant = 'square' }: CardProps = $props();

	// Mapping aspect ratio berdasarkan variant
	const aspectRatioClass = {
		square: 'aspect-[1/1] h-72', // 1:1
		instagram: 'aspect-[4/5] h-full' // 4:5 (Instagram post)
	};
</script>

<a href={link} class="overflow-hidden rounded-xl">
	<section class="overflow-hidden">
		<img
			src={image}
			alt={name}
			class="w-full rounded-t-xl object-cover transition-all duration-300 hover:scale-110 {aspectRatioClass[
				variant
			]}"
		/>
	</section>
	<section class="h-full rounded-b-xl bg-[#F1F9FE] px-3 py-5">
		<p class="font-instrument line-clamp-3 text-base font-medium text-black">{description}</p>
	</section>
</a>
