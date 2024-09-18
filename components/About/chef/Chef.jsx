import "./Chef.css";
import Image from "next/image";
import Chef from "../../../public/Chef/chef.png";
import Sign from "../../../public/Chef/sign.png";
import Quote from "../../../public/Chef/quote.png";

const Chefs = () => (
  <div className="app__chef-section section__padding">
    <h1 className="headtext__cormorant app__chef-mainHeading">
      Chef&apos;s word
    </h1>
    <div className="app__chef-container">
      <div className=" app__chef-image-container img ">
        <Image src={Chef} alt="chef" width={500} height={600} />
      </div>

      <div style={{ marginTop: "1rem" }}>
        <h1 className="p__cormorant app__chef-heading">What we believe in</h1>
        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <Image src={Quote} alt="chef" width={400} height={400} />

            <p className="p__opensans">
              Our dishes are crafted with passion, blending tradition and
              creativity in every bite. At Gericht, we believe food should not
              only satisfy but also inspire
            </p>
          </div>
        </div>

        <div className="app__chef-sign">
          <p>Kevin Luo</p>
          <p className="p__opensans">Chef & Founder </p>
          <Image src={Sign} alt="chef" width={100} height={100} />
        </div>
      </div>
    </div>
  </div>
);

export default Chefs;
