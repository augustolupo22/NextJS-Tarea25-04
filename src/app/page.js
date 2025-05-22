import HomeContainer from "@/app/Component/HomeContainer";
import Navbar from "@/app/Component/Navbar";
import RecipeGrid from "@/app/Component/RecipeGrid"
import Footer from "@/app/Component/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeContainer/>
      <RecipeGrid />
      <Footer />
    </div>
  );
}
