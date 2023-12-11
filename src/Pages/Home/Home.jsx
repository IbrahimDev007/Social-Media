import Card from "../../Components/Card";
import TextArea from "../../Components/TextArea";
import Title from "../../Components/Title";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import useAuthHook from "../../Hooks/useAuthHook";
const Home = () => {
	const { user } = useAuthHook();
	const {
		data: Status = [],
		isLoading: loading,
		refetch,
	} = useQuery({
		queryKey: ["status"],
		queryFn: async () => {
			const res = await axios("https://social-umber-seven.vercel.app/popular");
			console.log(res.data);
			return res.data;
		},
	});

	return (
		<div className="   my-2    ">
			<Title title={"Add Post"} icon={""} />
			<div className="flex flex-col items-center">
				<TextArea className="card w-fit py-1 px-2 border-2" />
			</div>
			{!user === true ? (
				<Title title={"Popular"} icon={""} disabled />
			) : (
				<Title title={"Popular"} icon={""} />
			)}
			{(loading === true || Status === (null || undefined || "" || [])) && (
				<span className="loading loading-infinity loading-lg text-center"></span>
			)}
			<div className="grid grid-cols-1 md:lg:grid-cols-2 xl:grid-cols-3 gap-4  justify-items-center">
				{Status.slice(0, 3).map((status, index) => {
					return (
						<Card
							key={index}
							title={status?.title}
							desc={status?.status}
							image={status?.image}
							id={status?._id}
							like={status?.like}
							comment={status?.Comment}
							refetch={refetch}
						/>
					);
				})}
			</div>

			{/* <Title title={"Most Like"} icon={""} /> */}
		</div>
	);
};

export default Home;
