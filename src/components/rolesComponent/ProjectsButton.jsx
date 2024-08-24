'use client';

import Link from "next/link";

const ProjectButton = () => {
    return(
        <section className="relative w-full h-40 flex flx-row justify-center items-center">
            <Link href='/projects'>
                <button className="relative w-52 md:w-72 lg:w-96 font-25 md:font-medium h-12 md:h-18 lg:h-24 rounded-3xl change-bg button-outer1 text-xl md:text-2xl lg:text-4xl
                 fira-code">Visit Projects</button>
            </Link>
        </section>
    )
}

export default ProjectButton;