import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const CoffeCard = ({ coffee }) => {
    const { photo, name, chef } = coffee;

    return (
        <div className="card card-side lg:p-5
         bg-[#F5F4F1]  shadow-xl flex flex-col lg:flex-row justify-between gap-5">
            <figure>
                <img
                    className="w-full lg:w-40 lg:h-40"
                    src={photo}
                    alt="Movie" />
            </figure>
            <div className="flex-1 flex flex-row justify-evenly gap-10 py-5">

                <div>
                    <p><span className="font-bold">Name:</span> {name}</p>
                    <p><span className="font-bold">Chef:</span> {chef}</p>
                    <p><span className="font-bold">Price:</span> $12</p>
                </div>

                <div className="text-xl space-y-4 text-white">
                    <div className="bg-[#D2B48C] w-8 h-8 flex text-center items-center justify-center">
                        <FaEye />
                    </div>
                    <div className="bg-[#3C393B] w-8 h-8 flex text-center items-center justify-center">
                        <FaEdit />
                    </div>
                    <div className="bg-[#EA4744] w-8 h-8 flex text-center items-center justify-center">
                        <MdDelete />
                    </div>

                </div>

            </div>
        </div>
    );
};

export default CoffeCard;