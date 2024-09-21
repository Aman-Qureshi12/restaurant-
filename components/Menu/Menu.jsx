"use client";
import "./Menu.css";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Menu = ({ wholeMenu }) => {
  const [filters, setFilters] = useState({
    pricing: "",
    dishCategory: "",
    dishType: "",
  });

  const handlePriceFilterChange = (e) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    console.log(filters);
  }, [filters]);

  return (
    <section className="section__padding app__menu-page-section">
      <h1 className="headtext__cormorant app__menu-page-heading">Our Menu</h1>

      <div className="app__filter-container">
        <div className="app__filter-section">
          <select
            name="dishType"
            onChange={handlePriceFilterChange}
            defaultValue=""
          >
            <option value="" disabled>
              Dish Type
            </option>
            <option value="Veg">Veg</option>
            <option value="Non-Veg">Non-Veg</option>
            <option value="all">All</option>
          </select>
        </div>

        <div className="app__filter-section">
          <select
            name="dishCategory"
            onChange={handlePriceFilterChange}
            defaultValue=""
          >
            <option value="" disabled>
              Dish Category
            </option>
            <option value="Gravy">Gravies</option>
            <option value="rice">Rices</option>
            <option value="Desert">Deserts</option>
            <option value="all">All</option>
          </select>
        </div>

        <div className="app__filter-section">
          <select
            name="pricing"
            onChange={handlePriceFilterChange}
            defaultValue=""
          >
            <option value="" disabled>
              Price
            </option>
            <option value="below">Below 300</option>
            <option value="above">Above 300</option>
            <option value="all">All</option>
          </select>
        </div>
      </div>

      {filters.dishCategory || filters.dishType || filters.pricing ? (
        <div className="app__dishes-section">
          <p className="p__cormorant app__dishes-heading">Gravies</p>
          <p className="p__cormorant flex__center">
            {filters.dishCategory === "Desert" && filters.dishType === "Non-Veg"
              ? "There are no Non-Veg deserts available"
              : ""}
          </p>
          <div className="app__gravies-container">
            {wholeMenu
              .filter(
                (menu) =>
                  // Dish Category Filter
                  (filters.dishCategory === "all" ||
                    filters.dishCategory === "" ||
                    menu.dishCategory === filters.dishCategory) &&
                  // Dish Type Filter
                  (filters.dishType === "all" ||
                    filters.dishType === "" ||
                    menu.dishType === filters.dishType) &&
                  // Price Filter
                  (filters.pricing === "all" ||
                    filters.pricing === "" ||
                    (filters.pricing === "below" && menu.price < 300) ||
                    (filters.pricing === "above" && menu.price >= 300))
              )
              .map((menu, index) => (
                <div key={index} className="app__dishes-card">
                  <div className="app__dishes-card-image">
                    <Image
                      src={menu.Image}
                      width={250}
                      height={250}
                      alt="Gravies"
                    />
                  </div>
                  <div className=" app__menu-page-card-content">
                    <p className="p__cormorant  app__dishes-title">
                      {" "}
                      {menu.dishName}
                    </p>
                    <p className="p__opensans app__dishes-description">
                      {menu.description.slice(0, 50)}...
                    </p>
                    <p className="p__opensans app__dishes-prices">
                      {" "}
                      $ {menu.price}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ) : (
        <div className="app__dishes-section">
          <p className="p__cormorant app__dishes-heading">Gravies</p>
          <div className="app__gravies-container">
            {wholeMenu.map((menu, index) => (
              <div key={index} className="app__dishes-card">
                <div className="app__dishes-card-image">
                  <Image
                    src={menu.Image}
                    width={250}
                    height={250}
                    alt="Gravies"
                  />
                </div>
                <div className="app__menu-page-card-content">
                  <p className="p__cormorant app__dishes-title">
                    {" "}
                    {menu.dishName}
                  </p>
                  <p className="p__opensans app__dishes-description">
                    {menu.description.slice(0, 50)}...
                  </p>
                  <p className="p__opensans app__dishes-prices">
                    {" "}
                    $ {menu.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
export default Menu;
