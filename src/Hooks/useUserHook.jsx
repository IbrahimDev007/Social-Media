import { useState } from "react";
import useAuthHook from "./useAuthHook";
import { useEffect } from "react";
import axios from "axios";

const useUserHook = () => {
	const { user } = useAuthHook();
	const [userData, setuserData] = useState([]);
	useEffect(() => {
		axios
			.get(`https://social-umber-seven.vercel.app/users/about/${user?.email}`)
			.then((data) => setuserData(data.data));
	}, [user?.email]);
	return [userData];
};

export default useUserHook;
