import Card from "../../Components/Card";
import TextArea from "../../Components/TextArea";
import Title from "../../Components/Title";
import usePostHook from "../../Hooks/usePostHook";

const Home = () => {
	const [status, loading, refetch] = usePostHook();
	return (
		<div className="   my-2    ">
			<Title title={"Add Post"} icon={""} />
			<div className="flex flex-col items-center">
				<TextArea className="card w-fit py-1 px-2 border-2" />
			</div>
			<Title title={"Popular"} icon={""} />
			<div className="grid grid-cols-1 md:lg:grid-cols-2 xl:grid-cols-3 gap-4  justify-items-center">
				{status &&
					status.slice(0, 3).map((status, index) => {
						return (
							<Card
								key={index}
								title={status?.title}
								desc={status?.status}
								image={status?.image}
								id={status?._id}
								like={status?.like}
								comment={status?.comment}
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
