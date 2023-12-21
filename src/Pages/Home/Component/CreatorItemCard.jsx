const CreatorItemCard = ({ img, length }) => {
	return (
		<div
			className="h-72 w-44 bg-sky-600 border-y-2 rounded-tr-2xl rounded-bl-2xl px-2  flex justify-center items-center
         "
		>
			<img
				src={img}
				alt="popular infulencer "
				className="w-44 h-44 m-0 p-0 object-cover rounded-full"
			/>
		</div>
	);
};

export default CreatorItemCard;
