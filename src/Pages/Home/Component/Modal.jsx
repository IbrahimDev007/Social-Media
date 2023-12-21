import { AnimatePresence, motion } from "framer-motion";
import EditTextArea from "./EditTextArea";
const Modal = ({ modal, setModal, id }) => {
	return (
		<AnimatePresence>
			{modal && (
				<div className="px-5 fixed h-full w-full flex items-center justify-center top-0 left-0 z-20">
					<motion.div
						initial={{ y: 50, opacity: 0 }}
						animate={{
							y: 0,
							opacity: 1,
						}}
						exit={{
							y: -50,
							opacity: 0,
						}}
						transition={{ type: "spring", bounce: 0, duration: 0.4 }}
						className="absolute z-10 p-5 bg-indigo-600 h-auto w-full max-w-md rounded text-white"
					>
						<button
							onClick={() => setModal((modal) => !modal)}
							className="absolute top-0 right-0 -mt-4 -mr-4 btn-error z-[12]  btn-md btn-circle"
						>
							X
						</button>
						<p>
							<EditTextArea id={id} />
						</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 50 }}
						animate={{
							opacity: 1,
						}}
						exit={{
							opacity: 0,
						}}
						transition={{ type: "spring", bounce: 0, duration: 0.2 }}
						onClick={() => setModal((modal) => !modal)}
						className=" bg-slate-700 bg-opacity-20  px-5 fixed h-full w-full flex items-center justify-center top-0 left-0"
					/>
				</div>
			)}
		</AnimatePresence>
	);
};

export default Modal;
