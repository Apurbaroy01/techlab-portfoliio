import { useQuery } from "@tanstack/react-query";
import useAxois from "./useAxois";

const useData = () => {
    const axiosInstance = useAxois();
    const { data: heroData = {}, isLoading, isError, error, refetch } = useQuery({
        queryKey: ["heroData"],
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
