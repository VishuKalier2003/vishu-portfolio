import NameGlobe from "../components/merged/NameGlobe";
import Hero from "../components/Hero";
import Slider from "../components/Slider";
import './globals.css';
import TopBar from "../components/TopBar";
import { HeroScrollDemo } from "../components/Ipad";


export default function Home() {
  return (
    <div>
      <TopBar />
      <Slider />
      <Hero />
      <NameGlobe />
      <HeroScrollDemo />
    </div>
  );
}
