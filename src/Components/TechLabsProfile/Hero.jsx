import { FaArrowRight, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import devoloper from "../../assets/Animotion/register.json"

const taglines = [
    "We Build Smart, Scalable, Stunning Experiences",
    "Transforming Ideas Into Digital Reality",
    "Design. Develop. Deliver.",
];

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 md:px-12 lg:px-20 font-[Poppins] overflow-hidden bg-transparent">
            {/* subtle glow */}
            <div className="absolute inset-0 bg-transparent" />

            <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="uppercase tracking-[3px] text-xs sm:text-sm text-indigo-300 mb-2 sm:mb-3 text-center mt-20"
            >
                Creative Agency
            </motion.p>

            <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center z-10">
                {/* Left Section */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="space-y-8"
                >
                    <h1 className="text-5xl lg:text-8xl font-extrabold leading-tight text-white">
                        TechLabs <br />
                        <span className="bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                            Digital Agency
                        </span>
                    </h1>

                    {/* Animated tagline text */}
                    <motion.p
                        key={taglines[0]}
                        animate={{
                            opacity: [0, 1, 1, 0],
                            y: [10, 0, 0, -10],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            repeatType: "loop",
                            times: [0, 0.2, 0.8, 1],
                        }}
                        className="text-lg lg:text-3xl text-indigo-200 font-medium"
                    >
                        {taglines[Math.floor(Math.random() * taglines.length)]}
                    </motion.p>

                    <p className="text-gray-300 text-sm lg:text-xl max-w-lg leading-relaxed">
                        We craft modern, high-performance web solutions that help brands
                        stand out and grow in the digital world.
                    </p>

                    <div className="flex flex-row items-center gap-4 mt-6">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 transition-all duration-300"
                        >
                            Get a Quote <FaArrowRight />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn bg-transparent border border-indigo-400 text-indigo-300 px-6 py-3 rounded-full hover:bg-indigo-500 hover:text-white transition-all duration-300"
                        >
                            Contact Us
                        </motion.button>
                    </div>

                    <div className="flex items-center gap-3 mt-8">
                        <div className="flex text-yellow-400 text-2xl">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} />
                            ))}
                        </div>
                        <span className="text-indigo-200 text-sm">5-Star Client Reviews</span>
                    </div>
                </motion.div>

                {/* Right Image Section */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="relative flex justify-center md:justify-end"
                >
                    <div className=" p-5 w-[100%] max-w-md relative overflow-hidden">
                        <Lottie animationData={devoloper}></Lottie>
                        <div className="absolute inset-0 bg-transparent rounded-3xl" />
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-16 mb-4 flex flex-col items-center z-10">
                <span className="text-indigo-200 text-sm sm:text-lg mb-2">
                    Scroll to explore
                </span>
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-300 animate-bounce"
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
                </motion.svg>
            </div>
        </section>
    );
};

export default Hero;
