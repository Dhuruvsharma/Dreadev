import Banner from "@/components/Banner";
import Brand from "@/components/Brand";
import Testimonial from "@/components/Testimonial";
import { Title, TitleSm } from "@/components/common/Title";

const About = () => {
  return (
    <>
      <section className="agency bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="ABOUT US" /> <br />
            <br />
            <Title
              title="Distinctive Digital Solutions: Dreadev Unveiled!"
              className="title-bg"
            />
          </div>

          <div className="content flex1">
            <div className="left w-60 py">
              <TitleSm title="Unveiling the Heartbeat Behind Your Digital Journey Starts Here" />
              <p className="desc-p">
                Dreadev believes in the revolutionary power of digital
                technology. As a leading web firm, we specialize in creating
                unique solutions that help organizations reach new heights in
                the digital arena. We are committed to helping our clients
                prosper in the ever-changing online environment by combining
                creativity, technological skill, and strategic insight.
              </p>
              <div className="grid-3">
                <div className="box">
                  <h1 className="indigo">4+</h1>
                  <h3>Years of experience</h3>
                </div>
                <div className="box">
                  <h1 className="indigo">20+</h1>
                  <h3>Successful cases</h3>
                </div>
              </div>
            </div>
            <div className="right w-40 ml">
              <img
                src="/images/s1.jpg"
                alt="Img"
                className="round"
                width="100%"
                height="100%"
              />
            </div>
          </div>

          <div className="content flex">
            <div className="left w-40 py">
              <img
                src="/images/s4.jpg"
                alt="Img"
                className="round"
                width="100%"
                height="100%"
              />
            </div>
            <div className="right w-60 ml">
              <TitleSm title="Our mission" />
              <br />
              <p className="misson-p">
                Fueling success through innovation, our mission at Dreadev is to
                revolutionize digital experiences. With a commitment to
                excellence and creativity, we empower businesses to thrive in a
                dynamic online world.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Brand />
      <Testimonial />
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default About;
