import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useUserHook from "../Hooks/useUserHook";
import useAuthHook from "../Hooks/useAuthHook";
import { ImImage } from "react-icons/im";
import { MdOutlinePostAdd } from "react-icons/md";
const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
const TextArea = () => {
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
					};
					console.log(newItem);
					axios
						.post("https://social-umber-seven.vercel.app/status", newItem)
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
		// <div className=" max-w-[40rem] flex justify-center">
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="form-control">
				<label className="label">
					<span className="label-text">Title</span>
				</label>
				<input
					// value={userData?.name}
					type="text"
					placeholder="Title"
					className="input input-bordered"
					{...register("title", { required: true })}
				/>
			</div>
			<div className="form-control my-3">
				<label className="label flex justify-start">
					<span className="label-text text-black  ">Status</span>
				</label>
				<textarea
					className="textarea textarea-info textarea-lg w-[26rem] h-30 border-2 rounded-lg"
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
					<label className="label btn btn-error  text-white ">
						<span className="label-text px-6  text-white">
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
		// </div>
	);
};

export default TextArea;
