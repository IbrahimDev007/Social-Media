import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ContactUs = () => {
	return (
		<div className=" grid grid-cols-1  text-sky-950  lg:grid-cols-2 xl:grid-cols-2 bg-sky-200  ">
			<img
				src="https://img.freepik.com/free-photo/customer-service-handsome-curly-man-office-suit-with-computer-headset-pointing-with-pen_140725-164545.jpg?size=626&ext=jpg"
				alt="contuct us"
				className="object-cover w-fit h-fit  "
			/>
			<div className="bg-transparent pl-4 ">
				<h1 className="text-5xl font-bold text-sky-900  my-10 ">Contuct Us</h1>
				<div
					className=" solid border-t-4 border-l-4  h-2/3 grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-2 rounded-none border-sky-900 
                  "
				>
					<div>
						<form className="w-fit flex flex-col p-2">
							<div className="form-control text-sky-900 mt-3  pb-3">
								<input
									type="text"
									placeholder="Name"
									className="input border-b-2  rounded-none focus:border-2 focus:rounded-ee-2xl
									     rounded-ss-2xl focus:border-black  border-black border-0 text-2xl text-black focus:placeholder-transparent"
									required
								/>
							</div>
							<div className="form-control text-sky-900 mt-3  pb-3">
								<input
									type="email"
									placeholder="Email"
									className="input border-b-2  rounded-none focus:border-2 focus:rounded-ee-2xl
									     rounded-ss-2xl  
									      focus:border-black    border-sky-950 border-0 text-2xl text-sky-border-sky-950 focus:placeholder-transparent"
									required
								/>
							</div>
							<div className="form-control text-sky-900 mt-3  pb-3">
								<textarea
									type="text"
									className="textarea  textarea-md  h-32 input border-b-2  rounded-none focus:border-2 focus:rounded-ee-2xl
									     rounded-ss-2xl  
									      focus:border-sky-950  border-sky-950 border-0 text-2xl text-sky-border-sky-950 focus:placeholder-transparent "
									placeholder="Message"
									required
								></textarea>
							</div>

							<div className="form-control mt-2">
								<button className="btn btn-sm bg-sky-950 text-white rounded-3xl w-fit px-4 hover:text-black ">
									Login
								</button>
							</div>
						</form>
					</div>
					<div className="flex flex-col px-8 justify-between py-4">
						<div>
							<h1 className="font-semibold text-2xl">Contact</h1>
							<p
								className="font-extralight text-xl 
						"
							>
								Ibrahimkhalilullah383
								<br />
								@gmail.com
							</p>
						</div>
						<div>
							<h1 className="font-semibold text-2xl">Based On</h1>
							<p className="font-extralight text-xl">
								Cumilla,Chittagong
								<br />
								Bangladesh
							</p>
						</div>
						<div className="flex flex-row text-2xl gap-3">
							<FaFacebook />
							<FaXTwitter />
							<FaGithub />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
