import React from 'react';

const loadingpage = () => {
    return (
        <div>
            <div className="flex h-[85vh] items-center justify-center">
                Global loading
                <span className="loading loading-dots loading-xl"></span>
            </div>
        </div>
    );
};

export default loadingpage;