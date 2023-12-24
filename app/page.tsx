import Image from "next/image";
import { Lato } from "next/font/google";
import Footer from "@/components/Footer";

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
            <div className="h-[450vh] text-white">
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

                <div className="h-[250vh] bg-gradient-to-b from-[#0B323E] to-[#101C20] text-xl">
                    <div className="h-[70vh] flex flex-row justify-around items-center">
                        <div className="h-[350px] w-[450px]">
                            <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#147390] to-[#A6FBB2]">
                                Private and Efficient Self-Assessment
                            </div>
                            <p className="text-2xl w-[430px] pt-12 leading-relaxed">
                                Only 16 questions provide a quick yet insightful
                                evaluation of your Emotional Fulfillment,
                                Intellectuak Engagement, Workplace Relationship,
                                and Engagement within your current role.
                            </p>
                        </div>
                        <Image
                            src="/image1.png"
                            alt="First Image"
                            width={500}
                            height={500}
                            className=""
                        />
                    </div>
                    <div className="h-[70vh] flex flex-row justify-around items-center">
                        <Image
                            src="/image2.png"
                            alt="First Image"
                            width={500}
                            height={500}
                            className=""
                        />
                        <div className="h-[350px] w-[470px]">
                            <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#147390] to-[#A6FBB2]">
                                Confidential Guidance for Career Transitions
                            </div>
                            <p className="text-2xl w-[430px] pt-12 leading-relaxed">
                                Specifically designed for professionals at a
                                turning point, this private tool provides
                                insights into job satisfaction and performance,
                                offering confidential guidance for pivotal
                                career decisions.
                            </p>
                        </div>
                    </div>
                    <div className="h-[70vh] flex flex-row justify-around items-center">
                        <div className="h-[350px] w-[430px]">
                            <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#147390] to-[#A6FBB2]">
                                Peer Comparions for Context
                            </div>
                            <p className="text-2xl w-[420px] pt-12 leading-relaxed">
                                Compare your career progress with peers in a
                                secure environment, offering a private yet clear
                                perspective on where you stand professionally.
                            </p>
                        </div>
                        <Image
                            src="/image3.png"
                            alt="First Image"
                            width={500}
                            height={500}
                            className=""
                        />
                    </div>
                    <Footer />
                </div>
            </div>
        </main>
    );
}
