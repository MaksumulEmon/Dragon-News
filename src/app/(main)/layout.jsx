import BreakingNew from '@/Components/shared/BreakingNew';
import Header from '@/Components/shared/Header';
import Navbar from '@/Components/shared/Navbar';
import React from 'react';

const Mainlayout = ({ children }) => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Header />
            <BreakingNew />
            <Navbar />
            {children}
        </div>
    );
};

export default Mainlayout;