import Image from "next/image";
import newZealand from "@/public/northern-lights.jpg";

export default function Home() {
  return (
    <div className="content-section">
      <Image src={newZealand} alt="img" fill />
      <div className="content">
        <h1>
          Unforgettable <br /> Adventures await. <br /> Book your Journey <br />{" "}
          Today.
        </h1>
      </div>
    </div>
  );
}
