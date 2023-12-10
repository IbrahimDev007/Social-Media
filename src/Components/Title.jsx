const Title = ({ title }) => {
	return (
		<div
			role="alert"
			className="alert alert-info flex justify-center items-center m-2 text-base-300"
		>
			<span>{title}</span>
		</div>
	);
};

export default Title;
