import { MdOutlineRecommend } from "react-icons/md";
import usePostHook from "../../Hooks/usePostHook";
import useUserHook from "../../Hooks/useUserHook";
import Title from "../../Components/Title";
import Card from "../../Components/Card";

const MyPost = () => {
	const [status, loading, refetch] = usePostHook();
	const [userData] = useUserHook();
	const post = status.filter((status) => status.user_id === userData._id);

	return (
		<div className=" flex flex-col gap-2  justify-center items-center ">
			<Title title={"My Post"} icon={<MdOutlineRecommend />} />
			{loading && (
				<span className="loading loading-infinity loading-lg text-center"></span>
			)}
			{Array.isArray(post) &&
				post.map((status, index) => {
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
	);
};

export default MyPost;
