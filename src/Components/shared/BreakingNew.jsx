import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNew = () => {

    const news = [
        {
            id: "1",
            title: "Breaking News: Major Event Unfolds in the City",
        },
        {
            id: "2",
            title: "Breaking News: New Policy Announced by the Government",
        },
        {
            id: "3",
            title: "Breaking News: Sports Team Wins Championship",
        },
    ];



    return (
        <div className='bg-[#f3f3f3] p-5 flex gap-3'>
            <button className='bg-red-500 text-white px-4 py-2'>Latest</button>
            <Marquee pauseOnHover={true} speed={100}>
              {news.map((n) =>{
              return  <span key={n.id} className='flex gap-3'>{n.title}</span>
              })}
            </Marquee>
        </div>
    );
};

export default BreakingNew;