import "./Hero.css";
import Link from "next/link";
import Image from "next/image";

import welcome from "../../../public/restaurant/welcome.webp";

const Hero = () => {
  return (
    <section className="app__hero-section  section__padding">
      <div className="app__hero-info">
        <h1 className="app__info-heading">The key to Fine Dining </h1>
        <p
          className="p__opensans app__hero-caption"
          style={{ margin: "2rem 0" }}
        >
          Indulge in every bite, a unique experience. Creative dishes and
          authentic flavors await you in a welcoming atmosphere.
        </p>
        <Link href="/menu">
          <button
            type="button"
            className="custom__button app__hero-section-button"
          >
            Explore Menu
          </button>
        </Link>
      </div>
      <div className="app__hero-img">
        <Image placeholder="blur" priority src={welcome} alt="welcome" />
      </div>
    </section>
  );
};

export default Hero;
