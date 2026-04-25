import Leftsidebar from '@/Components/shared/hoomepage/news/Leftsidebar';
import Rightsidebar from '@/Components/shared/hoomepage/news/Rightsidebar';
import React from 'react';


async function getCategories() {
    const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
    const data = await res.json();
    return data.data;
}


async function getNewsbyCategoryId(category_id) {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`);
    const data = await res.json();
    return data.data;
}




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
                    All News
                    <div className="space-y-3 ">

                        {news.length === 0 && <div className='text-center text-4xl font-bold py-30'>Empty........</div>}


                        {
                            news.map(n => {
                                return <div key={n._id} className="p-6 border-2  border-black">
                                    {n.title}
                                </div>
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