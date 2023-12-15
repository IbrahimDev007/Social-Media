import Card from "../../Components/Card";
import TextArea from "../../Components/TextArea";
import Title from "../../Components/Title";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { MdOutlineRecommend } from "react-icons/md";
import { LuPartyPopper } from "react-icons/lu";
import { FaCommentAlt } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { useEffect, useState } from "react";

const Home = () => {
	const {
		data: Status = [],
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ["status"],
		// enabled: !loading,
		queryFn: async () => {
			const res = await axios.get("http://localhost:3000/popular");
			return res.data;
		},
	});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (!Status || Status.length === 0) {
			setLoading(true);
		} else {
			setLoading(false);
		}
	}, [Status, setLoading]);

	const { mostInteractions, mostLikes, mostComments } = Status;

	return (
		<div className="   my-2    ">
			<Title title={"Add Post"} icon={<MdOutlineRecommend />} />
			<div className="flex flex-col items-center">
				<TextArea className="card w-fit py-1 px-2 border-2" />
			</div>

			{loading ||
				(isLoading && (
					<span className="loading loading-infinity loading-lg text-center"></span>
				))}
			<Title title={"Popular"} icon={<LuPartyPopper />} />
			<div className="grid grid-cols-1 md:lg:grid-cols-2 xl:grid-cols-3 gap-4  justify-items-center">
				{mostInteractions &&
					mostInteractions.slice(0, 3).map((status, index) => {
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

			<Title title={"Most Like"} icon={<AiFillLike />} />
			<div className="grid grid-cols-1 md:lg:grid-cols-2 xl:grid-cols-3 gap-4  justify-items-center">
				{mostLikes &&
					mostLikes.slice(0, 3).map((status, index) => {
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
			<Title title={"Most Comment"} icon={<FaCommentAlt />} />
			<div className="grid grid-cols-1 md:lg:grid-cols-2 xl:grid-cols-3 gap-4  justify-items-center">
				{mostComments &&
					mostComments.slice(0, 3).map((status, index) => {
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
		</div>
	);
};

export default Home;
