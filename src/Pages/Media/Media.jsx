import Card from "../../Components/Card";
import Title from "../../Components/Title";

const Media = () => {
	return (
		<div>
			<Title title={"Media Post"} icon={""} />
			<div className="grid grid-cols-1 md:lg:xl:grid-cols-2 justify-items-center">
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
};

export default Media;
