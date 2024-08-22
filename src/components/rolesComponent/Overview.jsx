'use client';
import React, { useState } from "react";

const Overview = () => {
    const [In, setIn] = useState(false);

    function entered() {
        setIn(true);
    }
    
    return(
        <section className="relative outline w-screen h-[40rem]" onMouseEnter={() => {entered()}}></section>
    )
}

export default Overview;