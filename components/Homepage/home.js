import Nav from "@/components/Homepage/navbar/nav";
import Banner from "./banner/banner";
import Image from "next/image";
import backgroundImg from "@/public/assets/background.jpg"

function home() {
  return (
    <div>
      <Nav />
      <Image
        src={backgroundImg}
        alt="background"
        className="w-full h-[450px] xl:h-[700px]"
      />
      <div className="absolute top-32 lg:top-56 xl:px-24">
      <Banner />
      </div>
    </div>
  )
}

export default home