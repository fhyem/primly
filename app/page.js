"use client";

import Image from "next/image";
import newZealand from "@/public/northern-lights.jpg";
import Slider from "@/components/Slider/index";

export default function Home() {
  return (
    <div className="content-section">
      {/* <h4>Content goes here!</h4> */}
      {/* <Image src={newZealand} alt="img" fill /> */}
      <div className="content">
        <div className="left-content">
          <h1>
            Unforgettable <br /> Adventures await. <br /> Book your Journey{" "}
            <br /> Today.
          </h1>
          <p>Discover Pakistan with primly</p>
        </div>
        <div className="right-content">
          <Slider />
        </div>
      </div>
    </div>
  );
}
