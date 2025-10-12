import { useQuery } from "@tanstack/react-query";
import useAxois from "./useAxois";

const useData = () => {
    const axiosInstance = useAxois();

    // ✅ useQuery ব্যবহার করে hero data ফেচ করা হচ্ছে
    const { data: heroData = {}, isLoading, isError, error, refetch } = useQuery({
        queryKey: ["heroData"], // unique key for caching
        queryFn: async () => {
            const response = await axiosInstance.get("/hero");
            return response.data[0];
        },
    });

    return {
        heroData,
        isLoading,
        isError,
        error,
        refetch,
    };
};

export default useData;
