import "./History.css";
import Image from "next/image";
import Ambiance2 from "../../../public/restaurant/Ambiance 2.webp";

const History = () => {
  return (
    <section className="app__history-section section__padding">
      <div className="app__history-container">
        <h1 className="headtext__cormorant">History</h1>
        <p className="p__opensans app__history-para">
          Gericht Restaurant, established in 1998, began as a small family-owned
          eatery in the heart of Gourmet City. Known for its dedication to
          authentic, flavorful dishes crafted from the freshest ingredients, it
          quickly gained a reputation for excellence. Over the years, Gericht
          has evolved into a beloved dining destination, blending tradition with
          innovation while maintaining its warm, welcoming atmosphere.
        </p>
      </div>
      <div className="flex__center app__history-image-container">
        <Image placeholder="blur" src={Ambiance2} alt="Ambiance" />
      </div>
    </section>
  );
};

export default History;
