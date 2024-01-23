import Image from "next/image";
import newZealand from "@/public/newzealand.jpg";

export default function Home() {
  return (
    <div className="content-section">
      <Image src={newZealand} alt="img" fill />
    </div>
  );
}
