import React from 'react'
import Page from '../../_components/page';
import { post } from '@/app/schema/posts.schema';


async function PostDetailPage(props: { params: { postid: string } }) {
	const { postid } = props.params

	const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postid}`);
	const post = (await response.json()) as post;

	const prevPost = (+post.id > 1 && +post.id <= 100) ? await (await fetch(
		`https://jsonplaceholder.typicode.com/posts/${Number(post.id) - 1}`
	)).json() as post : null;

	const nextPost = await (await fetch(
		`https://jsonplaceholder.typicode.com/posts/${Number(post.id) + 1}`
	)).json() as post;

	return (
		<Page title={post.title}>
			<div>
				<span>Author Id: </span>
				<span>{post.userId}</span>
			</div>
			<p>{post.body}</p>

			<section className='mt-10 border-black py-5'>
			{prevPost && (
						<li>
							<strong>이전 포스트 보러가기</strong>
							<h6>{prevPost.title}</h6>
						</li>
					)}
					{nextPost && (
						<li>
							<strong>다음 포스트 보러가기</strong>
							<h6>{nextPost.title}</h6>
						</li>
					)}
			</section>
		</Page>
	)
}

export default PostDetailPage