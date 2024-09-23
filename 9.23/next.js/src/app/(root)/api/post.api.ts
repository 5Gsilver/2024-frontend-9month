import { post } from "@/app/schema/posts.schema";

export async function getPosts() {
	try{
		const response = await fetch('https://jsonplaceholder.typicode.com/posts')
		const posts = await response.json();

		return posts as post[];
	} catch (e){
		console.error(e);
	}
}

export async function getPost(postid: number) {
	try{
		const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postid}`);
		const post = await response.json();

		return post as post;
	} catch (e){
		console.error(e);
	}
}