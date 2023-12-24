import React from "react";
import Link from "next/link";
import { Orbitron, Lato } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"], weight: "400" });
const lato = Lato({
    subsets: ["latin"],
    weight: "400",
});

const NavBar = () => {
    return (
        <div
            className={`flex flex-row justify-between items-center bg-black h-[10vh] text-white text-2xl p-12 ${lato.className}`}
        >
            <div className="flex gap-14 items-center">
                <Link href="/" className={`text-3xl ${orbitron.className}`}>
                    CopilotCareer
                </Link>
                <Link href="/">Home</Link>
                <Link href="/">Smart Benchmark</Link>
                <Link href="/">Augmented Mentorship</Link>
                <Link href="/">Enerprise Solution</Link>
                <Link href="/">Contact</Link>
            </div>
            <button className="py-1 px-8 rounded bg-gradient-to-r from-[#106884] to-[#88CDE1]">
                Log in
            </button>
        </div>
    );
};

export default NavBar;
