import { useForm } from "react-hook-form";

const About = () => {
	const {
		register,
		handleSubmit,
		// reset,
	} = useForm();
	const onSubmit = (data) => {
		console.log(data);
	};
	return (
		<div>
			<div
				className="hero min-h-screen"
				style={{
					backgroundImage:
						"url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
				}}
			>
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="hero-content text-center text-neutral-content">
					<div className="w-[50rem] flex justify-center">
						<div className="card  h-[44rem] m-10 glass">
							<figure>
								<img
									src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
									alt="car!"
								/>
							</figure>
							<div className="card-body">
								<h2 className="card-title">Name</h2>
								<p className="font-semibold text-base">
									<span className="font-bold text-lg">Email:</span>
								</p>
								<p className="font-semibold text-base">
									<span className="font-bold text-lg">University:</span>
								</p>
								<p className="font-semibold text-base">
									<span className="font-bold text-lg">Adress:</span>
								</p>
								<div className="card-actions justify-end">
									{/* Open the modal using document.getElementById('ID').showModal() method */}
									<button
										className="btn"
										onClick={() =>
											document.getElementById("my_modal_1").showModal()
										}
									>
										Edit now
									</button>
									<dialog
										id="my_modal_1"
										className="modal text-black
									"
									>
										<div className="modal-box">
											<h3 className="font-bold text-lg">Hello!</h3>

											<form
												className="card-body"
												onSubmit={handleSubmit(onSubmit)}
											>
												<div className="form-control">
													<label className="label">
														<span className="label-text">Name</span>
													</label>
													<input
														type="text"
														placeholder="Name"
														className="input input-bordered"
														{...register("name", { required: true })}
													/>
												</div>
												<div className="form-control">
													<label className="label">
														<span className="label-text">Email</span>
													</label>
													<input
														type="text"
														placeholder="Email"
														className="input input-bordered"
														{...register("email", { required: true })}
													/>
												</div>
												<div className="form-control">
													<label className="label">
														<span className="label-text">University</span>
													</label>
													<input
														type="text"
														placeholder="University"
														className="input input-bordered"
														{...register("name", { required: true })}
													/>
												</div>
												<div className="form-control">
													<label className="label">
														<span className="label-text">Name</span>
													</label>
													<input
														type="text"
														placeholder="name"
														className="input input-bordered"
														{...register("name", { required: true })}
													/>
												</div>
												<button
													type="submit"
													className="btn btn-info btn-outline"
												>
													Submit
												</button>
											</form>

											<div className="modal-action">
												<form method="dialog">
													<button className="btn">Close</button>
												</form>
											</div>
										</div>
									</dialog>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
