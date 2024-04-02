import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot, faAddressBook, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons';
// import { Link } from 'lucide-react';

export default function footer()
{
    return(
        <div className="flex justify-center bg-footer-black gap-10 text-white px-20 py-10 sm:flex-col sm:p-4">
            <div className="w-1/4 flex flex-col gap-6 sm:w-full">
                <h1 className="font-bold">About</h1>
                <p className="text-light-gray font-medium leading-7">
                    Welcome to Rathri Constructions, where we turn dreams into addresses and visions into realities.
                    Established in 2020, Rathri Constructions has swiftly emerged as a prominent player in the real estate industry.
                    With a commitment to excellence and a passion for innovation, we have successfully sold over 100 properties,
                    ranging from luxurious houses to contemporary flats, catering to the diverse needs and preferences of our valued clients.
                </p>
            </div>
            <div className="w-1/4 gap-6  flex flex-col ml-20 sm:ml-0 sm:w-full">
                <h1 className="font-bold">Services</h1>
                <ul className="flex  flex-col gap-3 text-light-gray">
                    <li className='hover:text-green-500'>About-Us</li>
                    <li className='hover:text-green-500'>Listing</li>
                    <li className='hover:text-green-500'>How it Works</li>
                    <li className='hover:text-green-500'>Our Services</li>
                    <li className='hover:text-green-500'>Our Blog</li>
                    <li className='hover:text-green-500'>Contact-Us</li>
                </ul>
            </div>
            <div className=" w-1/4 gap-6 flex flex-col sm:w-full">
               <h1 className="font-bold">Top News</h1>
                <div className='flex flex-col gap-6'>
                    <div className='flex gap-4'>
                        <Image src="/loan4.jpg" width={100} height={100} alt='not' />
                        <p className="text-light-gray">Live from now,<br/> but pay later</p>
                    </div>
                    <div className='flex gap-4'>
                        <Image src="/sites_images/balcony3.jpg" width={100} height={100} alt='not' />
                        <p className="text-light-gray">Have a beautiful<br/> Sunrise and Sunset<br/> in the balcony</p>
                    </div>
                </div>
            </div>
            <div className="w-1/4 flex flex-col gap-6 sm:w-full">
                <h1 className="font-bold">Contact</h1>
                <p className="flex gap-3 text-light-gray">
                    <div> <FontAwesomeIcon icon={faLocationDot} style={{width:"20px", color:"red"}} /> </div>
                    <div>Flat No 5-83 Sai dharani colony Nagaram Secunderabad</div>    
                </p>
                <p className="flex gap-3 text-light-gray">
                    <FontAwesomeIcon icon={faAddressBook} style={{width:"23px", color:"rgba(24, 119, 242, 1)"}} />
                    {/* +91 9876543201 */}
                    <Link href={`tel:${9948843108}`}>9948843108</Link>
                </p>
                <p className="flex gap-3 text-light-gray ">
                    <FontAwesomeIcon icon={faEnvelope} style={{width:"23px", color:"#d44638"}} />
                    {/* <div className='flex flex-wrap'><p>rathriconstructions@gmail.com</p></div> */}
                    <Link href="mailto:rathriconstructions@gmail.com">rathriconstructions@gmail.com</Link>
                </p>
                <p className="flex gap-3 text-light-gray ">
                    <FontAwesomeIcon icon={faFacebook} style={{width:"23px", color:"rgba(24, 119, 242, 1)"}} />
                    <Link href='https://www.facebook.com/rathirconstructions'>Facebook</Link>
                </p>
                <p className="flex gap-3 text-light-gray ">
                    <FontAwesomeIcon icon={faInstagram} style={{width:"23px", color:"rgb(228, 64, 95)"}} />
                    <Link href='https://www.instagram.com/rathri_constructions'>Instagram</Link>
                </p>
                <p className="flex gap-3 text-light-gray ">
                    <FontAwesomeIcon icon={faYoutube} style={{width:"23px", color:"#c4302b"}} />
                    <Link href='https://www.youtube.com/@RathriConstructions'>Youtube</Link>
                </p>
            </div>
        </div>
    );
}
