import Tilt from "react-parallax-tilt";
import { FaStar, FaCheckCircle, FaBuilding, FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
    return (
        <section className="relative min-h-screen bg-transparent text-white py-24 flex flex-col justify-between overflow-hidden">
            {/* Glow / Background Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.15),_transparent_60%)] z-0"></div>

            {/* Main Content */}
            <Tilt
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                perspective={1000}
                transitionSpeed={2000}
                gyroscope={true}
                className="relative z-10 text-center max-w-2xl px-6 mx-auto"
            >
                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                    <p className="uppercase tracking-[4px] text-sm text-indigo-300 mb-3">
                        Creative Agency
                    </p>
                    <h1 className="lilita-one-regular text-5xl md:text-8xl mb-6 drop-shadow-lg" data-aos="zoom-in">
                        TechLabs
                    </h1>

                    <p className="text-gray-200 text-lg md:text-xl mb-8 leading-relaxed" data-aos="zoom-in-up">
                        We engineer intelligent digital experiences — blending design, tech,
                        and innovation to accelerate your business growth.
                    </p>

                    {/* Stats Section */}
                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 backdrop-blur-2xl bg-white/10 border border-white/10 rounded-3xl p-6 shadow-xl">
                        <div className="p-6 flex flex-col items-center hover:bg-white/20 transition-all duration-300 rounded-2xl">
                            <FaStar className="text-purple-400 text-4xl mb-3" />
                            <h2 className="text-4xl font-bold text-white">13+</h2>
                            <p className="text-sm text-gray-300 mt-1">Years Of Experience</p>
                        </div>

                        <div className="p-6 flex flex-col items-center hover:bg-white/20 transition-all duration-300 rounded-2xl">
                            <FaCheckCircle className="text-indigo-400 text-4xl mb-3" />
                            <h2 className="text-4xl font-bold text-white">74k+</h2>
                            <p className="text-sm text-gray-300 mt-1">Projects Completed</p>
                        </div>

                        <div className="p-6 flex flex-col items-center hover:bg-white/20 transition-all duration-300 rounded-2xl">
                            <FaBuilding className="text-blue-400 text-4xl mb-3" />
                            <h2 className="text-4xl font-bold text-white">9.2k+</h2>
                            <p className="text-sm text-gray-300 mt-1">Trusted Companies</p>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap justify-center gap-4 mt-10">
                        <button className="btn btn-accent flex items-center gap-2 px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300" data-aos="fade-right">
                            Get a Quote <FaArrowRight />
                        </button>
                        <button className="btn btn-success px-6 py-3 rounded-full hover:bg-accent hover:text-white transition-all duration-300" data-aos="fade-left">
                            Contact Us
                        </button>
                    </div>
                </div>
            </Tilt>

            {/* Scroll Indicator */}
            <div className="mb-4 flex flex-col items-center z-10">
                <span className="text-white text-lg text-center mb-2">Scroll to explore</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white animate-bounce"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 10l7 7 7-7"
                    />
                </svg>
            </div>
        </section>
    );
};

export default HeroSection;
