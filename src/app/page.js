import Image from "next/image";
import Banner from "./components/Banner";
// import TutorsPage from "./tutors/page";
// import Featured from "./components/Featured";
// import WhyChooseUs from "./components/WhyChooseUs";
import Featured from "./featured/page";
import WhyChooseUs from "./about-us/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Banner />
     <section id="about-us">
        <WhyChooseUs />
      </section>
      {/* <Featured/> */}
      <section id="featured">
        <Featured />
      </section>
    </main>
  );
}
