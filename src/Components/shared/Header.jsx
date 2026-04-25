import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import { compareAsc, format } from "date-fns";


const Header = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='text-center space-y-2 mt-4'>
                <Image src={logo} width={300} alt="logo" className='mx-auto'/>
              <p>Journalism Without Fear or Favour</p>
              <p>{format(new Date(), "EEEE, MMM dd, yyyy ")}</p>
            </div>
        </div>
    );
};

export default Header;