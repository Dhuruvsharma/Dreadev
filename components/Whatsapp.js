import React from "react";
import Link from "next/link";

const whatsapp = () => {
  return (
    <>
      <div className="whatsapp-icon">
        <Link href="https://wa.me/+919910780895">
          <img
            src="/images/what.png"
            alt="Img"
            className="what"
            href="https://wa.me/+919910780895"
          />
        </Link>
      </div>
    </>
  );
};

export default whatsapp;
