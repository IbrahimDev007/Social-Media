import { SiMediafire } from "react-icons/si";
import Card from "../../Components/Card";
import Title from "../../Components/Title";
import usePostHook from "../../Hooks/usePostHook";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

const Media = () => {
	const [status, loading, refetch] = usePostHook();
	const [Isloading, setLoading] = useState(false);
	AOS.init();
	useEffect(() => {
		if (!status || status.length === 0) {
			setLoading(true);
		} else {
			setLoading(false);
		}
	}, [status, setLoading]);

	return (
		<div>
			<Title title={"Media Post"} icon={<SiMediafire />} />
			<div className="grid grid-cols-1 md:lg:xl:grid-cols-2 justify-items-center">
				{(loading || Isloading) && (
					<span className="loading loading-infinity loading-lg text-center"></span>
				)}
				{Array.isArray(status) &&
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
								photo={status?.photoUrl}
								userId={status?.user_Id}
								aosData={"zoom-out-left"}
								hoverEffect={false}
							/>
						);
					})}
			</div>
		</div>
	);
};

export default Media;
