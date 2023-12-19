const FetureCard = ({ title, img, sub }) => {
	const truncatedSub = sub.length > 100 ? sub.substring(0, 100) + "..." : sub;
	return (
		<div
			className="flex flex-col h-fit w-fit relative m-0  shadow-black border-1  shadow-inner
          border-black"
		>
			<img src={img} alt="" className="object-cover  w-72 h-72 border-0  p-0" />
			<div className="w-72 absolute  block   hover:hidden text-black bottom-0 p-3 shadow-md shadow-slate-800  ">
				<h1 className="font-bold text-xl ">{title}</h1>
				<p className="font-normal text-sm ">{truncatedSub}</p>
			</div>
		</div>
	);
};

export default FetureCard;
