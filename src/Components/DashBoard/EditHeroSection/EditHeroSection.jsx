import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { FaSave, FaPenFancy } from "react-icons/fa";
import useAxois from "../../../Hooks/useAxois";
import useData from "../../../Hooks/useData";

const EditHeroSection = () => {
    const axiosInstance = useAxois();
    const { heroData, refetch, isLoading } = useData();
    const hero = Array.isArray(heroData) ? heroData[0] : heroData;

    const { register, handleSubmit } = useForm({
        defaultValues: hero,
    });

    const onSubmit = async (data) => {
        try {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, confirm it!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await axiosInstance.patch(`/hero/${hero?._id}`, data);
                    Swal.fire({
                        icon: "success",
                        title: "✨ Updated Successfully!",
                        text: "Hero section has been updated beautifully!",
                        timer: 1500,
                        showConfirmButton: false,
                    });
                    refetch();
                }
            });

        } catch (error) {
            console.error("Error updating hero section:", error);
            Swal.fire({
                icon: "error",
                title: "Update Failed 😢",
                text: "Please try again later.",
            });
        }
    };

    if (isLoading)
        return (
            <div className="flex justify-center items-center h-48">
                <span className="loading loading-spinner text-primary"></span>
            </div>
        );

    return (
        <div className="max-w-4xl mx-auto my-12 bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl shadow-xl backdrop-blur-md border border-white/40 p-1">
            <div className="bg-white/80 rounded-3xl p-8 md:p-10">
                {/* Header */}
                <div className="flex flex-col items-center mb-10">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-500 text-white rounded-full p-4 shadow-lg">
                        <FaPenFancy size={28} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500 mt-4">
                        Edit Hero Section
                    </h2>
                    <p className="text-gray-500 text-center mt-2">
                        Update your portfolio’s headline details below ✨
                    </p>
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    <div className="form-control">
                        <label className="label font-semibold text-gray-600">
                            Tagline
                        </label>
                        <input
                            {...register("tagline")}
                            placeholder="Enter tagline"
                            className="input input-bordered rounded-xl w-full focus:ring-2 focus:ring-blue-400"
                            defaultValue={hero?.tagline}
                        />
                    </div>

                    <div className="form-control">
                        <label className="label font-semibold text-gray-600">Title</label>
                        <input
                            {...register("title")}
                            placeholder="Enter title"
                            className="input input-bordered rounded-xl w-full focus:ring-2 focus:ring-purple-400"
                            defaultValue={hero?.title}
                        />
                    </div>

                    <div className="form-control md:col-span-2">
                        <label className="label font-semibold text-gray-600">
                            Subtitle
                        </label>
                        <textarea
                            {...register("subtitle")}
                            placeholder="Write short subtitle..."
                            className="textarea textarea-bordered w-full rounded-xl focus:ring-2 focus:ring-blue-400"
                            defaultValue={hero?.subtitle}
                        />
                    </div>

                    <div className="form-control">
                        <label className="label font-semibold text-gray-600">
                            Years of Experience
                        </label>
                        <input
                            {...register("years")}
                            type="number"
                            placeholder="e.g., 5"
                            className="input input-bordered rounded-xl w-full focus:ring-2 focus:ring-purple-400"
                            defaultValue={hero?.years}
                        />
                    </div>

                    <div className="form-control">
                        <label className="label font-semibold text-gray-600">
                            Projects Completed
                        </label>
                        <input
                            {...register("projects")}
                            type="number"
                            placeholder="e.g., 120"
                            className="input input-bordered rounded-xl w-full focus:ring-2 focus:ring-blue-400"
                            defaultValue={hero?.projects}
                        />
                    </div>

                    <div className="form-control md:col-span-2">
                        <label className="label font-semibold text-gray-600">
                            Trusted Companies
                        </label>
                        <input
                            {...register("companies")}
                            type="number"
                            placeholder="e.g., 15"
                            className="input input-bordered rounded-xl w-full focus:ring-2 focus:ring-purple-400"
                            defaultValue={hero?.companies}
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="md:col-span-2 flex justify-center mt-4">
                        <button
                            type="submit"
                            className="btn bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full px-10 py-3 font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                        >
                            <FaSave /> Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditHeroSection;
