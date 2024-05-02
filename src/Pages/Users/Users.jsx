import { useState } from "react";
import { ImCross } from "react-icons/im";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
    const lodedUsers = useLoaderData();
    const [users, setUsers] = useState(lodedUsers);

    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://coffee-store-server-livid-phi.vercel.app/user/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted.",
                                icon: "success"
                            });
                        }
                        const remaining = users.filter(user => user._id !== id);
                        setUsers(remaining);
                    })
            }
        });
    }

    return (
        <div>
            <h2 className="text-center font-bold my-10 font-Rancho text-3xl">Users: {users.length}</h2>
            <div className="overflow-x-auto mx-10 lg:mx-20">
                <table className="table ">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Last Login</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) =>
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.createAt}</td>
                                    <td>{user.lastLoginAt}</td>
                                    <td className="text-center">
                                        <button
                                            onClick={() => { handleDelete(user._id) }}
                                            className="btn bg-[#331A15] text-white">
                                            <ImCross />
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
