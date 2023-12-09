import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuthHook from "../Hooks/useAuthHook";
const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
const TextArea = () => {
	const { register, handleSubmit, reset } = useForm();
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
					const { status } = data;
					const newItem = {
						// name,
						status,
						like: null,
						// Comment:[],
						image: imgURL,

						// name: user?.displayName,
						// email: user.email,
					};
					console.log(newItem);
					axios.post("/status", newItem).then((data) => {
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
		<div className="">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="form-control my-3">
					<label className="label flex justify-start">
						<span className="label-text text-base-100 px-6 ">Status</span>
					</label>
					<textarea
						className="textarea textarea-info textarea-lg w-[26rem] h-30 border-2 rounded-lg"
						placeholder="----- Write your  post "
						{...register("status")}
					></textarea>
				</div>
				<div className="flex justify-between">
					<button className="btn btn-info">Add Post</button>
					<div className="form-control">
						<label className="label btn btn-success ">
							<span className="label-text px-6">Upload Image</span>
							<div className="">
								<input type="file" className="hidden" {...register("image")} />
							</div>
						</label>
					</div>
				</div>
			</form>
		</div>
	);
};

export default TextArea;
