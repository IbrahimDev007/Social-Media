import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { ImImage } from "react-icons/im";
import { MdOutlinePostAdd } from "react-icons/md";
import useAuthHook from "../../../Hooks/useAuthHook";
import useUserHook from "../../../Hooks/useUserHook";
const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const EditTextArea = ({ id }) => {
	const { register, handleSubmit, reset } = useForm();
	const [userData] = useUserHook();
	const { user } = useAuthHook();
	const onSubmit = (data) => {
		const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
		const formData = new FormData();
		formData.append("image", data.image[0]);
		fetch(img_hosting_url, {
			method: "POST",
			body: formData,
		})
			.then((res) => res.json())
			.then((res) => {
				if (res.success) {
					const imgURL = res.data.display_url;
					console.log(imgURL);
					const { title, status } = data;
					const newItem = {
						user_Id: userData._id,
						title,
						status,
						like: [],
						Comment: [],
						image: imgURL,
						photoURL: user?.photoURL,
					};
					// https://social-umber-seven.vercel.app
					console.log(newItem);
					axios
						.patch(`http://localhost:3000/status/${id}`, newItem)
						.then((data) => {
							console.log("is iserted", data.data);
							if (data.data.insertedId) {
								reset();
								Swal.fire({
									position: "top-end",
									icon: "success",
									title: "Status  added successfully",
									showConfirmButton: false,
									timer: 1500,
								});
							}
						});
				}
			});
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div
				className="form-control text-black
			"
			>
				<label className="label">
					<span className="label-text">Title</span>
				</label>
				<input
					// value={userData?.name}
					type="text"
					placeholder="Title"
					className="input input-success input-bordered"
					{...register("title", { required: true })}
				/>
			</div>
			<div className="form-control my-3">
				<label className="label flex justify-start">
					<span className="label-text text-black  ">Status</span>
				</label>
				<textarea
					className="textarea textarea-info  text-success textarea-lg w-[26rem] h-30 border-2 rounded-lg"
					placeholder="----- Write your  post "
					{...register("status", { required: true })}
				></textarea>
			</div>
			<div className="flex justify-between">
				{(!user && (
					<button className="btn btn-info text-white" disabled>
						<MdOutlinePostAdd />
						Post
					</button>
				)) || (
					<button className="btn btn-info text-white">
						<MdOutlinePostAdd /> Post
					</button>
				)}
				<div className="form-control">
					<label className="label btn btn-error  btn-outline">
						<span className=" px-6  ">
							<ImImage />
							Image
						</span>
						<div className="">
							<input
								type="file"
								className="hidden"
								{...register("image", { required: true })}
							/>
						</div>
					</label>
				</div>
			</div>
		</form>
	);
};

export default EditTextArea;
