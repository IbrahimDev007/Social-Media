import { infulencers } from "../../Utilities/Utilites";
import CreatorItemCard from "./Component/CreatorItemCard";

const CreativeCreator = () => {
	return (
		<div className=" card py-10 px-2 bg-sky-300">
			<h3 className="font-extrabold pb-4 text-5xl text-center ">
				Lorem ipsum dolor sit amet <br />
				consectetur adipisicing <br />
				elit. Necessitatibus, ea.
			</h3>
			{/* alignment problem */}
			<p className="font-bold text-3xl text-slate-600 text-center">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa delectus
				porro dolorem vitae. Asperiores, sequi ut doloremque ipsam aperiam
				facere saepe sed explicabo debitis consectetur.
			</p>
			<div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 justify-items-center  gap-1 items-center   pt-10">
				{infulencers.map((item, index) => (
					<CreatorItemCard img={item} length={infulencers.length} key={index} />
				))}
			</div>
		</div>
	);
};

export default CreativeCreator;
