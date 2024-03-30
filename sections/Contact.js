import { Title, TitleSm } from "@/components/common/Title";
import React from "react";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaSquareXTwitter, FaTelegram, FaSkype } from "react-icons/fa6";
import { BiUserCircle } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { FiHeadphones, FiHelpCircle } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import Link from "next/link";

const Contact = () => {
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
                  <h3>
                    <Link href="https://wa.me/8920538806">+91 8920538806</Link>
                  </h3>
                  <span>Call us: Mon - Sat 9:00 - 21:00</span>
                </div>
                <div className="box">
                  <IoLocationOutline size={30} className="icons" />
                  <h3>Delhi</h3>
                  <span>New delhi ,110085</span>
                </div>
                <div className="box">
                  <FiHelpCircle size={30} className="icons" />
                  <h3>info@DreaDev.com</h3>
                  <span>Drop us a line anytime!</span>
                </div>
                <div className="box">
                  <BiUserCircle size={30} className="icons" />
                  <h3>hr@dream-theme.com</h3>
                  <span>Career at Seven Creative</span>
                </div>
              </div>
              <ul>
                <li className="icon">
                  <Link href="/">
                    <BsFacebook size={25} />
                  </Link>
                </li>
                <li className="icon">
                  <Link href="/">
                    <FaSquareXTwitter size={25} />
                  </Link>
                </li>
                <li className="icon">
                  <Link href="/">
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li className="icon">
                  <Link href="/">
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

              <form>
                <div className="grid-2">
                  <div className="inputs">
                    <span>Name</span>
                    <input type="text" />
                  </div>
                  <div className="inputs">
                    <span>Email</span>
                    <input type="text" />
                  </div>
                </div>
                <div className="grid-2">
                  <div className="inputs">
                    <span>your business Name</span>
                    <input type="text" />
                  </div>
                  <div className="inputs">
                    <span>your Number</span>
                    <input type="text" />
                  </div>
                </div>
                <div className="inputs">
                  <span>TELL US A BIT ABOUT YOUR BUSINESS*</span>
                  <textarea cols="30" rows="10"></textarea>
                </div>
                <button className="button-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
