import NameGlobe from "../components/merged/NameGlobe";
import Hero from "../components/Hero";
import Slider from "../components/Slider";
import './globals.css';
import TopBar from "../components/TopBar";
import { HeroScrollDemo } from "../components/Ipad";
import Footer from "@/components/footer";
import Information from "@/components/Information";


export default function Home() {
  return (
    <div>
      <TopBar />
      <Slider />
      <Hero />
      <NameGlobe />
      <HeroScrollDemo />
      <Information />
      <Footer page={'home'} />
    </div>
  );
}
