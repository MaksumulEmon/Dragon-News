import Leftsidebar from '@/Components/shared/hoomepage/news/Leftsidebar';
import Newscard from '@/Components/shared/hoomepage/news/Newscard';
import Rightsidebar from '@/Components/shared/hoomepage/news/Rightsidebar';
import { getCategories, getNewsbyCategoryId } from '@/lib/data';
import React from 'react';





const NewsCategory = async ({ params }) => {
    const { id } = await params;
    console.log(id, " parames res");


    const categories = await getCategories();
    const news = await getNewsbyCategoryId(id);
    console.log(news, "news");



    return (
        <div>

            <div className="grid grid-cols-12 gap-4 my-20">

                <div className="col-span-3">
                    <Leftsidebar categories={categories} activeId={id} />

                </div>


                <div className=" col-span-6">
                    News By category
                    <div className="space-y-3 ">

                        {news.length === 0 && <div className='text-center text-4xl font-bold py-30'>Empty........</div>}


                        {
                            news.map(n => {
                                return (
                                    <Newscard key={n._id} news={n}>

                                    </Newscard>
                                )


                            })
                        }
                    </div>
                </div>


                <div className=" col-span-3">
                    <Rightsidebar />
                </div>



            </div>
        </div>
    );
};

export default NewsCategory;