import { clientImg } from "../../Utilities/Utilites";

const OurClient = () => {
	return (
		<div
			className=" relative  card"
			style={{
				background: "linear-gradient(rgba(0, 123, 255, 0.5), #ffffff)",
			}}
		>
			<div className=" relative top-10 left-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-0 bg-slate-50 z-0 justify-items-end  rounded-tl-3xl rounded-br-3xl  w-11/12 items-end">
				<div className=" flex flex-col px-6   ">
					<h1 className="text-5xl font-semibold text-amber-400 py-10">
						Our Clients
					</h1>
					<p className="text-lg font-light text-slate-700 pb-4">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
						maxime ipsam. Ex, animi. Ipsa harum ea eaque voluptate sed
						exercitationem animi facere explicabo, ipsum corrupti eius repellat
						iste consequuntur nihil odio ab debitis expedita officiis mollitia
						recusandae quia provident? Dolorum!
					</p>
				</div>
				<img
					src="https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241262.jpg?size=626&ext=jpg"
					alt="clientimg"
					className="w-fit h-fit object-cover mr-0 mp-0  rounded-br-3xl text-left"
				/>
			</div>
			<div className="flex flex-wrap relative py-10 z-10 justify-center my-5 ">
				{clientImg.map((img, index) => (
					<img
						src={img}
						alt="img"
						className="w-36 h-36 object-cover filter grayscale hover:filter-none"
						key={index}
					/>
				))}
			</div>
		</div>
	);
};

export default OurClient;
