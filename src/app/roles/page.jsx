"use client"
import TopBar from "@/components/TopBar";
import Hero from "../../components/Hero";
import Slider from "../../components/Slider";
import Footer from "../../components/footer";
import Journey from "../../components/rolesComponent/Journey";

export default function Home() {
  return (
    <div>
      <TopBar />
      <Slider />
      <Hero />
      <Journey />
      <Footer page={"roles"} />
    </div>
  );
}
