import Card from "./components/Card";
import Contributor from "./components/Contributor";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex gap-5 w-full justify-center items-center sm:px-3">
        <Card
          iconSrc={"/Student.jpeg"}
          title="Students"
          bgColor="bg-green-100"
        />
        <Card
          iconSrc={"/teacher.png"}
          title="Teachers"
          bgColor="bg-slate-100"
        />
      </div>
      <Hero />
      <Contributor />
    </>
  );
}
