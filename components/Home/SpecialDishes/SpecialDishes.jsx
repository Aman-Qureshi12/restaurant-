import React from "react";
import "./SpecialDishes.css";
import Image from "next/image";
import Gravy from "../../../public/restaurant/ButterChicken.jpeg";
import Biryani from "../../../public/restaurant/ChickenDumBiryani.jpeg";
import Desert from "../../../public/restaurant/ChocolateLavaCake.jpeg";

const SpecialDishes = () => {
  const specialDish = [
    {
      id: 1,
      Image: Biryani,
      dishName: "Chicken Dum Biryani",
      description:
        "A flavorful rice dish with chicken cooked in a sealed pot (dum), layered with aromatic spices and saffron.",
    },

    {
      id: 2,
      Image: Gravy,
      dishName: "Butter Chicken",
      description:
        "Tender pieces of chicken cooked in a creamy tomato-based gravy, flavored with butter and spices.",
    },
    {
      id: 3,
      Image: Desert,
      dishName: "Chocolate Lava Cake",
      description: " A rich chocolate cake with a molten chocolate center.",
    },
  ];
  return (
    <section className="app__specialDish-section section__padding">
      <h1 className="app__specialDishes-heading headtext__cormorant">
        Our special dishes{" "}
      </h1>
      <div>
        <p className="p__opensans app__specialDishes-para">
          At Gericht Restaurant, our special dishes are crafted with passion and
          care, offering a culinary experience like no other. Our specialties
          include rich, flavorful gravy rice, perfectly balanced with spices and
          savory goodness. To top it off, indulge in our exquisite selection of
          desserts, the perfect sweet ending to a delightful meal.
        </p>
        <div className="app__dishesCard-container">
          {specialDish.map((dishes, index) => {
            return (
              <div key={index} className="app__special-dishes-card">
                <div className="app__dishes-card-image">
                  <Image src={dishes.Image} alt="dishes" />
                </div>
                <div className="app__dishes-card-content">
                  <p className="p__cormorant"> {dishes.dishName}</p>
                  <p className="p__opensans"> {dishes.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpecialDishes;
