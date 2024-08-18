'use client';
import React from "react";
import Info from "../Info";
import Tools from "../Tools";

const ToolsInfo = () => {
    return(
        <section className="relative outline flex flex-row justify-between m-4 top-60 md:top-0">
            <Info />
            <Tools />
        </section>
    )
}

export default ToolsInfo;