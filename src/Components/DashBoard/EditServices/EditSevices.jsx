import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { FaUserEdit, FaSave, FaCamera, FaHandHoldingHeart, FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import useAxois from "../../../Hooks/useAxois";

const EditSevices = () => {
    const axiosInstance = useAxois();
    const [preview, setPreview] = useState();
    const fileInputRef = useRef(null);

    const { data: services = [], refetch } = useQuery({
        queryKey: ["services"],
        queryFn: async () => {
            const res = await axiosInstance.get("/services");
            return res.data;
        },
    });

    const { register, handleSubmit, reset } = useForm();

    // 🖼 Handle image upload
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
            title: data.title,
            description: data.description,
        };

        try {
            const res = await axiosInstance.post("/services", formData);
            if (res.data.insertedId) {
                refetch();
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: "Service added successfully!",
                });
                reset();
                setPreview(null);
            }
        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "There was an error adding the service.",
            });
        }
    };

    return (
        <div className="min-h-screen w-full py-16 bg-gradient-to-br from-pink-200 via-blue-100 to-indigo-200 flex flex-col items-center justify-start">
            <div className="w-11/12 max-w-6xl bg-white/30 backdrop-blur-lg border border-white/50 shadow-2xl rounded-3xl p-8 transition-all duration-500">
                {/* Header */}
                <div className="flex flex-col items-center mb-10">
                    <div className="bg-gradient-to-r from-pink-600 to-blue-500 text-white rounded-full p-4 shadow-lg">
                        <FaHandHoldingHeart size={28} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-500 mt-4">
                        Manage & Edit Your Services
                    </h2>
                    <p className="text-gray-600 text-center mt-1">
                        Update service’s image, title & description easily
                    </p>
                </div>

                {/* 🧾 Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-6">
                    {/* 🖼 Image Upload */}
                    <div className="form-control flex flex-col items-center">
                        <div
                            className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-gradient-to-r from-pink-500 to-blue-500 shadow-md cursor-pointer hover:scale-105 transition-all duration-300"
                            onClick={() => fileInputRef.current.click()}
                        >
                            {preview ? (
                                <img src={preview} alt="Preview" className="w-full h-full object-cover" />
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
                        <p className="text-gray-500 text-sm mt-2">Click image to change</p>
                    </div>

                    {/* Inputs */}
                    <div className="w-full mx-auto p-6 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg space-y-6 border border-white/60">
                        <div className="form-control w-1/2 mx-auto">
                            <label className="label font-semibold text-gray-700 text-sm md:text-base">
                                Title Name
                            </label>
                            <input
                                {...register("title")}
                                placeholder="Enter service title"
                                className="input input-bordered w-full rounded-xl border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 shadow-sm placeholder-gray-400"
                            />
                        </div>

                        <div className="form-control w-1/2 mx-auto">
                            <label className="label font-semibold text-gray-700 text-sm md:text-base">
                                Description
                            </label>
                            <input
                                {...register("description")}
                                placeholder="Enter service description"
                                className="input input-bordered w-full rounded-xl border-gray-300 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 shadow-sm placeholder-gray-400"
                            />
                        </div>

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

            {/* Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 w-11/12 max-w-6xl">
                {services.map((service) => (
                    <div
                        key={service._id}
                        className="bg-white/40 backdrop-blur-md border border-white/60 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-all duration-300"
                    >
                        <img
                            src={service.url}
                            alt={service.name}
                            className="w-40 h-28 object-cover rounded-xl shadow-md border-2 border-pink-300"
                        />
                        <h3 className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600 mt-2">
                            {service.title}
                        </h3>
                        <p className="text-gray-600 text-sm">{service.description}</p>
                        <div className="flex gap-2 mt-4">
                            <button className="btn btn-sm bg-gradient-to-r from-blue-500 to-pink-500 text-white flex items-center gap-1 hover:scale-105 transition">
                                <FaUserEdit /> Edit
                            </button>
                            <button
                                className="btn btn-sm bg-gradient-to-r from-red-500 to-pink-600 text-white flex items-center gap-1 hover:scale-105 transition"
                                onClick={async () => {
                                    try {
                                        await axiosInstance.delete(`/services/${service._id}`);
                                        refetch();
                                        Swal.fire("Deleted!", `${service.title} deleted.`, "success");
                                    } catch (err) {
                                        console.log(err)
                                        Swal.fire("Error", "Delete failed.", "error");
                                    }
                                }}
                            >
                                <FaTrashAlt /> Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EditSevices;
