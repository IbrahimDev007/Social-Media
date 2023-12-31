import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const usePostHook = () => {
	const {
		data: status = [],
		isLoading: loading,
		refetch,
	} = useQuery({
		queryKey: ["status"],
		// enabled: !!!loading,
		queryFn: async () => {
			const res = await axios.get("http://localhost:3000/status");
			return res.data;
		},
	});

	return [status, loading, refetch];
};

export default usePostHook;
