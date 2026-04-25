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
       <p className="text-2xl text-bold font-bold"> All Cateroies</p>
        <ul className="flex flex-col gap-3 mt-4">
          {
            categories.news_category.map((category, ind) => {
              return <li key={ind} className="bg-slate-100 p-2 rounded-md font-bold text-center text-lg">{category.category_name} </li>
            })
          }
        </ul>

      </div>


      <div className="bg-green-700 col-span-6">
        gfhgdfh
      </div>


      <div className="bg-red-800 col-span-3">
        fghgfh
      </div>



    </div>
  );
}
