import "./Title.css";
const Title = ({ title, icon }) => {
	return (
		<div className=" alert ">
			<span className="flex text-2xl text-amber-300 hover:text-green-600 gap-2  justify-center items-center">
				{icon}
				{title}
			</span>
		</div>
	);
};

export default Title;
