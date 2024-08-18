'use client';
import React from "react";
import { GlobeDemo } from "../globeDemo";
import NameBox from "../NameBox";
import Home from "../Vishu";

const NameGlobe = () => {
    return(
        <section className="relative w-full flex flex-col md:flex-row">
            <GlobeDemo className="" />
            <div className="w-screen md:w-1/2 flex flex-row md:flex-col">
            <NameBox className="" />
            <Home className='' />
            </div>
        </section>
    )
}

export default NameGlobe;