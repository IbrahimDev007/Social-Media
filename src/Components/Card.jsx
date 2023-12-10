import { useForm } from "react-hook-form";
import Thread from "./Thread";
import { Link } from "react-router-dom";

const Card = ({ title, desc, like, comment, refetch, id, image }) => {
	const {
		register,
		handleSubmit,
		// reset,
	} = useForm();
	const onSubmit = (data) => {
		console.log(data);
	};
	console.log(id, "id-->");
	return (
		<div>
			<div className="card card-compact w-96 bg-base-100 shadow-xl">
				<figure>
					<img src={image} alt="Shoes" />
				</figure>
				<div className="card-body">
					<h2 className="card-title">{title}</h2>
					<p>{desc}</p>
					<div className="card-actions justify-between ">
						<button
							className="btn btn-error btn-outline btn-sm
                            "
						>
							Like{like}
						</button>

						<Link
							to={`../status/${id}`}
							className="btn btn-info btn-outline btn-sm
                            "
						>
							Details
						</Link>
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
		</div>
	);
};

export default Card;
