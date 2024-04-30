
import { FaCoffee } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Products = () => {
    return (
        <div>
            <div className='text-center my-10 space-y-5'>
                <p> --- Sip & Savor ---</p>
                <h2 className='text-[#331A15] font-Rancho font-bold text-4xl'>Our Popular Products</h2>
                <Link to={'/addCoffee'}>
                    <button className='primary-btn2 mx-auto mt-4 text-center flex items-center gap-4'>
                        <span>Add Coffee</span>
                        <FaCoffee className='text-xl' />
                    </button>
                </Link>
            </div>
            

        </div>
    );
};

export default Products;