import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="flex flex-row justify-center items-center h-[40vh] text-white gap-x-24 w-fill">
            <div className="bg-[#384245] px-[7rem] py-[6rem]" />
            <div className="flex flex-row gap-x-24 h-[12rem] ">
                <div className="flex flex-col justify-start items-start gap-y-4">
                    <Link href="/">Home</Link>
                    <Link href="/">Start Career Benchmark</Link>
                    <Link href="/">Augmented Mentorship</Link>
                    <Link href="/">Enterprise Solution</Link>
                </div>
                <div className="flex flex-col justify-start items-start gap-y-4">
                    <Link href="/">Terms and Conditions</Link>
                    <Link href="/">Policies</Link>
                    <Link href="/">Contact</Link>
                </div>
                <div className="flex flex-col justify-start items-start gap-y-4">
                    <Link href="/" className="font-bold">
                        Join Our Newsletter
                    </Link>
                    <Link href="/">
                        Get the latest information from CoPilot Career
                    </Link>
                    <div className="flex gap-4 pt-2">
                        <input
                            type="text"
                            placeholder="Enter your email address"
                            className="h-[3.5rem] w-[24rem] rounded text-center border-none outline-none text-black"
                        />
                        <button className="h-[3.5rem] px-10 rounded bg-gradient-to-r from-[#106884] to-[#88CDE1] text-xl">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
