import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { FaCamera, FaSave, FaLock } from "react-icons/fa";
import useAuth from "../../../Hooks/useAuth";
import axios from "axios";

const ProfileSettings = () => {
    const { updatePass, user, updatauser } = useAuth();

    const [profileName, setProfileName] = useState(user?.displayName || "");
    const [preview, setPreview] = useState(user?.photoURL || null);

    useEffect(() => {
        setProfileName(user?.displayName || "");
        setPreview(user?.photoURL || null);
    }, [user]);

    // ✅ Profile Picture Upload
    const handleImageUpload = async (e) => {
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
            const imageUrl = res.data?.data?.display_url;
            if (imageUrl) setPreview(imageUrl);
        } catch (err) {
            console.error("Image upload error:", err);
        }
    };

    // ✅ Save Name & Photo
    const handleProfileSave = async () => {
        if (!user) return;

        try {
            await updatauser({
                displayName: profileName,
                photoURL: preview || user.photoURL,
            });

            Swal.fire({
                icon: "success",
                title: "Profile Updated!",
                text: "Your name and profile picture have been updated.",
                timer: 1500,
                showConfirmButton: false,
            });
        } catch (err) {
            Swal.fire({
                icon: "error",
                title: "Update Failed",
                text: err.message,
            });
        }
    };

    // ✅ Password Change
    const handlePasswordChange = async (e) => {
        e.preventDefault();
        const currentPassword = e.target.currentPassword.value;
        const newPassword = e.target.newPassword.value;
        if (!user) return;

        try {
            await updatePass(currentPassword, newPassword);
            Swal.fire({
                icon: "success",
                title: "Password Updated",
                text: "Your password has been updated successfully!",
            });
            e.target.reset();
        } catch (err) {
            Swal.fire({
                icon: "error",
                title: "Password Not Updated",
                text: err.message,
            });
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-pink-50 to-purple-100 p-6">
            <div className="max-w-3xl w-full bg-white/80 backdrop-blur-lg border border-white/30 shadow-2xl rounded-3xl p-8">
                <h2 className="text-3xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-500">
                    Profile Settings
                </h2>

                {/* Profile Picture */}
                <div className="flex flex-col items-center mb-10">
                    <div className="relative w-36 h-36 shadow-2xl shadow-blue-400 rounded-full">
                        <img
                            src={preview || "https://via.placeholder.com/150"}
                            alt="Profile"
                            className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
                        />
                        <label
                            htmlFor="upload"
                            className="absolute bottom-0 right-0 bg-gradient-to-r from-blue-500 to-pink-500 text-white p-3 rounded-full cursor-pointer shadow-lg hover:scale-105 transition-transform"
                        >
                            <FaCamera />
                        </label>
                        <input
                            type="file"
                            id="upload"
                            className="hidden"
                            accept="image/*"
                            onChange={handleImageUpload}
                        />
                    </div>
                </div>

                {/* Name & Email */}
                <div className="mb-10 space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="label font-semibold text-gray-700">
                                Full Name
                            </label>
                            <input
                                type="text"
                                value={profileName}
                                onChange={(e) => setProfileName(e.target.value)}
                                className="input input-bordered w-full bg-white border-gray-300 focus:ring-2 focus:ring-blue-300 rounded-xl"
                            />
                        </div>
                        <div>
                            <label className="label font-semibold text-gray-700">
                                Email Address
                            </label>
                            <input
                                type="email"
                                value={user?.email || ""}
                                disabled
                                className="input input-bordered w-full bg-gray-100 border-gray-300 text-gray-500 cursor-not-allowed rounded-xl"
                            />
                        </div>
                    </div>

                    <button
                        onClick={handleProfileSave}
                        className="btn bg-gradient-to-r from-blue-600 to-pink-500 text-white w-full mt-4 flex items-center justify-center gap-3 text-lg font-semibold hover:scale-105 transition-transform rounded-full"
                    >
                        <FaSave /> Save Profile
                    </button>
                </div>

                {/* Divider */}
                <div className="divider text-gray-500">Change Password</div>

                {/* Password Change */}
                <form onSubmit={handlePasswordChange} className="space-y-5">
                    <div>
                        <label className="label font-semibold text-gray-700">
                            Current Password
                        </label>
                        <input
                            type="text"
                            name="currentPassword"
                            placeholder="Enter current password"
                            className="input input-bordered w-full bg-white border-gray-300 focus:ring-2 focus:ring-blue-300 rounded-xl"
                            required
                        />
                    </div>
                    <div>
                        <label className="label font-semibold text-gray-700">
                            New Password
                        </label>
                        <input
                            type="text"
                            name="newPassword"
                            placeholder="Enter new password"
                            className="input input-bordered w-full bg-white border-gray-300 focus:ring-2 focus:ring-pink-300 rounded-xl"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn bg-gradient-to-r from-purple-500 to-blue-500 text-white w-full flex items-center justify-center gap-3 text-lg font-semibold hover:scale-105 transition-transform rounded-full"
                    >
                        <FaLock /> Update Password
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProfileSettings;
