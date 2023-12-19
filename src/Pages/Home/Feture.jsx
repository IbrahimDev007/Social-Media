import { Feture_item } from "../../Utilities/Utilites";
import FetureCard from "./Component/FetureCard";

const Feture = () => {
	return (
		<div className="flex flex-wrap gap-0 py-6 justify-center items-center">
			{Feture_item.map((fet, i) => (
				<div key={i}>
					<FetureCard title={fet.title} img={fet.img} sub={fet.sub} />
				</div>
			))}
		</div>
	);
};

export default Feture;
