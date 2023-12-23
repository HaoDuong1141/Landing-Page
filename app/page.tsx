import Image from "next/image";
import NavBar from "@/components/NavBar";
import { Lato } from "next/font/google";

const lato = Lato({
    subsets: ["latin"],
    weight: "400",
});

const backgroundStyle = {
    "background-image": `linear-gradient(
                            to bottom,
                            #1c1c1c,
                            transparent 100%
                            ), 
                            url("/bg.png")`,
    height: "100vh",
    width: "100%",
};

export default function Home() {
    return (
        <main className={lato.className}>
            <NavBar />

            <div className="h-[400vh] text-white">
                <div className="h-[100vh]">
                    <div
                        className="absolute h-[100vh] bg-cover bg-gradient-to-t from-white to-black"
                        style={backgroundStyle}
                    >
                        <div className="flex flex-col justify-center items-center text-white gap-16 relative">
                            <div className="text-8xl font-extrabold pt-[25vh]">
                                Your New{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#147390] to-[#A6FBB2]">
                                    Copilot
                                </span>
                            </div>
                            <div className="w-[70%] text-6xl text-center font-bold leading-snug">
                                Constantly Accessible, Completely Anonymous,
                                Contextually Aware
                            </div>
                            <button className="py-5 px-11 rounded bg-gradient-to-r from-[#106884] to-[#88CDE1] text-xl">
                                Smart Career Benchmark
                            </button>
                        </div>
                    </div>
                </div>

                <div className="h-[100vh] flex flex-col justify-center items-center gap-10 bg-gradient-to-br from-[#01171D] to-[#1B404D]">
                    <div className="text-6xl font-semibold">
                        Considering a Job Change? Unsure If Better Awaits?
                    </div>
                    <div className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#147390] to-[#A6FBB2]">
                        Smart Career Benchmark
                    </div>
                    <div className="text-2xl">
                        Compare, Analyza, and Intelligent Guidance for Success
                    </div>
                    <button className="py-4 px-12 rounded bg-gradient-to-r from-[#106884] to-[#88CDE1] text-xl">
                        Smart Career Benchmark
                    </button>
                    <p className="w-[830px] text-2xl text-center">
                        An insightful and private tool that quickly assesses
                        your career standing through 16 targeted questions,
                        offering comparative insights with peers and
                        personalized strategies for growth, ideal for those at
                        career crossroads.
                    </p>
                </div>

                <div className="h-[200vh] bg-slate-900"></div>
            </div>
        </main>
    );
}
