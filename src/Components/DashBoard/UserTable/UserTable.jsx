import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAxois from "../../../Hooks/useAxois";


const UserTable = () => {
    const axiosSecure = useAxois();

    const {data: users = [],isLoading,refetch,} = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosSecure.get("/users");
            return res.data;
        },
    });

    // ✅ Handle delete button (without useMutation)
    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won’t be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await axiosSecure.delete(`/users/${id}`);
                    if (res.data.deletedCount > 0) {
                        Swal.fire("Deleted!", "User has been removed.", "success");
                        refetch(); 
                    }
                } catch (error) {
                    Swal.fire("Error!", "Something went wrong!", "error");
                    console.error(error);
                }
            }
        });
    };

    if (isLoading)
        return (
            <div className="text-center py-10 text-lg font-semibold text-gray-500">
                Loading users...
            </div>
        );

    return (
        <div className="overflow-x-auto">
            <table className="table w-full bg-white/5 backdrop-blur-md text-white shadow-lg rounded-2xl">
                {/* Table Head */}
                <thead className="bg-base-200 text-base font-semibold text-gray-700">
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Login Time</th>
                        <th>Action</th>
                    </tr>
                </thead>

                {/* Table Body */}
                <tbody>
                    {users.length > 0 ? (
                        users.map((user, index) => (
                            <tr key={user._id || index} className="hover">
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{new Date (user.lastSignInTime).toLocaleDateString()} <span>{new Date (user.lastSignInTime).toLocaleTimeString()}</span></td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(user._id)}
                                        className="btn btn-error btn-sm text-white flex items-center gap-2"
                                    >
                                        <FaTrashAlt />
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-center py-4 text-gray-500">
                                No users found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;
