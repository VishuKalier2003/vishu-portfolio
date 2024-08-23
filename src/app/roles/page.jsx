"use client"
import TopBar from "@/components/TopBar";
import Hero from "../../components/Hero";
import Slider from "../../components/Slider";
import Footer from "../../components/footer";
import Journey from "../../components/rolesComponent/Journey";
import MergedComponentI from "@/components/merged/MergedR1";

export default function Home() {
  return (
    <div>
      <TopBar />
      <Slider />
      <Hero />
      <Journey />
      <MergedComponentI />
      <Footer page={"roles"} />
    </div>
  );
}
