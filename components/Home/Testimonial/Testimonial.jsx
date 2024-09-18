"use client";
import "./Testimonial.css";
import Image from "next/image";
import React, { useState } from "react";
import Quote from "../../../public/Chef/quote.png";
import Sam from "../../../public/reviewer/Sam.png";
import John from "../../../public/reviewer/Alex.png";
import Emily from "../../../public/reviewer/Sarah.png";
import Sophie from "../../../public/reviewer/Maria.png";
import Michael from "../../../public/reviewer/David.png";

const Testimonial = () => {
  const [reviewers, setReviewers] = useState({
    reviewerId: 3,
  });
  const reviews = [
    {
      id: 1,
      img: "Image",
      review:
        "The food at Gericht is absolutely fantastic! The gravy rice is bursting with flavor, and the desserts are a sweet delight. The ambiance and service make it a place I can’t wait to visit again!",
      name: "John D ",
    },

    {
      id: 2,
      img: "Image",
      review:
        "I had an amazing dining experience at Gericht. The staff were welcoming, and the dishes were prepared to perfection. Highly recommend their gravy rice and signature desserts!",
      name: "Emily R",
    },

    {
      id: 3,
      img: "Image",
      review:
        "Gericht exceeded my expectations with its exceptional food quality and cozy atmosphere. The gravy rice was a standout, and the desserts left a lasting impression. A must-visit for food lovers!",
      name: "Michael S",
    },

    {
      id: 4,
      img: "Image",
      review:
        "From the moment I walked in, Gericht felt warm and inviting. The gravy rice was delicious, and the desserts were to die for! I’ll definitely be back for more of their specialties.",
      name: "Sophie L",
    },

    {
      id: 5,
      img: "Image",
      review:
        "Gericht offers a truly memorable dining experience. The food is top-notch, especially the gravy rice, and their desserts are the perfect way to end the meal. Great service and ambiance too!",
      name: "Sam",
    },
  ];

  const handleReviews = () => {
    setReviewers({ reviewerId: 1 });
  };

  return (
    <section className="app__testimonial-section section__padding">
      <h1 className="headtext__cormorant app__testimonial-heading">
        Testimonials
      </h1>
      <div className="app__review-container">
        {reviews
          .filter((review) => review.id === reviewers.reviewerId)
          .map((review, index) => (
            <div className="app__review-card" key={index}>
              <div className="app__quote-image">
                <Image src={Quote} alt="quote" />
              </div>
              <p className="p__opensans app__testimonial-para">
                {review.review}
              </p>
              <p className="p__opensans">{review.name}</p>
            </div>
          ))}
        <div className="flex__center app__review-images p__opensans">
          <div
            className={`${
              reviewers.reviewerId === 1 ? "app__reviewer-active" : ""
            }`}
          >
            <Image src={John} alt="John" onClick={handleReviews} />
          </div>

          <div
            className={`${
              reviewers.reviewerId === 2 ? "app__reviewer-active" : ""
            }`}
          >
            <Image
              src={Emily}
              alt="Emily"
              onClick={() => setReviewers({ reviewerId: 2 })}
            />
          </div>

          <div
            className={`${
              reviewers.reviewerId === 3 ? "app__reviewer-active" : ""
            }`}
          >
            <Image
              src={Michael}
              alt="Michael"
              onClick={() => setReviewers({ reviewerId: 3 })}
            />
          </div>
          <div
            className={`${
              reviewers.reviewerId === 4 ? "app__reviewer-active" : ""
            }`}
          >
            <Image
              src={Sophie}
              alt="Sophie"
              onClick={() => setReviewers({ reviewerId: 4 })}
            />
          </div>

          <div
            className={`${
              reviewers.reviewerId === 5 ? "app__reviewer-active" : ""
            }`}
          >
            <Image
              src={Sam}
              alt="sam"
              onClick={() => setReviewers({ reviewerId: 5 })}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
