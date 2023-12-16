import { useQuery } from "@tanstack/react-query";
import useAuthHook from "./useAuthHook";
import axios from "axios";

const useUserHook = () => {
	const { user } = useAuthHook();
	const {
		data: userData = [],
		isLoading: loading,
		refetch,
	} = useQuery({
		queryKey: ["userData"],
		enabled: !!user?.email,
		queryFn: async () => {
			const res = await axios.get(
				`http://localhost/3000/users/about/${user?.email}`
			);
			return res.data;
		},
	});

	return [userData, refetch, loading];
};

export default useUserHook;
