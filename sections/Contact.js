import { Title, TitleSm } from "@/components/common/Title";
import React, { useState } from "react";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BiUserCircle } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { FiHeadphones, FiHelpCircle } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_business: "",
    user_number: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.user_name.trim()) {
      newErrors.user_name = "Name is required";
    }
    if (!formData.user_email.trim()) {
      newErrors.user_email = "Email is required";
    }
    if (!formData.user_business.trim()) {
      newErrors.user_business = "Business is required";
    }
    if (!formData.user_number.trim()) {
      newErrors.user_number = "Contact number is required";
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        await emailjs.sendForm(
          "service_rdhdi9c",
          "template_jfdc4rm",
          e.target,
          {
            publicKey: "8F05lUWKhe9R3qzWn",
          }
        );
        Swal.fire({
          text: "Your Response Has Been Submitted Our Team Will Contact You As Soon As Possible.",
          icon: "success",
          color: "#fff",
          background: "#080e10",
          backdrop: `filter: blur(10px);
        -webkit-filter: blur(10px)`,
        });

        // Clear form data
        setFormData({
          user_name: "",
          user_email: "",
          user_number: "",
          user_business: "",
          message: "",
        });
        // Clear errors
        setErrors({});
      } catch (error) {
        console.error("Error sending email:", error);
        Swal.fire({
          text: "Something went wrong! Please try again later.",
          icon: "error",
          color: "#fff",
          background: "#080e10",
          backdrop: `filter: blur(10px);
            -webkit-filter: blur(10px)`,
        });
      }
    }
  };

  return (
    <>
      <section className="contact bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="CONTACT" /> <br />
            <br />
            <Title title="Let's start right now!" className="title-bg" />
          </div>
          <div className="content py flex1">
            <div className="left w-30">
              <div className="contact-deatils">
                <div className="box">
                  <FiHeadphones size={30} className="icons" />
                  <Link target="_blank" href="tel:+91-8920538806">
                    <h3>+91 8920538806</h3>
                  </Link>
                  <span>Call us: Mon - Sat 9:00 - 21:00</span>
                </div>
                <div className="box">
                  <IoLocationOutline size={30} className="icons" />
                  <h3>Delhi</h3>
                  <span>New delhi ,110085</span>
                </div>
                <div className="box">
                  <FiHelpCircle size={30} className="icons" />
                  <Link target="_blank" href="mailto:info@DreaDev.com">
                    <h3>info@DreaDev.com</h3>
                  </Link>
                  <span>Drop us a line anytime!</span>
                </div>
                <div className="box">
                  <BiUserCircle size={30} className="icons" />
                  <Link target="_blank" href="mailto:Dreadev@outlook.in">
                    <h3>Dreadev@outlook.in</h3>
                  </Link>
                  <span>Career at Seven Creative</span>
                </div>
              </div>
              <ul>
                <li className="icon">
                  <Link
                    target="_blank"
                    href="https://www.facebook.com/share/1XsJgWwxyy7mBeTi/?mibextid=qi2Omg"
                  >
                    <BsFacebook size={25} />
                  </Link>
                </li>
                <li className="icon">
                  <Link
                    target="_blank"
                    href="https://x.com/wearedreadev?t=1Ian0UwI-z5uZtkKbgWR7w&s=08"
                  >
                    <FaSquareXTwitter size={25} />
                  </Link>
                </li>
                <li className="icon">
                  <Link
                    target="_blank"
                    href="https://www.instagram.com/wearedreadev?utm_source=qr&igsh=MXN5bHY0d2pnZWRydg=="
                  >
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li className="icon">
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/drea-dev"
                  >
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="right w-70">
              <TitleSm title="Make an online enquiry" />
              <p className="desc-p">
                Got questions? Ideas? Fill out the form below to get our
                proposal.{" "}
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit(e);
                }}
              >
                <div className="grid-2">
                  <div className="inputs">
                    <span>Name</span>
                    <input
                      type="text"
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleChange}
                    />
                    {errors.user_name && (
                      <p
                        style={{
                          color: "red",
                          marginTop: "5px",
                          fontSize: "2vh",
                        }}
                      >
                        {errors.user_name}
                      </p>
                    )}
                  </div>
                  <div className="inputs">
                    <span>Email</span>
                    <input
                      type="text"
                      name="user_email"
                      value={formData.user_email}
                      onChange={handleChange}
                    />
                    {errors.user_email && (
                      <p
                        style={{
                          color: "red",
                          marginTop: "5px",
                          fontSize: "2vh",
                        }}
                      >
                        {errors.user_email}
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid-2">
                  <div className="inputs">
                    <span>business Name</span>
                    <input
                      type="text"
                      name="user_business"
                      value={formData.user_business}
                      onChange={handleChange}
                    />
                    {errors.user_business && (
                      <p
                        style={{
                          color: "red",
                          marginTop: "5px",
                          fontSize: "2vh",
                        }}
                      >
                        {errors.user_business}
                      </p>
                    )}
                  </div>
                  <div className="inputs">
                    <span>contact Number</span>
                    <input
                      type="text"
                      name="user_number"
                      value={formData.user_number}
                      onChange={handleChange}
                    />
                    {errors.user_number && (
                      <p
                        style={{
                          color: "red",
                          marginTop: "5px",
                          fontSize: "2vh",
                        }}
                      >
                        {errors.user_number}
                      </p>
                    )}
                  </div>
                </div>
                <div className="inputs">
                  <span>TELL US A BIT ABOUT YOUR BUSINESS*</span>
                  <textarea cols="30" rows="10" name="message"></textarea>
                </div>
                <button className="button-primary" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
