import Image from "next/image";
import Banner from "./components/Banner";
// import TutorsPage from "./tutors/page";
import Featured from "./components/Featured";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Banner />
      <Featured/>
    </main>
  );
}
