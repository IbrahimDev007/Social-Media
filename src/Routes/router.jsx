import { createBrowserRouter } from "react-router-dom";
import Media from "../Pages/Media/Media";
import About from "../Pages/About/About";
import Home from "../Pages/Home/home";
import Layout from "../Layout/Layout";
import Login from "../Pages/Login/login";
import Register from "../Pages/Register/Register";
import Details from "../Components/Details";
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
				path: "status/:id",
				element: <Details />,
			},
			{
				path: "media",
				element: <Media />,
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "login",
				element: <Login />,
			},
			{
				path: "register",
				element: <Register />,
			},
		],
	},
]);

export default router;
