import BreakingNew from '@/Components/shared/BreakingNew';
import Header from '@/Components/shared/Header';
import Navbar from '@/Components/shared/Navbar';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const Mainlayout = ({ children }) => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Header />
            <BreakingNew />
            <Navbar />
            {children}
            <ToastContainer />
        </div>
    );
};

export default Mainlayout;