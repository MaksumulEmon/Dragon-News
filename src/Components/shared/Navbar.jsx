import Link from 'next/link';
import React from 'react';
import useAvater from "@/assets/user.png"
import Image from 'next/image';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>

            <div>

            </div>
            <ul className='flex justify-between gap-4'>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/'}>About</Link></li>
                <li><Link href={'/'}>Carrer</Link></li>
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