
import Tilt from "react-parallax-tilt";
import { FaArrowRight } from "react-icons/fa";
import Animotion from "../../assets/Animotion/Animation.json"
import Lottie from "lottie-react";

const Hero = () => {
    return (
        <div
            className="relative min-h-screen flex items-center justify-center overflow-hidden text-white bg-transparent"
        >
            {/* Overlay for contrast */}
            <div className="absolute inset-0 "></div>

            {/* Tilt content */}
            <Tilt
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                perspective={1000}
                transitionSpeed={2000}
                gyroscope={true}
                className="relative z-10 text-center max-w-2xl px-6"
            >
                <h1 className="lilita-one-regular text-5xl md:text-8xl  mb-6 drop-shadow-lg" data-aos="zoom-in">
                    TechLabs
                </h1>

                <p className="text-gray-200 text-lg md:text-xl mb-8 leading-relaxed" data-aos="zoom-in-up">
                    We engineer intelligent digital experiences — blending design, tech,
                    and innovation to accelerate your business growth.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    <button className="btn  btn-accen flex items-center gap-2 px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300" data-aos="fade-right">
                        Get a Quote <FaArrowRight />
                    </button>
                    <button className="btn  btn-success  px-6 py-3 rounded-full hover:bg-accent hover:text-white transition-all duration-300" data-aos="fade-left">
                        Contact Us
                    </button>
                </div>
                    {/* Lottie amimotion */}
                {/* <div className="flex justify-center md:justify-end" data-aos="zoom-in-up">
                    <div className="max-w-xs sm:max-w-sm md:max-w-md w-full drop-shadow-2xl">
                        <Lottie animationData={Animotion} />
                    </div>
                </div> */}
            </Tilt>
            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                <span className="text-white text-lg text-center mb-2">Scroll to explore</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white animate-bounce"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 10l7 7 7-7"
                    />
                </svg>
            </div>



            <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
        </div>
    );
};

export default Hero;
