import { home } from "@/assets/data/dummydata";
import Banner from "@/components/Banner";
import Expertise from "@/components/Expertise";
import Testimonial from "@/components/Testimonial";
import { Title, TitleLogo, TitleSm } from "@/components/common/Title";
import { Brand } from "@/components/router";
import React from "react";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <TitleLogo title="Drea" caption="Dev" className="logobg" />
          <h1 className="hero-title">Your Vision, Our Expertise Creations Exceptional Website</h1>

          <div className="sub-heading">
            <TitleSm title="WEBSITES" /> <span>.</span>
            <TitleSm title="BRANDING" /> <span>.</span>
            <TitleSm title="DIGITAL MARKETING" />
          </div>
        </div>
      </section>
      <section className="hero-sec">
        <div className="container">
          <div className="heading-title">
            <Title title="Distinctive Digital Solutions: Dreadev Unveiled" />
            <p>
              Unleash your brand's unique potential with DreaDev. Stand out from
              the crowd and make a lasting impression in a crowded digital
              world.
            </p>
          </div>
          <div className="hero-content grid-4">
            {home.map((item, i) => (
              <div className="box" key={i}>
                <span className="green">{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Expertise />
      <Banner />
      <Testimonial />
      <Brand />

      
    </>
  );
};

export default Hero;
