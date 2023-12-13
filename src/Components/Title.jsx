const Title = ({ title, icon }) => {
	return (
		<div
			role="alert"
			className="alert alert-info flex justify-center items-center m-2 text-base-300"
		>
			<span className="flex text-2xl text-amber-300 hover:text-green-600 gap-2 items-center">
				{icon}
				{title}
			</span>
		</div>
	);
};

export default Title;
