import { useForm } from "react-hook-form";
import Thread from "./Thread";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { BiLike, BiSolidLike } from "react-icons/bi";
import useUserHook from "../Hooks/useUserHook";
import useAuthHook from "../Hooks/useAuthHook";
import { FaCommentAlt } from "react-icons/fa";
const Card = ({ title, desc, like, comment, refetch, id, image }) => {
	const [userData] = useUserHook();
	const { _id } = userData;
	const { user } = useAuthHook();

	const { register, handleSubmit, reset } = useForm();
	const [Like, setLike] = useState(false);
	const onSubmit = (data) => {
		data.userpic = user.photoURL;
		// console.log(data);
		axios.patch(`http://localhost:3000/comment/${id}`, data).then(() => {
			// console.log(response);
			reset();
			refetch();
		});
	};

	useEffect(() => {
		const LikeValid = like.includes(_id);
		if (LikeValid) {
			setLike(true);
		} else {
			setLike(false);
		}
	}, [_id, like]);

	const onLike = () => {
		setLike(!Like);
		console.log(_id, like, "onLike");
		axios
			.patch(`http://localhost:3000/like/${id}`, {
				like: Like,
				userId: _id,
			})
			.then((res) => console.log(res.data));
	};

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
						{(!user && _id && (
							<button
								className="btn btn-error btn-outline btn-sm
                            "
								onClick={onLike}
								disabled
							>
								{Like ? <BiSolidLike /> : <BiLike />}

								{like}
							</button>
						)) || (
							<button
								className="btn btn-error btn-outline btn-sm
                            "
								onClick={onLike}
							>
								{like.length === 0 ? "" : like.length}
								{Like ? <BiSolidLike /> : <BiLike />}
							</button>
						)}
						<Link
							to={`/status/${id}`}
							className="btn btn-info btn-outline btn-sm
                            "
						>
							Details
						</Link>
						<div className="collapse bg-base-200">
							<input type="checkbox" className="peer" />
							<div className="collapse-title bg-info text-primary-content peer-checked:bg-info peer-checked:text-secondary-content">
								<FaCommentAlt />
								Login to Comment
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
											className="input input-bordered w-full text-success"
											{...register("Comment", { required: true })}
										/>
									</div>
									<div className="flex justify-end">
										{(!user && (
											<button
												className="btn btn-ghost btn-outline btn-sm"
												disabled
											>
												Comment
											</button>
										)) || (
											<button className="btn btn-ghost btn-outline btn-sm">
												Comment
											</button>
										)}
									</div>
								</form>
								{comment.map((talk, index) => (
									<Thread key={index} talk={talk.Comment} />
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
