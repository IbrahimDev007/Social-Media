import { useForm } from "react-hook-form";
import Thread from "./Thread";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Details = () => {
	const {
		register,
		handleSubmit,
		// reset,
	} = useForm();
	const onSubmit = (data) => {
		console.log(data);
	};
	const { id } = useParams();
	const [Data, setData] = useState([]);
	const PostData = axios
		.get(`https://social-umber-seven.vercel.app/status/${id}`)
		.then((data) => setData(data.data));

	console.log("postdata--->", PostData);

	return (
		<div>
			{PostData && (
				<div className="card card-compact w-full h-full bg-base-100 shadow-xl">
					<figure>
						<img src={Data.image} alt="Shoes" />
					</figure>
					<div className="card-body">
						<h2 className="card-title">{Data?.title}</h2>
						<p>{Data.desc}</p>
						<div className="card-actions justify-between ">
							<button
								className="btn btn-error btn-outline btn-sm
                            "
							>
								Like{Data.like}
							</button>
							{/* <button
							className="btn btn-info btn-outline btn-sm
                            "
						>
							Details{" "}
						</button> */}
							<div className="collapse bg-base-200">
								<input type="checkbox" className="peer" />
								<div className="collapse-title bg-info text-primary-content peer-checked:bg-info peer-checked:text-secondary-content">
									Click to Comment
								</div>
								<div className="collapse-content bg-info text-primary-content peer-checked:bg-info peer-checked:text-secondary-content">
									<form className="card-body" onSubmit={handleSubmit(onSubmit)}>
										<div className="form-control mt-6 mx-auto">
											<label className="label">
												<span className="label-text text-white">Comment</span>
											</label>
											<input
												type="text"
												placeholder="Comment"
												className="input input-bordered w-full"
												{...register("comment")}
											/>
										</div>
										<div className="flex justify-end">
											<button className="btn btn-ghost btn-outline btn-sm   ">
												Comment
											</button>
										</div>
									</form>
									<Thread />
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Details;
