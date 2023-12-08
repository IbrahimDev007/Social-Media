import { createBrowserRouter } from "react-router-dom";
import App from "../App";
//router added
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		loader: () => {
			console.log("this is good");
			return 1;
		},
		errorElement: <h1>This error</h1>,

		children: [
			{
				path: "/post",
				element: <h2>This is post</h2>,
			},
		],
	},
]);

export default router;
