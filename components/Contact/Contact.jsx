"use client";
import "./Contact.css";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MdCall, MdEmail, MdLocationCity } from "react-icons/md";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

const Contact = () => {
  const schema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid Email Address "),
    message: z.string().min(1, "Please write your message"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    const formData = {
      name: data.name, // `data.name` is directly passed by `handleSubmit`
      email: data.email,
      message: data.message,
    };

    // Store formData in localStorage
    localStorage.setItem("formData", JSON.stringify(formData));

    console.log(formData);
  };

  return (
    <section className="app__contact-section section__padding">
      <div className="app__contact-inputs">
        <h1 className="headtext__cormorant">Contact US </h1>
        <form className="app__form" onSubmit={handleSubmit(onSubmit)}>
          <div className="app__contact-input">
            <label>Name</label>
            <input
              {...register("name")}
              type="text"
              placeholder="Enter your Name"
            />
            {errors.name && <p className="p__errors">{errors.name.message}</p>}
          </div>
          <div className="app__contact-input">
            <label>Email</label>
            <input
              {...register("email")}
              type="email"
              placeholder="Enter your Email"
            />
            {errors.email && (
              <p className="p__errors">{errors.email.message}</p>
            )}
          </div>
          <div className="app__contact-textarea">
            <label>Message</label>
            <textarea
              {...register("message")}
              rows={6}
              type="text"
              placeholder="Enter your Message"
            />
            {errors.message && (
              <p className="p__errors">{errors.message.message}</p>
            )}
          </div>
          <button type="submit" className="custom__button">
            Submit
          </button>
        </form>
      </div>
      <div className="app__contact-info-container">
        <div className="app__contact-infoDetails">
          <h1 className="app__contact-info-heading ">Contact Info</h1>
          <div className="app__contact-info-email app__contact-info">
            <h1>Email</h1>
            <p className="p__darkOpenSans app__email-id">
              <MdEmail /> info@gerichtrestaurant.com
            </p>
          </div>

          <div className="app__contact-info-number app__contact-info">
            <h1>Contact Number</h1>
            <div className="app__contact-number">
              <p className="p__darkOpenSans">
                <MdCall /> +1 212-344-1230
              </p>
              <p className="p__darkOpenSans">
                <MdCall />
                +1 212-555-1230
              </p>
            </div>
          </div>

          <div className="app__contact-info-location app__contact-info">
            <h1>Location</h1>
            <p className="p__darkOpenSans app__contact-address">
              <MdLocationCity /> 9 W 53rd St, New York, NY 10019, USA
            </p>
          </div>

          <div className="app__contact-info-hours app__contact-info">
            <h1>Opening Hours</h1>
            <div className="app__opening-hours">
              <p className="p__darkOpenSans">
                Monday-Friday: <br /> 08:00 Am -12:00 Am
              </p>
              <p className="p__darkOpenSans">
                Saturday-Sunday: <br /> 07:00 Am -11:00 Pm
              </p>
            </div>
          </div>
        </div>
        <div className="app__social-links">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
    </section>
  );
};

export default Contact;
