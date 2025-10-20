import Tilt from "react-parallax-tilt";
import { FaStar, FaCheckCircle, FaBuilding, FaArrowRight } from "react-icons/fa";
import TecLabs from "./TecLabs";
import useData from "../../Hooks/useData";

const HeroSection = () => {
    const { heroData } = useData();

    return (
        <section className="relative min-h-screen bg-transparent text-white py-16 sm:py-20 md:py-24 mt-5 flex flex-col justify-between overflow-hidden">
            {/* 🌟 Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.15),_transparent_60%)] z-0"></div>

            {/* 🎯 Main Content */}
            <Tilt
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                perspective={1000}
                transitionSpeed={2000}
                gyroscope={true}
                className="relative z-10 text-center max-w-2xl px-4 sm:px-6 mx-auto"
            >
                <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
                    <p className="uppercase tracking-[3px] text-xs sm:text-sm text-indigo-300 mb-2 sm:mb-3">
                        Creative Agency
                    </p>

                    <h1
                        className="lilita-one-regular text-6xl sm:text-6xl md:text-8xl mb-4 sm:mb-6 drop-shadow-lg"
                        data-aos="zoom-in"
                    >
                        <TecLabs />
                    </h1>

                    <p
                        className="text-gray-200 text-sm sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed px-2"
                        data-aos="zoom-in-up"
                    >
                        {heroData?.subtitle}
                    </p>

                    {/* 🌟 Stats Section */}
                    <div className="mt-4 sm:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 backdrop-blur-2xl bg-white/10 border border-white/10 rounded-3xl p-2 sm:p-5 shadow-xl">
                        <div className="p-2 sm:p-6 flex flex-col items-center hover:bg-white/20 transition-all duration-300 rounded-2xl">
                            <FaStar className="text-purple-400 text-2xl sm:text-4xl mb-1 sm:mb-3" />
                            <h2 className="text-2xl sm:text-4xl font-bold text-white">{heroData?.years}+</h2>
                            <p className="text-[10px] sm:text-sm text-gray-300 mt-1 text-center">Years Of Experience</p>
                        </div>

                        <div className="p-2 sm:p-6 flex flex-col items-center hover:bg-white/20 transition-all duration-300 rounded-2xl">
                            <FaCheckCircle className="text-indigo-400 text-2xl sm:text-4xl mb-1 sm:mb-3" />
                            <h2 className="text-2xl sm:text-4xl font-bold text-white">{heroData?.projects}+</h2>
                            <p className="text-[10px] sm:text-sm text-gray-300 mt-1 text-center">Projects Completed</p>
                        </div>

                        <div className="p-2 sm:p-6 flex flex-col items-center hover:bg-white/20 transition-all duration-300 rounded-2xl">
                            <FaBuilding className="text-blue-400 text-2xl sm:text-4xl mb-1 sm:mb-3" />
                            <h2 className="text-2xl sm:text-4xl font-bold text-white">{heroData?.companies}+</h2>
                            <p className="text-[10px] sm:text-sm text-gray-300 mt-1 text-center">Trusted Companies</p>
                        </div>
                    </div>


                    {/* 🎯 Buttons */}
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8 sm:mt-10">
                        <button
                            className="btn btn-accent flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg text-sm sm:text-base hover:scale-105 transition-transform duration-300"
                            data-aos="fade-right"
                        >
                            Get a Quote <FaArrowRight />
                        </button>
                        <button
                            className="btn btn-success px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base hover:bg-accent hover:text-white transition-all duration-300"
                            data-aos="fade-left"
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
            </Tilt>

            {/* ⬇️ Scroll Indicator */}
            <div className="mt-10 sm:mt-16 mb-4 flex flex-col items-center z-10">
                <span className="text-white text-sm sm:text-lg text-center mb-1 sm:mb-2">
                    Scroll to explore
                </span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 sm:h-6 sm:w-6 text-white animate-bounce"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7 7 7-7" />
                </svg>
            </div>
        </section>
    );
};

export default HeroSection;
