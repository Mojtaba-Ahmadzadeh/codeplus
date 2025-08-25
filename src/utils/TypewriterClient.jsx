"use client"; // 👈 حتماً برای کامپوننت کلاینت

import React from "react";
import Typewriter from "typewriter-effect";

/**
 * TypewriterClient component
 * Props:
 *   - text: string to type
 *   - cursor: optional cursor symbol, default "|"
 */
const TypewriterClient = ({ text, cursor = "|" }) => {
    return (
        <Typewriter
            onInit={(typewriter) => {
                typewriter
                    .typeString(text) // type the given text
                    .callFunction(() => {
                        // Hide cursor after typing finished
                        const cursorEl = document.querySelector(".Typewriter__cursor");
                        if (cursorEl) cursorEl.style.display = "none";
                    })
                    .start(); // start typing
            }}
            options={{
                autoStart: true,
                cursor, // initial cursor
            }}
        />
    );
};

export default TypewriterClient;