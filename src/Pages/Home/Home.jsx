import CoffeCard from '../../Components/CoffeCard';
import Banner from './Banner';
import Products from './Products';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const coffes = useLoaderData();

    return (
        <div>
            <Banner />
            <Products />

            <div className='coffee-banner px-10 lg:px-40
            grid grid-cols-1  lg:grid-cols-2  gap-10
            '>
                {
                    coffes.map(coffee =>
                        <CoffeCard key={coffee._id} coffee={coffee} />

                    )
                }
            </div>

        </div>
    );
};

export default Home;