import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Rightsidebar = () => {
    return (
        <div className='space-y-2'>
            <h2>Login with </h2>
            <div className='flex gap-2 items-center '>

                <button className='btn'>  <FaGoogle />  Login with Google  </button>
            </div>
            <div className='flex gap-2 items-center'>

                <buton className="btn"><FaGithub /> Login with Github</buton>
            </div>

        </div>
    );
};

export default Rightsidebar;