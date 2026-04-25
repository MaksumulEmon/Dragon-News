import { redirect } from "next/navigation";




const default_category_id = "01"

const Home = async () => {
  redirect(`/category/${default_category_id}`);
  red
};
export default Home;