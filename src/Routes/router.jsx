import { createBrowserRouter } from "react-router-dom";
import Media from "../Pages/Media/Media";
import About from "../Pages/About/About";
import Home from "../Pages/Home/home";
import Layout from "../Layout/Layout";
//router added
const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		loader: () => {
			console.log("this is good");
			return 1;
		},
		errorElement: <h1>This error</h1>,

		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "post/:id",
				element: <h2>This is post</h2>,
			},
			{
				path: "media",
				element: <Media />,
			},
			{
				path: "about",
				element: <About />,
			},
		],
	},
]);

export default router;
