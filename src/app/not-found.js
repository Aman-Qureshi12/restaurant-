import Image from "next/image";
import React from "react";
import ErrorImage from "../../public/Error.webp";

const NotFound = () => {
  return (
    <section className=" app__not-found-page">
      <div className="app__not-found-page-image">
        <Image src={ErrorImage} width={700} height={400} alt="Error" />
      </div>
      {/* <h1 className="app__not-found-page-heading headtext__cormorant"> 404</h1> */}
      <p className="p__opensans app__not-found-page-para ">
        Oops! Something’s missing, just like your meal. Let’s help you find your
        way back to the menu!
      </p>
      <button className="custom__button">Back to Home</button>
    </section>
  );
};

export default NotFound;
