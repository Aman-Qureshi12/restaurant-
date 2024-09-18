import Hero from "../../components/Home/Hero/Hero";
import Menu from "../../components/Home/Menu/Menu";
import About from "../../components/Home/About/About";
import Video from "../../components/Home/Video/Video";
import Offer from "../../components/Home/Offer/Offer";
import { getGravy, getRice, getDessert } from "../../lib/data-service";
import Testimonial from "../../components/Home/Testimonial/Testimonial";
import SpecialDishes from "../../components/Home/SpecialDishes/SpecialDishes";

export default async function Home() {
  const rice = await getRice();
  const gravy = await getGravy();
  const desert = await getDessert();
  return (
    <main className="app__pages-large-screen">
      <Hero />
      <Menu gravy={gravy} rice={rice} desert={desert} />
      <About />
      <SpecialDishes />
      <Video />
      <Testimonial />
      <Offer />
    </main>
  );
}
