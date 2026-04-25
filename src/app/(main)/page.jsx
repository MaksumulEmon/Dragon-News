import Leftsidebar from "@/Components/shared/hoomepage/news/Leftsidebar";
import Rightsidebar from "@/Components/shared/hoomepage/news/Rightsidebar";
import Image from "next/image";


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




export default async function Home() {
  const categories = await getCategories();
  console.log(categories.news_category)

  const news = await getNewsbyCategoryId("05");
  console.log(news, "news");


  return (

    <div className="grid grid-cols-12 gap-4 my-20">

      <div className="col-span-3">
        <Leftsidebar categories={categories} activeId={null} />

      </div>


      <div className=" col-span-6">
        All News
        <div className="space-y-3 ">
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
  );
}
