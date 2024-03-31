import Image from "next/image";
import Link from "next/link";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import { UserButton } from "@clerk/nextjs";
import { clients } from "@clerk/nextjs/api";



export default function Navbar()
{
    return(
        <div className="flex bg-slate-100 justify-around">
            <div className="flex my-5">
                <Image src="/Logo.png" alt="My Image" width={250} height={170} />
            </div>
            <div className="flex items-center text-2xl font-semibold sm:hidden">
                <ul className="flex gap-12">
                    <li><Link href="/"><h5>Home</h5></Link></li>
                    <li><Link href="./sites"><h3>Sites</h3></Link></li>
                    <li><Link href="./about-us"><h3>About-us</h3></Link></li>
                    <li><Link href="./services"><h3>Services</h3></Link></li>
                    <li><Link href="./contact"><h3>Contact</h3></Link></li>
                </ul>
            </div>
            <div className="mobile hidden  sm:flex sm:items-center">
                <select name="" id="">
                    <option value=""><Link href="/">Home</Link></option>
                    <option value=""><Link href="./sites">Sites</Link></option>
                    <option value=""><Link href="./about-us"><h3>About-us</h3></Link></option>
                    <option value=""><Link href="./services"><h3>Services</h3></Link></option>
                    <option value=""><Link href="./contact"><h3>Contact</h3></Link></option>
                    <option value="">Login</option>
                </select>
            </div>
            <div className="flex flex-row items-center gap-3 sm:hidden">
                <div><FontAwesomeIcon icon={faUser} style={{width:"25px"}}/></div>
                {/* <div>Sign-in</div> */}
                {/* <div>Sign-in</div>  */}
                 <UserButton afterSignOutUrl="sign-in" />
                <Link
                    href="/sign-in"
                >
                    Sign in
                </Link>
            </div>
        </div>
    )

}
