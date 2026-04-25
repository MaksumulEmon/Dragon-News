import Link from 'next/link';
import React from 'react';

const Leftsidebar = ({categories,activeId}) => {
    return (
        <div>
            <p className="text-2xl text-bold font-bold"> All Cateroies</p>
            <ul className="flex flex-col gap-3 mt-4">
                {
                    categories.news_category.map((category, category_id) => {
                        return <li key={category_id} className={`${activeId === category.category_id && "bg-slate-400 " } p-2 rounded-md font-bold text-center text-lg` }>
                        
                        <Link href={`/category/${category.category_id}`} className='block '>{category.category_name}</Link>
                         </li>
                    })
                }
            </ul>
        </div>
    );
};

export default Leftsidebar;