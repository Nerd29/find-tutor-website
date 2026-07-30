import Image from "next/image";
import Banner from "./components/Banner";
// import TutorsPage from "./tutors/page";
// import Featured from "./components/Featured";
// import WhyChooseUs from "./components/WhyChooseUs";

// import Featured from "./components/Featured";
// import about-us from "./components/WhyChooseUs";
// import FeaturesSection from "./components/FeaturesSection";
import DemoVideoSection from "./demoVideoSection/page";
import { ModeToggle } from "./components/ModeToggle";
import WhyChooseUs from "./about-us/page";
import FeaturesSection from "./featuresSection/page";
import Featured from "./featured/page";
// import DemoVideoSection from "./components/DemoVideo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Banner />
      
     <section id="about-us">
        <WhyChooseUs />
      </section>
      {/* <Featured/> */}
      <section id="featured">
        <Featured />
      </section>
      <section id="featuresSection">
        <FeaturesSection></FeaturesSection>

      </section>
      <section id="demoVideoSection">
          <DemoVideoSection></DemoVideoSection>
      </section>

    </main>
  );
}
