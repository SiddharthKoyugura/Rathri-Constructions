import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot, faAddressBook, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer()
{
    return(
        <div className="flex justify-center bg-footer-black gap-16 text-white p-20 sm:flex-col sm:p-3">
            <div className=" flex flex-col gap-6">
                <h1 className="font-bold">About</h1>
                <p className="text-light-gray font-medium leading-7">
                    Lorem, ipsum dolor sit amet consectetur<br/> adipisicing elit Culpa explicabo vitae voluptates<br/>
                    natus sed minus dicta fugit sint reiciendis.<br/> Sint eligendi rerum ut numquam corrupti alias <br/>
                    corporis ipsa facere? Exercitationem!
                </p>
            </div>
            <div className="w-52 gap-6  flex flex-col">
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
            <div className="gap-6 flex flex-col">
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
            <div className="flex flex-col gap-6">
                <h1 className="font-bold">Contact</h1>
                <p className="flex gap-3 text-light-gray">
                    <div> <FontAwesomeIcon icon={faLocationDot} style={{width:"20px", color:"green"}} /> </div>
                    <div>Flat No-20, Nagaram, ECIL, Hyderabad</div>    
                </p>
                <p className="flex gap-1 text-light-gray">
                    <FontAwesomeIcon icon={faAddressBook} style={{width:"20px", color:"green"}} />
                    +91 9876543201
                </p>
                <p className="flex gap-2 text-light-gray flex-shrink">
                    <FontAwesomeIcon icon={faEnvelope} style={{width:"20px", color:"green"}} />
                    rathriconstructions@gmail.com
                </p>
            </div>
        </div>
    );
}
