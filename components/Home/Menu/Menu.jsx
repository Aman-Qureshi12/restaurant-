"use client";
import "./Menu.css";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import SkeletonImage from "../../skeletonImage/skeletonImage";

const Menu = ({ gravy, rice, desert }) => {
  const [menuTab, setMenuTab] = useState({
    gravy: true,
    rice: false,
    dessert: false,
  });

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const current = scrollRef.current;
    if (!current) return;

    if (direction === "left") {
      current.scrollLeft -= 300; // Scroll left by 300px
    } else {
      current.scrollLeft += 300; // Scroll right by 300px
    }
  };

  const handleGravy = () => {
    setMenuTab({ rice: false, gravy: true, dessert: false });
  };

  const handleRice = () => {
    setMenuTab({ rice: true, gravy: false, dessert: false });
  };

  const handleDessert = () => {
    setMenuTab({ rice: false, gravy: false, dessert: true });
  };

  return (
    <section className="app__menu-section section__padding">
      <h1 className="headtext__cormorant app__menu-section-heading">
        Our Menu
      </h1>
      <div className="app__menu-tabs flex__center">
        <p
          className={`p__opensans ${
            menuTab.rice ? "dishActive" : "dishActiveNone"
          }`}
          onClick={handleRice}
        >
          Rice
        </p>
        <p
          className={`p__opensans ${
            menuTab.gravy ? "dishActive" : "dishActiveNone"
          }`}
          onClick={handleGravy}
        >
          Gravy
        </p>
        <p
          className={`p__opensans ${
            menuTab.dessert ? "dishActive" : "dishActiveNone"
          }`}
          onClick={handleDessert}
        >
          Dessert
        </p>
      </div>
      <div className="app__home-menu-section-container">
        {menuTab.gravy && (
          <div className="app__home-menu-section" ref={scrollRef}>
            {gravy.map((gravy, index) => (
              <div className="app__home-menu-card" key={index}>
                <div className="app__home-menu-image">
                  <SkeletonImage
                    src={gravy.Image}
                    alt={gravy.dishName}
                    width={250}
                    height={250}
                  />
                  {/* <Image
                    src={gravy.Image}
                    alt="Dishes"
                    width={250}
                    height={250}
                  /> */}
                </div>
                <div className="app__home-menu-content">
                  <p className="p__cormorant"> {gravy.dishName}</p>
                  <p className="p__opensans">
                    {gravy.description.slice(0, 45)}...
                  </p>
                  <p className="p__opensans">$ {gravy.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        {menuTab.rice && (
          <div className="app__home-menu-section" ref={scrollRef}>
            {rice.map((rice, index) => (
              <div className="app__home-menu-card" key={index}>
                <div className="app__home-menu-image">
                  <SkeletonImage
                    src={rice.Image}
                    alt={rice.dishName}
                    width={250}
                    height={250}
                  />
                  {/* <Image
                    src={rice.Image}
                    alt="Dishes"
                    width={250}
                    height={250}
                  /> */}
                </div>
                <div className="app__home-menu-content">
                  <p className="p__cormorant"> {rice.dishName}</p>
                  <p className="p__opensans">
                    {rice.description.slice(0, 45)}...
                  </p>
                  <p className="p__opensans">$ {rice.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        {menuTab.dessert && (
          <div className="app__home-menu-section" ref={scrollRef}>
            {desert.map((desert, index) => (
              <div className="app__home-menu-card" key={index}>
                <div className="app__home-menu-image">
                  <SkeletonImage
                    src={desert.Image}
                    alt={desert.dishName}
                    width={250}
                    height={250}
                  />
                  {/* <Image
                    src={desert.Image}
                    alt="Dishes"
                    width={250}
                    height={250}
                  /> */}
                </div>
                <div className="app__home-menu-content">
                  <p className="p__cormorant"> {desert.dishName}</p>
                  <p className="p__opensans">
                    {desert.description.slice(0, 40)}...
                  </p>
                  <p className="p__opensans">$ {desert.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </section>
  );
};

export default Menu;
