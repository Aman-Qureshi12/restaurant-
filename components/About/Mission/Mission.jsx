import "./Mission.css";
import Image from "next/image";
import Ambiance1 from "../../../public/restaurant/Ambiance1.jpeg";

const Mission = () => {
  return (
    <section className="app__mission-section section__padding">
      <h1 className="headtext__cormorant ">Our Mission</h1>
      <div className="app__mission-container">
        <p className="p__opensans app__mission-para">
          The mission of Gericht Restaurant is to provide an exceptional dining
          experience by offering high-quality, flavorful dishes made from the
          freshest ingredients. With a commitment to culinary excellence and
          customer satisfaction, Gericht aims to create a warm, inviting
          atmosphere where guests can enjoy both traditional and innovative
          cuisine. At its core, Gericht strives to celebrate food as a way to
          bring people together.
        </p>
        <div className="flex__center app__mission-image-container">
          <Image src={Ambiance1} alt="Ambiance" />
        </div>
      </div>
    </section>
  );
};

export default Mission;
