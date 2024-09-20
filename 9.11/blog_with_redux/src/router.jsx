import { Children } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
import PostDetailPage from "./pages/PostDetailPage";
import PostCreatePage from "./pages/PostCreatePage";


const routes =[
	{
		path : "/",
		element : <RootLayout/>,
		children:[
			{ path :"" , element : <HomePage/>},
			{ path :"posts/:postId", element : <PostDetailPage/>},
			{ path :"posts/create", element : <PostCreatePage/>},
		]
	}
]

const router = createBrowserRouter(routes)

// eslint-disable-next-line no-unused-vars
export function Router(children) {
	return <RouterProvider router ={router}>{Children}</RouterProvider>
}

