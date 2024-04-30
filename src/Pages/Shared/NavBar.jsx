import nav from '/images/more/15.jpg'
import logo from '/images/more/logo1.png'
 

const NavBar = () => {
    return (
        <div className='relative' style={{ backgroundImage: `url(${nav})`, height: '120px', width: '100%' }}>
            <div className='absolute inset-0 flex items-center justify-center gap-5'>
                <img src={logo} className='w-24 h-24' alt="" />
                <p className='text-white font-bold font-Rancho text-3xl'>Espresso Emporium</p>
            </div>
        </div>

    );
};

export default NavBar;