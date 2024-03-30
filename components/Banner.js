import React from "react";
import { Title, TitleLogo } from "./common/Title";
import Link from "next/link";

const Banner = () => {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div>
            <Title title="We are looking forward to work with you" /> <br />
            <TitleLogo title="Lets take your business to the next level!" />
          </div>
          <div>
            <button className="button-primary">
              <Link href="/contact">Request a call-back</Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
