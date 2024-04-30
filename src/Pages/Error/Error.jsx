import Footer from '../Shared/Footer';
import NavBar from '../Shared/NavBar';
import error from '/images/404/404.gif'

const Error = () => {
    return (
        <div>
            <NavBar />
            <img src={error}
                className='mx-auto'
                alt="" />
            <Footer />
        </div>
    );
};

export default Error;