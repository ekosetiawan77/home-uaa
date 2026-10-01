import { env } from '$env/dynamic/private';

type Post = {
	id: number;
	slug: string;
	title: {
		rendered: string;
	};
	yoast_head_json: {
		og_image: {
			url: string;
		}[];
		og_description: string;
	};
};

export const load = async () => {
	// const posts = await fetch(`${env.WP_URL}/wp-json/wp/v2/posts?per_page=4`);
	// const postsData = await posts.json() as Post[];
	const postsData: Post[] = [];
	return {
		posts: postsData
	};
};

