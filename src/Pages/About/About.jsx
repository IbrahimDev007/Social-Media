import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuthHook from "../../Hooks/useAuthHook";

const About = () => {
	const { register, handleSubmit, reset } = useForm();
	const { user } = useAuthHook();
	const [userData, setuserData] = useState([]);
	useEffect(() => {
		axios
			.get(`http://localhost:3000/users/about/${user?.email}`)
			.then((data) => setuserData(data.data));
	}, [user?.email]);
	console.log(userData, "about");

	const onSubmit = (data) => {
		const newdata = {
			name: data.name,
			email: data.email,
			// image: data?.photoURL,
			university: data.university,
			adress: data.adress,
		};
		axios
			.patch(`http://localhost:3000/users/${userData._id}`, newdata)
			.then((data) => {
				console.log(data);
				// if (data.data.insertedId) {
				// 	reset();
				Swal.fire({
					position: "top-end",
					icon: "success",
					title: "User created successfully.",
					showConfirmButton: false,
					timer: 1500,
				});
				reset();
				setuserData(userData._id, ...newdata);
			});
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
						<div className="card  h-fit m-10 glass">
							{/* <figure>
								<img src={userData?.image} alt="car!" />
							</figure> */}
							<div className="card-body">
								<h2 className="card-title">{userData?.name}</h2>
								<p className="font-semibold text-base">
									<span className="font-bold text-lg">Email:</span>
									{userData?.email}
								</p>
								<p className="font-semibold text-base">
									<span className="font-bold text-lg">University:</span>
									{userData?.university}
								</p>
								<p className="font-semibold text-base">
									<span className="font-bold text-lg">Adress:</span>
									{userData?.adress}
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
														// value={userData?.name}
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
														{...register("university", { required: true })}
													/>
												</div>
												<div className="form-control">
													<label className="label">
														<span className="label-text">Adress</span>
													</label>
													<input
														type="text"
														placeholder="adress"
														className="input input-bordered"
														{...register("adress", { required: true })}
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
