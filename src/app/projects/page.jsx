'use client';

import Footer from "@/components/footer";
import Hero from "@/components/Hero";
import Slider from "@/components/Slider";
import TopBar from "@/components/TopBar";
import React from "react";

export default function Home() {
    return(
        <div>
            <TopBar />
            <Slider />
            <Hero />
            <Footer page={"Projects"} />
        </div>
    )
}