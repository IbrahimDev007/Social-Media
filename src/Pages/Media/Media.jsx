import Card from "../../Components/Card";
import Title from "../../Components/Title";
import usePostHook from "../../Hooks/usePostHook";

const Media = () => {
	const [status, loading, refetch] = usePostHook();

	return (
		<div>
			<Title title={"Media Post"} icon={""} />
			<div className="grid grid-cols-1 md:lg:xl:grid-cols-2 justify-items-center">
				{(loading === true || status === (null || undefined || "" || [])) && (
					<span className="loading loading-infinity loading-lg text-center"></span>
				)}
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
								comment={status?.Comment}
								refetch={refetch}
							/>
						);
					})}
			</div>
		</div>
	);
};

export default Media;
