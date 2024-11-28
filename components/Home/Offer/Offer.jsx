"use client";
import "./Offer.css";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SuccessModal from "../../Modal/SuccessModal";
import { useState } from "react";

const Offer = () => {
  const [showModal, setShowModal] = useState(false);
  const Schema = z.object({
    Name: z.string().min(1, "Please Enter your Name"),
    Email: z.string().email("Invalid Email Address"),
  });

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Name: "",
      Email: "",
    },
    resolver: zodResolver(Schema),
  });

  const onSubmit = (data) => {
    console.log(watch("Name"));
    setShowModal(true);
    reset();
  };

  return (
    <section className="app__offer-section  section__padding app__bg">
      <div>
        {/* <p className="headtext__cormorant "></p> */}
        <p className="headtext__cormorant "> special 25% OFF </p>

        <p className="p__opensans app__offer-content">
          When you make an online reservation at Gericht Restaurant! Booking
          online saves you time and money while securing your table at our
          restaurant.
        </p>
      </div>
      <form className="app__offer-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="app__offer-input-container">
          <div>
            <input {...register("Name")} placeholder="Enter your Name" />
            {errors.Name && <p className="p__errors">{errors.Name.message}</p>}
          </div>
          <div>
            <input {...register("Email")} placeholder="Enter your Email" />
            {errors.Email && (
              <p className="p__errors">{errors.Email.message}</p>
            )}
          </div>
        </div>
        <button type="submit" className="custom__button app__offer-btn">
          Submit
        </button>
      </form>
      <p className="p__opensans app__offer-content">
        Plus, when you subscribe to our newsletter, you&apos;ll be the first to
        know about exciting offers and events. Don&apos;t miss out on future
        deals—stay connected and enjoy delicious dining experiences with added
        perks!
      </p>
      {showModal && (
        <SuccessModal
          message="Successfully submitted"
          show={showModal}
          onClose={() => setShowModal(false)}
        />
      )}
    </section>
  );
};

export default Offer;
