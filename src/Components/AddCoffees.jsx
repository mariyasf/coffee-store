import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const AddCoffees = () => {
    return (
        <div className="w-[1140px] mx-auto my-10">
            <Link to={'/home'}

            >
                <button className="flex gap-4 items-center p-4
                 hover:bg-[#D2B48C] hover:rounded-xl  ">

                    <FaLongArrowAltLeft />
                    <span>Back to Home</span>
                </button>
            </Link>

        </div>
    );
};

export default AddCoffees;