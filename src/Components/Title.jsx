import { motion } from "framer-motion";
const Title = ({ title, icon }) => {
	return (
		<div
			role="alert"
			className="alert alert-info flex justify-center items-center m-2 text-base-300"
		>
			<motion.div
				// animate={{ x: 100 }}
				// transition={{ type: "spring", stiffness: 100 }}
				// transition={{
				// 	x: { duration: 2, ease: "circIn" },
				// }}
				// initial={{ x: -1000 }}
				// animate={{ x: 0 }}
				// exit={{ x: -1000 }}
				whileHover={{ backgroundColor: "lightblue", x: -10 }}
				transition={{ type: "tween", duration: 0.3 }}
				style={{
					width: 200,
					height: 50,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					cursor: "pointer",
				}}
			>
				<span className="flex text-2xl text-amber-300 hover:text-green-600 gap-2 items-center">
					{icon}
					{title}
				</span>
			</motion.div>
		</div>
	);
};

export default Title;
