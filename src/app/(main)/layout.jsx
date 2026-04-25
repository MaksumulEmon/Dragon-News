import Header from '@/Components/shared/Header';
import Navbar from '@/Components/shared/Navbar';
import React from 'react';

const Mainlayout = ({children}) => {
    return (
        <div>
            <Header />
            <Navbar />
            {children}
        </div>
    );
};

export default Mainlayout;