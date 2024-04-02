import Link from "next/link";
import { TitleLogo } from "./Title";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaSquareXTwitter, FaTelegram, FaSkype } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="grid-4">
            <div className="logo">
              <TitleLogo title="Drea" caption="Dev" className="logobg" />
              <br />
              <span>
                Queries on everyday <br /> from 9 am to 9 pm
              </span>
              <br />
              <br />
              <h3>
                <Link target="_blank" href="tel:+91-9910780895">
                  +91 9910780895
                </Link>
              </h3>
              <h3>
                <Link target="_blank" href="tel:+91-8920538806">
                  +91 8920538806
                </Link>
              </h3>
              <br />
              <button className="button-primary">
                <Link href="/contact">Request for quote</Link>
              </button>
            </div>
            <ul>
              <h3>COMPANY</h3>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
            </ul>
            <ul>
              <h3>SERVICES</h3>
              <li>
                <Link href="/services/1">Web Design & Development</Link>
              </li>
              <li>
                <Link href="/services/2">Digital Marketing</Link>
              </li>
              <li>
                <Link href="/services/3">E-Commerce</Link>
              </li>
              <li>
                <Link href="/services/4">randing & Creative Services</Link>
              </li>
            </ul>
            <ul>
              <h3>CONNECT</h3>
              <div className="connect">
                <li>
                  <Link target="_blank" href="https://www.facebook.com/dreadev">
                    <BsFacebook size={25} />
                  </Link>
                </li>
                <li>
                  <Link target="_blank" href="https://twitter.com/dreadev">
                    <FaSquareXTwitter size={25} />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="https://www.instagram.com/dreadev"
                  >
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link target="_blank" href="https://www.linkedin.com/dreadev">
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
                <li>
                  <Link target="_blank" href="https://telegram.org/dreadev">
                    <FaTelegram size={25} />
                  </Link>
                </li>
                <li>
                  <Link target="_blank" href="https://www.skype.com/dreadev">
                    <FaSkype size={25} />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div className="legal connect py">
            <div className="text">
              <span>© 2023 ALL RIGHTS RESERVED.</span>
            </div>
            <div className="connect">
              <span>DREADEV COMPANY</span>
              <span> &nbsp; | &nbsp; </span>
              <span>TERMS & CONDITIONS</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
