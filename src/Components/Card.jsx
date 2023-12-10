import { useForm } from "react-hook-form";

const Card = () => {
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
			<div className="card card-compact w-96 bg-base-100 shadow-xl">
				<figure>
					<img
						src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
						alt="Shoes"
					/>
				</figure>
				<div className="card-body">
					<h2 className="card-title">title</h2>
					<p>Desc</p>
					<div className="card-actions justify-between ">
						<button
							className="btn btn-error btn-outline btn-sm
                            "
						>
							Like{" "}
						</button>
						<button
							className="btn btn-info btn-outline btn-sm
                            "
						>
							Details{" "}
						</button>
						<div className="collapse bg-base-200">
							<input type="checkbox" className="peer" />
							<div className="collapse-title bg-info text-primary-content peer-checked:bg-info peer-checked:text-secondary-content">
								Click to Comment
							</div>
							<div className="collapse-content bg-info text-primary-content peer-checked:bg-info peer-checked:text-secondary-content">
								<form className="card-body" onSubmit={handleSubmit(onSubmit)}>
									<div className="form-control mt-6 mx-auto">
										<label className="label">
											<span className="label-text">Comment</span>
										</label>
										<input
											type="text"
											placeholder="Comment"
											className="input input-bordered"
											{...register("comment")}
										/>
									</div>
									<button className="btn btn-success btn-outline ">
										Comment
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
