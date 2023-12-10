import Card from "../../Components/Card";
import Title from "../../Components/Title";
import usePostHook from "../../Hooks/usePostHook";

const Media = () => {
	const [status, loading, refetch] = usePostHook();

	if (loading) {
		return <div>Loading</div>;
	}

	return (
		<div>
			<Title title={"Media Post"} icon={""} />
			<div className="grid grid-cols-1 md:lg:xl:grid-cols-2 justify-items-center">
				{status &&
					status.map((status, index) => {
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
		</div>
	);
};

export default Media;
