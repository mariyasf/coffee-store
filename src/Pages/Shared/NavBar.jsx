import { NavLink } from 'react-router-dom';
import nav from '/images/more/15.jpg'
import logo from '/images/more/logo1.png'


const NavBar = () => {
    const navLink = <>
        <li> <NavLink to={'/home'}>Home</NavLink> </li>
    </>
    return (
        // <div className='relative'
        //>
        //     <div className='absolute inset-0 flex items-center justify-center gap-5'>
        //         <img src={logo} className='w-24 h-24' alt="" />
        //         <p className='text-white font-bold font-Rancho text-3xl'>Espresso Emporium</p>
        //     </div>
        // </div>

        <div className="navbar"
            style={{ backgroundImage: `url(${nav})`, height: '120px', width: '100%' }}>

            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost text-white  lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                        {navLink}
                    </ul>
                </div>

                <img src={logo}
                    className='w-10 h-10 lg:w-24 lg:h-24 ' alt="" />
                <a className="pl-4 text-white font-bold font-Rancho text-xl lg:text-3xl">Espresso Emporium</a>
            </div>
            <div className="navbar-center hidden text-white text-xl lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </ div>

    );
};

export default NavBar;