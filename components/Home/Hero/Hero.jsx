import "./Hero.css";
import Image from "next/image";
import welcome from "../../../public/restaurant/welcome.png";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="app__hero-section  section__padding">
      <div className="app__hero-info">
        <h1 className="app__info-heading">The key to Fine Dining </h1>
        <p
          className="p__opensans app__hero-caption"
          style={{ margin: "2rem 0" }}
        >
          Sit tellus loborits sed senectus vivamus molestie Condimentum volutpat
          morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet
          tellus
        </p>
        <Link href="/menu">
          <button type="button" className="custom__button">
            Explore Menu
          </button>
        </Link>
      </div>
      <div className="app__hero-img">
        <Image src={welcome} alt="welcome" />
      </div>
    </section>
  );
};

export default Hero;
