import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import footer from '/images/more/13.jpg'
import footer2 from '/images/more/24.jpg'
import logo from '/images/more/logo1.png'
import './footer.css'
import { IoMdCall } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
const Footer = () => {
    return (
        <>
            <div
                className='mt-10 w-[1400px] mx-auto flex flex-col lg:flex-row gap-10 px-10 lg:px-40 py-20'
                style={{ backgroundImage: `url(${footer})`, width: '100%' }}>
                <div className='text-[#331A15] flex-1'>
                    <div className='space-y-4'>
                        <img src={logo} className='w-24 h-24' alt="" />
                        <h3 className='text-4xl font-Rancho font-bold'>Espresso Emporium</h3>
                        <p>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                        <div className='flex gap-4 text-3xl '>
                            <FaFacebook />
                            <FaTwitter />
                            <FaInstagram />
                            <FaLinkedin />

                        </div>
                    </div>
                    <div className='mt-10 space-y-4'>
                        <h3 className='text-4xl font-Rancho font-bold'>Get in Touch </h3>
                        <div className='space-y-4 text-lg '>
                            <p className='flex gap-4'>
                                <IoMdCall />
                                <span>+88 01533 333 333</span>
                            </p>
                            <p className='flex gap-4'>
                                <MdEmail />
                                <span> info@gmail.com</span>
                            </p>
                            <p className='flex gap-4'>
                                <FaLocationDot />
                                <span>72, Wall street, King Road, Dhaka</span>
                            </p>
                        </div>

                    </div>


                </div>

                <div className='flex-1'>
                    <h2 className='font-Rancho text-3xl pb-5 font-bold'>Connect With Us</h2>

                    <form action="">
                        <input type="text"
                            className='p-4 rounded-xl mb-4 w-full'
                            name='name'
                            placeholder='Name' />
                        <br />

                        <input type="email"
                            className='p-4 rounded-xl mb-4 w-full'
                            name='email'
                            placeholder='email' />
                        <br />
                        <textarea
                            className='p-4 rounded-xl mb-4 w-full'
                            name='message'
                            placeholder='Message'
                            rows='5'
                        ></textarea>

                        <button className='footer-primary-btn font-Rancho '>Send Message</button>




                        <br />


                    </form>
                </div>
            </div>

            <div className='relative' style={{ backgroundImage: `url(${footer2})`, height: '120px', width: '100%' }}>
                <aside className='absolute inset-0 flex items-center justify-center gap-5'>


                    <p className='text-white font-Rancho text-xl'>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
                </aside>

            </div>

        </>
    );
};

export default Footer;