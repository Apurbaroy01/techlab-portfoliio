import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { FaUserEdit, FaSave, FaCamera, FaExternalLinkAlt } from "react-icons/fa";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import useAxois from "../../../../Hooks/useAxois";
import { SiPolymerproject } from "react-icons/si";

const EditProjectSection = () => {
    const axiosInstance = useAxois();
    const [preview, setPreview] = useState();
    const fileInputRef = useRef(null);

    const { data: projects = [], refetch } = useQuery({
        queryKey: ["projects"],
        queryFn: async () => {
            const res = await axiosInstance.get("/projects");
            return res.data;
        },
    });

    const { register, handleSubmit, reset } = useForm();

    // 🖼 Handle image change + preview update
    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const tempUrl = URL.createObjectURL(file);
        setPreview(tempUrl);

        const formData = new FormData();
        formData.append("image", file);

        try {
            const res = await axios.post(
                "https://api.imgbb.com/1/upload?key=3e6bb97e2f9920f1db504fde9535a137",
                formData
            );

            const imageUrl = res.data.data.url;
            setPreview(imageUrl);
        } catch (error) {
            console.error("❌ Image upload error:", error);
        }
    };

    // 🧭 Form submit
    const onSubmit = async (data) => {
        const formData = {
            url: preview,
            name: data.name,
            description: data.description,
            live: data.live,
        };

        try {
            const res = await axiosInstance.post("/projects", formData);
            if (res.data.insertedId) {
                refetch();
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: "Project added successfully!",
                });
                reset();
                setPreview("");
            }
        } catch (error) {
            console.error("❌ Submission error:", error);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "There was an error adding the project.",
            });
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 p-6 md:p-10 text-white">
            <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl p-8">
                {/* Header */}
                <div className="flex flex-col items-center mb-8">
                    <div className="bg-gradient-to-r from-pink-600 to-blue-500 text-white rounded-full p-4 shadow-lg">
                        <SiPolymerproject size={26} />
                    </div>
                    <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 mt-3">
                        Edit Project’s Details
                    </h2>
                    <p className="text-gray-300 text-center mt-1">
                        Update project image, title & description
                    </p>
                </div>

                {/* 🧾 Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-6">
                    {/* 🖼 Image Preview + Upload */}
                    <div className="form-control flex flex-col items-center">
                        <div
                            className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-md cursor-pointer hover:scale-105 hover:shadow-purple-500/40 transition-all"
                            onClick={() => fileInputRef.current.click()}
                        >
                            {preview ? (
                                <img
                                    src={preview}
                                    alt="Preview"
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="flex flex-col items-center justify-center h-full text-gray-400">
                                    <FaCamera size={30} />
                                    <p className="text-xs mt-1">Upload Photo</p>
                                </div>
                            )}
                            <input
                                type="file"
                                accept="image/*"
                                {...register("img")}
                                ref={fileInputRef}
                                onChange={handleImageChange}
                                className="hidden"
                            />
                        </div>
                        <p className="text-gray-400 text-sm mt-2">Click image to change</p>
                    </div>

                    <div className="w-full mx-auto p-4 md:p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg space-y-6">
                        {/* 👤 Name */}
                        <div className="form-control md:w-1/2 mx-auto">
                            <label className="label font-semibold text-gray-200">
                                Project Name
                            </label>
                            <input
                                {...register("name")}
                                placeholder="Enter project name"
                                className="input input-bordered w-full rounded-xl bg-white/10 border-white/30 text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        {/* 🧑‍💻 Description */}
                        <div className="form-control md:w-1/2 mx-auto">
                            <label className="label font-semibold text-gray-200">
                                Description
                            </label>
                            <input
                                {...register("description")}
                                placeholder="Enter project description"
                                className="input input-bordered w-full rounded-xl bg-white/10 border-white/30 text-white placeholder-gray-300 focus:ring-2 focus:ring-purple-400"
                            />
                        </div>

                        {/* 🌐 Live Link */}
                        <div className="form-control md:w-1/2 mx-auto">
                            <label className="label font-semibold text-gray-200">
                                Live Link
                            </label>
                            <input
                                {...register("live")}
                                placeholder="Enter project live link"
                                className="input input-bordered w-full rounded-xl bg-white/10 border-white/30 text-white placeholder-gray-300 focus:ring-2 focus:ring-pink-400"
                            />
                        </div>

                        {/* 💾 Submit */}
                        <div className="flex justify-center mt-4">
                            <button
                                type="submit"
                                className="btn bg-gradient-to-r from-pink-600 to-blue-600 text-white rounded-full px-10 py-3 font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                            >
                                <FaSave /> Save Changes
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            {/* 🔽 Project Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                {projects.map((project) => (
                    <div
                        key={project._id}
                        className="bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl shadow-xl p-4 flex flex-col items-center space-y-3 hover:scale-[1.02] transition-all duration-300"
                    >
                        <img
                            src={project.url}
                            alt={project.name}
                            className="w-11/12 h-40 object-cover rounded-2xl shadow-md"
                        />
                        <h3 className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400">
                            {project.name}
                        </h3>
                        <p className="text-gray-300 text-center text-sm">
                            {project.description}
                        </p>
                        <div className="flex gap-2 mt-2">
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-sm bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-1"
                            >
                                <FaExternalLinkAlt /> Live
                            </a>
                            <button className="btn btn-sm bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-1">
                                <FaUserEdit /> Edit
                            </button>
                            <button
                                className="btn btn-sm bg-red-600 hover:bg-red-700 text-white flex items-center gap-1"
                                onClick={async () => {
                                    try {
                                        await axiosInstance.delete(`/projects/${project._id}`);
                                        refetch();
                                        Swal.fire("Deleted!", `${project.name} deleted.`, "success");
                                    } catch (err) {
                                        console.error(err);
                                        Swal.fire("Error", "Delete failed.", "error");
                                    }
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EditProjectSection;
