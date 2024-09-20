import { createSlice } from "@reduxjs/toolkit";
import posts from '../../data/posts.json';

const initialState = {
	posts,
	filters: {},
};

const postsSlice = createSlice({
	initialState,
	name: 'posts',
	reducers : {
		createPost(state, action){
			const newPost = {...action.payload, id: Date.now()};
			state.posts = [newPost, ...state.posts];
		},
	},
});

export const postsReducer = postsSlice.reducer

export const {createPost} = postsSlice.actions