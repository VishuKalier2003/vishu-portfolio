'use client';
import React, { useEffect } from "react";

const NameBox = () => {
    useEffect(() => {
        setTimeout(() => {
            const divTag = document.getElementById('canvas');
        for (let i = 0; i < 400; i++) {
            const spantag = document.createElement('span');
            spantag.classList.add('block');
            spantag.id = i;
            divTag.appendChild(spantag);
            // Check if the new span exceeds the height of the container
            if (divTag.scrollHeight > divTag.clientHeight) {
                // If it exceeds, remove the last added span and break the loop
                divTag.removeChild(spantag);
                break;
            }
        }
        document.getElementById('19').classList.add('water-blue-bg');
        document.getElementById('20').classList.add('water-blue-bg');
        document.getElementById('21').classList.add('water-blue-bg');
        document.getElementById('22').classList.add('water-blue-bg');
        document.getElementById('23').classList.add('water-blue-bg');
        document.getElementById('24').classList.add('water-blue-bg');
        document.getElementById('25').classList.add('water-blue-bg');
        document.getElementById('31').classList.add('water-blue-bg');
        document.getElementById('40').classList.add('water-blue-bg');
        document.getElementById('46').classList.add('water-blue-bg');
        document.getElementById('47').classList.add('water-blue-bg');
        document.getElementById('48').classList.add('water-blue-bg');
        document.getElementById('49').classList.add('water-blue-bg');
        document.getElementById('50').classList.add('water-blue-bg');
        document.getElementById('51').classList.add('water-blue-bg');
        document.getElementById('52').classList.add('water-blue-bg');
        document.getElementById('74').classList.add('water-blue-bg');
        document.getElementById('76').classList.add('water-blue-bg');
        document.getElementById('77').classList.add('water-blue-bg');
        document.getElementById('78').classList.add('water-blue-bg');
        document.getElementById('79').classList.add('water-blue-bg');
        }, 5000);
    }, []);

    return (
            <div className="absolute w-full h-60 z-5 flex flex-col flex-wrap overflow-hidden" id="canvas"
                >
            </div>
    );
}

export default NameBox;
