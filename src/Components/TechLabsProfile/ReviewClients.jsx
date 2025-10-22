import { FaStar, FaCheckCircle, FaBuilding } from "react-icons/fa";
import useData from "../../Hooks/useData";
import Testimonious from "./Testimonious";

const ReviewClients = () => {
    const { heroData } = useData();


    const stats = [
        {
            icon: <FaStar className="text-yellow-400 text-5xl" />,
            value: `${heroData?.years}+`,
            label: "Years Of Experience",
            animation: "zoom-in-up",
        },
        {
            icon: <FaCheckCircle className="text-green-400 text-5xl" />,
            value: `${heroData?.projects}+`,
            label: "Projects Completed",
            animation: "zoom-in-up",
        },
        {
            icon: <FaBuilding className="text-blue-400 text-5xl" />,
            value: `${heroData?.companies}+`,
            label: "Trusted Companies",
            animation: "zoom-in-up",
        },
    ];

    return (
        <section className="relative min-h-[90vh] bg-transparent text-white flex flex-col justify-center items-center overflow-hidden py-20 font-[Poppins]">
            {/* 🌌 Background Glow Animation */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.12),_transparent_60%)] animate-pulse"></div>

            {/* ✨ Floating Gradient Circles */}
            <div className="absolute w-72 h-72  rounded-full blur-3xl top-20 left-[-80px] animate-bounce-slow"></div>
            <div className="absolute w-96 h-96  rounded-full blur-3xl bottom-0 right-[-120px] animate-pulse"></div>

            {/* 🌟 Section Title */}
            <div
                className="relative z-10 text-center max-w-5xl mx-auto px-6"
                data-aos="fade-up"
            >
                <h2 className="lilita-one-regular text-4xl md:text-5xl font-extrabold text-accent mb-6 sm:mb-10">
                    Review From Our Clients
                </h2>

                {/* 📊 Stats Grid */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            data-aos={stat.animation}
                            data-aos-delay={index * 200}
                            className="group relative bg-white/10 hover:bg-white/20 backdrop-blur-2xl border border-white/10 shadow-lg rounded-3xl p-8 flex flex-col items-center justify-center text-center transition-all duration-500 hover:-translate-y-2"
                        >
                            {/* gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                            {/* Centered Icon */}
                            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white/10 mb-4 group-hover:bg-white/20 transition-all duration-300">
                                {stat.icon}
                            </div>

                            <h2 className="text-4xl font-extrabold text-white drop-shadow-md">
                                {stat.value}
                            </h2>
                            <p className="text-sm text-gray-300 mt-2">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Testimonious></Testimonious>
        </section>
    );
};

export default ReviewClients;
