import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { FaUserEdit, FaSave, FaCamera } from "react-icons/fa";
import useAxois from "../../../Hooks/useAxois";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const TeamMemberEdit = () => {
    const axiosInstance = useAxois();

    // 🖼 Image preview setup
    const [preview, setPreview] = useState();
    const fileInputRef = useRef(null);

    const { data: teamMembers = [], refetch } = useQuery({
        queryKey: ['teamMembers'],
        queryFn: async () => {
            const res = await axiosInstance.get('/teamMembers');
            return res.data;
        }
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
            console.log("✅ Uploaded Image URL:", imageUrl);
        } catch (error) {
            console.error("❌ Image upload error:", error);
        }
    };

    // 🧭 Form submit
    const onSubmit = async (data) => {
        const formData = {
            url: preview,
            name: data.name,
            role: data.role
        };

        try {
            const res = await axiosInstance.post('/teamMembers', formData);
            if (res.data.insertedId) {
                refetch();
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Team member added successfully!',
                });
                reset();
            }
        } catch (error) {
            console.error("❌ Submission error:", error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'There was an error updating the team member.',
            });
        }
    };

    return (
        <div className="w-11/12 mx-auto my-12 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-3xl shadow-2xl text-white p-1 border border-white/20 backdrop-blur-md">
            <div className="bg-white/10 rounded-3xl p-8 backdrop-blur-md border border-white/20">
                {/* Header */}
                <div className="flex flex-col items-center mb-8">
                    <div className="bg-gradient-to-r from-pink-600 to-blue-500 text-white rounded-full p-4 shadow-lg">
                        <FaUserEdit size={26} />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400 mt-3">
                        Edit Team Member
                    </h2>
                    <p className="text-gray-300 text-center mt-1">
                        Update member’s photo, name & role
                    </p>
                </div>

                {/* 🧾 Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-6">
                    {/* 🖼 Image Preview + Upload */}
                    <div className="form-control flex flex-col items-center">
                        <div
                            className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white/50 shadow-md cursor-pointer hover:scale-105 transition-all duration-300"
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
                            {/* Hidden File Input */}
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

                    {/* Input fields */}
                    <div className="w-full mx-auto p-6 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg space-y-6 border border-white/20">
                        {/* 👤 Name */}
                        <div className="form-control w-1/2 mx-auto">
                            <label className="label font-semibold text-gray-200 text-sm md:text-base">
                                Name
                            </label>
                            <input
                                {...register("name")}
                                placeholder="Enter member name"
                                className="input input-bordered w-full rounded-xl bg-white/20 border-gray-500 text-white placeholder-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                            />
                        </div>

                        {/* 🧑‍💻 Role */}
                        <div className="form-control w-1/2 mx-auto">
                            <label className="label font-semibold text-gray-200 text-sm md:text-base">
                                Role
                            </label>
                            <input
                                {...register("role")}
                                placeholder="Enter role (e.g. UI/UX Designer)"
                                className="input input-bordered w-full rounded-xl bg-white/20 border-gray-500 text-white placeholder-gray-300 focus:border-purple-400 focus:ring-2 focus:ring-purple-200 transition-all duration-300"
                            />
                        </div>

                        {/* 💾 Submit */}
                        <div className="flex justify-center mt-4">
                            <button
                                type="submit"
                                className="btn bg-gradient-to-r from-pink-600 to-blue-600 text-white rounded-full px-10 py-3 font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                            >
                                <FaSave /> Save Changes
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            {/* 🧑‍🤝‍🧑 Team Members List */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                {teamMembers.map(member => (
                    <div
                        key={member._id}
                        className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-lg p-4 flex flex-col items-center space-y-2 hover:scale-[1.02] transition-all duration-300"
                    >
                        <img
                            src={member.url}
                            alt={member.name}
                            className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/50"
                        />
                        <h3 className="font-bold text-lg text-white">{member.name}</h3>
                        <p className="text-gray-300">{member.role}</p>
                        <div className="flex gap-2 mt-2">
                            <button className="btn btn-sm bg-gradient-to-r from-blue-500 to-purple-500 text-white border-none flex items-center gap-1">
                                <FaUserEdit /> Edit
                            </button>
                            <button
                                className="btn btn-sm bg-gradient-to-r from-pink-600 to-red-500 text-white border-none flex items-center gap-1"
                                onClick={async () => {
                                    try {
                                        await axiosInstance.delete(`/teamMembers/${member._id}`);
                                        refetch();
                                        Swal.fire("Deleted!", `${member.name} deleted.`, "success");
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

export default TeamMemberEdit;
