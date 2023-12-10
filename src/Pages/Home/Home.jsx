import Card from "../../Components/Card";
import TextArea from "../../Components/TextArea";
import Title from "../../Components/Title";
import useAuthHook from "../../Hooks/useAuthHook";

const Home = () => {
	const { user } = useAuthHook();
	console.log("home user", user);
	return (
		<div className="   my-2    ">
			<Title title={"Add Post"} icon={""} />
			<div className="flex flex-col items-center">
				<TextArea className="card w-fit py-1 px-2 border-2" />
			</div>
			<Title title={"Popular"} icon={""} />
			<div className="grid grid-cols-1 md:lg:grid-cols-2 xl:grid-cols-3 gap-4  justify-items-center">
				<Card />
				<Card />
				<Card />
			</div>

			<Title title={"Most Like"} icon={""} />
		</div>
	);
};

export default Home;
