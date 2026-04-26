'use client'

import Link from 'next/link';
import React from 'react';
import useAvater from "@/assets/user.png"
import Image from 'next/image';
import Navlink from './Navlink';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {

    const { data: session ,isPending} = authClient.useSession();
    const user = session?.user;

    console.log(user, isPending, "User")

    return (
        <div className='flex justify-between items-center pt-5'>

            <div>

            </div>

            <ul className='flex justify-between gap-4 text-gray-700'>
                <li><Navlink href={"/"}>Home</Navlink></li>
                <li><Navlink href={"/about"}>About</Navlink></li>
                <li><Navlink href={"/carrer"}>Carrer</Navlink></li>
            </ul>

            {isPending ? <span className="loading loading-spinner text-neutral"></span> : user ? (
                <div className='flex items-center gap-3'>
                    <h2>Hello {user.name}</h2>
                    <Image src={user.image || useAvater} width={50} height={50} alt="user Avater" className='rounded-full' />
                    <button onClick={async() => await authClient.signOut()} className='bg-[#403f3f] px-3 py-2 text-white'>Logout</button>
                </div>
            ) : (

                <button className='bg-[#403f3f] px-3 py-2 text-white'>
                    <Link href={'/login'}>Login</Link>
                </button>
            )}

        </div>
    );
};

export default Navbar;