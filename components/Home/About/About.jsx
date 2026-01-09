import "./About.css";
import Image from "next/image";
import Ambiance1 from "../../../public/restaurant/Ambiance1.webp";
import Ambiance2 from "../../../public/restaurant/Ambiance 2.webp";

const About = () => {
  return (
    <section className="app__about-section section__padding ">
      <h1 className="headtext__cormorant app__about-heading">About Us</h1>
      <div className="app__about-info">
        <p className="p__opensans app__about-paras">
          At Gericht Restaurant, we take pride in serving exquisite dishes
          crafted from the finest, freshest ingredients. Since our founding in
          1998, we have been dedicated to blending tradition with innovation,
          offering a unique dining experience that celebrates the richness of
          culinary art.
        </p>
      </div>
      <div className="app__about-images">
        <Image placeholder="blur" src={Ambiance1} alt="Ambiance" />
        <Image placeholder="blur" src={Ambiance2} alt="Ambiance" />
      </div>
      <div className="app__about-info ">
        <p className="p__opensans app__about-paras">
          Our warm, inviting atmosphere, paired with our passion for delivering
          top-notch service, ensures every visit is memorable. Whether
          you&apos;re here for a casual meal or a special occasion, Gericht is
          where delicious food and unforgettable moments come together.
        </p>
      </div>
    </section>
  );
};

export default About;
