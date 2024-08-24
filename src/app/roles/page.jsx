"use client"
import TopBar from "@/components/TopBar";
import Hero from "../../components/Hero";
import Slider from "../../components/Slider";
import Footer from "../../components/footer";
import Journey from "../../components/rolesComponent/Journey";
import MergedComponentI from "@/components/merged/MergedR1";
import DomainProjects from "@/components/rolesComponent/DomainProjects";
import ProjectsGlance from "@/components/rolesComponent/ProjectGlance";
import GridSpace from "@/components/rolesComponent/GridSpace";
import ProjectButton from "@/components/rolesComponent/ProjectsButton";


export default function Home() {
  return (
    <div>
      <TopBar />
      <Slider />
      <Hero />
      <Journey />
      <GridSpace />
      <MergedComponentI />
      <DomainProjects />
      <ProjectsGlance />
      <ProjectButton />
      <Footer page={"Roles"} />
    </div>
  );
}
