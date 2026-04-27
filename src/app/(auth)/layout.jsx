import Navbar from '@/Components/shared/Navbar';
import React from 'react';
import { montserrat } from '../layout';
import { ToastContainer } from 'react-toastify';

const Authlayout = ({children}) => {
    return (
        <div className={`${montserrat.className}`}>
            <Navbar/>
            {children}
             <ToastContainer />
        </div>
    );
};

export default Authlayout;