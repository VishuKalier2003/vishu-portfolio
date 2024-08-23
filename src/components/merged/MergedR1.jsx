'use client';

import React from "react";
import LineDrawing from "../lineToDraw";
import Overview from "../rolesComponent/Overview";


const MergedComponentI = () => {
    return(
        <section className="relative w-full h-full">
            <LineDrawing />
            <Overview />
        </section>
    )
}

export default MergedComponentI;