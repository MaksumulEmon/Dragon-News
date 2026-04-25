import Leftsidebar from "@/Components/shared/hoomepage/news/Leftsidebar";
import Rightsidebar from "@/Components/shared/hoomepage/news/Rightsidebar";
import Image from "next/image";

async function getCategories() {
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data = await res.json();
  return data.data;
}

export default async function Home() {
  const categories = await getCategories();
  console.log(categories.news_category)
  return (

    <div className="grid grid-cols-12 gap-4 my-20">

      <div className="col-span-3">
        <Leftsidebar categories={categories}  activeId={null}/>

      </div>


      <div className="bg-green-700 col-span-6">
        gfhgdfh
      </div>


      <div className=" col-span-3">
        <Rightsidebar/>
      </div>



    </div>
  );
}
