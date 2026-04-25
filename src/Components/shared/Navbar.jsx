import Link from 'next/link';
import React from 'react';
import useAvater from "@/assets/user.png"
import Image from 'next/image';
import Navlink from './Navlink';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center pt-5'>

            <div>

            </div>
            <ul className='flex justify-between gap-4 text-gray-700'>
                <li><Navlink href={"/"}>Home</Navlink></li>
                <li><Navlink href={"/about"}>About</Navlink></li>
                <li><Navlink href={"/carrer"}>Carrer</Navlink></li>
            </ul>

            <div className='flex items-center gap-3'>
                <Image src={useAvater} width={40} height={40} alt="user Avater" />
                <button className='bg-[#403f3f] px-3 py-2 text-white'>
                    <Link href={'/login'}>Login</Link>
                </button>
            </div>
        </div>
    );
};

export default Navbar;