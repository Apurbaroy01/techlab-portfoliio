import React, { useState } from "react";
import { FaUserEdit, FaEnvelope, FaInfoCircle, FaCamera, FaSave } from "react-icons/fa";
import Swal from "sweetalert2";

const ProfileSettings = () => {
    const [profile, setProfile] = useState({
        name: "Apurba Roy",
        email: "apurba@example.com",
        bio: "MERN Stack Developer passionate about building modern web applications.",
        image: "",
    });

    // image preview
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setProfile({ ...profile, image: imageUrl });
        }
    };

    // form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            icon: "success",
            title: "Profile Updated!",
            text: "Your profile has been successfully updated.",
            confirmButtonColor: "#2563eb",
        });
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-base-200 p-6">
            <div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl border border-gray-200 p-8">
                <h2 className="text-3xl font-bold text-center text-primary mb-8">
                    👤 Profile Settings
                </h2>

                {/* Profile Image */}
                <div className="flex flex-col items-center mb-8 relative">
                    <div className="avatar">
                        <div className="w-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img
                                src={
                                    profile.image ||
                                    "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                                }
                                alt="Profile"
                            />
                        </div>
                    </div>

                    <label
                        htmlFor="imageUpload"
                        className="absolute bottom-0 right-[42%] bg-primary text-white p-3 rounded-full cursor-pointer shadow-lg hover:bg-primary-focus transition-all duration-200"
                    >
                        <FaCamera className="text-lg" />
                        <input
                            type="file"
                            id="imageUpload"
                            className="hidden"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                    </label>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Full Name</span>
                        </label>
                        <div className="input input-bordered flex items-center gap-3">
                            <FaUserEdit className="text-gray-500" />
                            <input
                                type="text"
                                className="grow focus:outline-none"
                                placeholder="Your Name"
                                value={profile.name}
                                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                                required
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Email Address</span>
                        </label>
                        <div className="input input-bordered flex items-center gap-3">
                            <FaEnvelope className="text-gray-500" />
                            <input
                                type="email"
                                className="grow focus:outline-none"
                                placeholder="you@example.com"
                                value={profile.email}
                                onChange={(e) =>
                                    setProfile({ ...profile, email: e.target.value })
                                }
                                required
                            />
                        </div>
                    </div>

                    {/* Bio */}
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Bio</span>
                        </label>
                        <div className="input input-bordered flex items-start gap-3 py-3">
                            <FaInfoCircle className="text-gray-500 mt-1" />
                            <textarea
                                className="grow resize-none focus:outline-none"
                                rows="3"
                                placeholder="Write something about yourself..."
                                value={profile.bio}
                                onChange={(e) =>
                                    setProfile({ ...profile, bio: e.target.value })
                                }
                            ></textarea>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-center mt-6">
                        <button
                            type="submit"
                            className="btn btn-primary w-full text-white font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform duration-200"
                        >
                            <FaSave /> Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProfileSettings;
