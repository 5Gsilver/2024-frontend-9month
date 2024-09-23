import Link from 'next/link';
import React from 'react'
import { post } from './schema/posts.schema';


async function HomePage() {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts')
	const posts = (await response.json()) as post[];

	console.log(posts);

	return (
		<main className='container mx-auto px-5 py-8 max-w-screen-md'>
			<h1 className='mb-10'>All Posts</h1>

			<ul className='grid grid-cols-1 gap-y-4'>
				{posts.map((post) => (
					<li key={post.id}>
						<Link href={`/posts/${post.id}`}>{post.title}</Link>
					</li>
				))}
			</ul>
		</main>
	)
}

export default HomePage
