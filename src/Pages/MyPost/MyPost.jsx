import { MdOutlineRecommend } from "react-icons/md";
import usePostHook from "../../Hooks/usePostHook";
import useUserHook from "../../Hooks/useUserHook";
import Title from "../../Components/Title";
import Card from "../../Components/Card";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

const MyPost = () => {
	const [status, , refetch] = usePostHook();
	const [userData, , loading] = useUserHook();
	// ..
	AOS.init();
	if (!userData) {
		// Handle the case where user data is not available
		return <div>User data not available</div>;
	}

	const post = Array.isArray(status)
		? status.filter((status) => status.user_id === userData._id)
		: [];

	console.log("post-->", post, post.length);

	return (
		<div className="flex flex-col gap-2 justify-center items-center">
			<Title title={"My Post"} icon={<MdOutlineRecommend />} />
			{loading ||
				(post.length === 0 && (
					<span className="loading loading-infinity loading-lg text-center"></span>
				))}
			{Array.isArray(post) &&
				post.map((status, index) => (
					<Card
						key={index}
						title={status?.title}
						desc={status?.status}
						image={status?.image}
						id={status?._id}
						like={status?.like}
						comment={status?.Comment}
						refetch={refetch}
						aosData={"zoom-out-right"}
						hoverEffect={false}
					/>
				))}
		</div>
	);
};

export default MyPost;
