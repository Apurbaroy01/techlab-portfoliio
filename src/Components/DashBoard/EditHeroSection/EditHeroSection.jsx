import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";

const EditHeroSection = ({ heroData, refetch }) => {
    const { register, handleSubmit, reset } = useForm({
        defaultValues: heroData,
    });

    const onSubmit = async (data) => {
        try {
            await axios.put(`http://localhost:5000/hero/${heroData._id}`, data);
            Swal.fire({
                icon: "success",
                title: "Updated Successfully!",
                text: "Hero section content updated.",
                timer: 1500,
                showConfirmButton: false,
            });
            refetch();
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Update Failed!",
                text: "Something went wrong.",
            });
        }
    };

    return (
        <div className="max-w-5xl mx-auto bg-white rounded-2xl  p-10 my-10 ">
            <h2 className="text-3xl font-bold text-center mb-10 text-primary">
                ✏️ Edit Hero Section
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Tagline */}
                <div className="flex flex-col">
                    <label className="label">
                        <span className="label-text font-semibold">Tagline</span>
                    </label>
                    <input
                        {...register("tagline")}
                        type="text"
                        placeholder="Enter tagline"
                        className="input input-bordered w-full focus:ring-2 focus:ring-primary"
                    />
                </div>

                {/* Title */}
                <div className="flex flex-col">
                    <label className="label">
                        <span className="label-text font-semibold">Title</span>
                    </label>
                    <input
                        {...register("title")}
                        type="text"
                        placeholder="Enter title"
                        className="input input-bordered w-full focus:ring-2 focus:ring-primary"
                    />
                </div>

                {/* Subtitle */}
                <div className="md:col-span-2 flex flex-col">
                    <label className="label">
                        <span className="label-text font-semibold">Subtitle</span>
                    </label>
                    <textarea
                        {...register("subtitle")}
                        rows={3}
                        placeholder="Enter subtitle text"
                        className="textarea textarea-bordered w-full focus:ring-2 focus:ring-primary"
                    ></textarea>
                </div>

                {/* Years of Experience */}
                <div className="flex flex-col">
                    <label className="label">
                        <span className="label-text font-semibold">Years of Experience</span>
                    </label>
                    <input
                        {...register("years")}
                        type="number"
                        placeholder="Enter years (e.g. 13)"
                        className="input input-bordered w-full focus:ring-2 focus:ring-primary"
                    />
                </div>

                {/* Projects Completed */}
                <div className="flex flex-col">
                    <label className="label">
                        <span className="label-text font-semibold">Projects Completed</span>
                    </label>
                    <input
                        {...register("projects")}
                        type="number"
                        placeholder="Enter project count (e.g. 74)"
                        className="input input-bordered w-full focus:ring-2 focus:ring-primary"
                    />
                </div>

                {/* Trusted Companies */}
                <div className="flex flex-col md:col-span-2">
                    <label className="label">
                        <span className="label-text font-semibold">Trusted Companies</span>
                    </label>
                    <input
                        {...register("companies")}
                        type="number"
                        placeholder="Enter company count (e.g. 9.2)"
                        className="input input-bordered w-full focus:ring-2 focus:ring-primary"
                    />
                </div>

                {/* Buttons */}
                <div className="md:col-span-2 flex justify-center gap-4 mt-6">
                    <button type="submit" className="btn btn-primary px-8">
                        💾 Save Changes
                    </button>
                    <button
                        type="button"
                        onClick={() => reset(heroData)}
                        className="btn btn-outline btn-error px-8"
                    >
                        ✖ Reset
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditHeroSection;
