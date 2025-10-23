import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";

const teamMembers = [
    {
        name: "ABS Shamim",
        title: "Chairman of TechLabs",
        role: "Chairman",
        image: "https://i.ibb.co.com/VpB5GR0q/7561.jpg",
    },
    {
        name: "MD. Mohosin",
        title: "Executive Director of TechLabs",
        role: "Executive Director",
        image: "https://i.ibb.co.com/s9W3Pth9/7562.jpg",
    },
   
];

const TeamLider = () => {
    return (
        <section className="py-16 bg-transparent text-white font-[Poppins]">
            <div className="max-w-6xl mx-auto text-center px-4 sm:px-8">
                {/* Header */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-2xl md:text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-indigo-400"
                >
                    Our Management Team
                </motion.h2>

                <p className="text-sm md:text-base text-indigo-100 max-w-2xl mx-auto mb-10">
                    To help you build your career and achieve your goals, we offer
                    4-year Diploma in Engineering courses in 15 technologies.
                </p>

                {/* Swiper Section */}
                <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    spaceBetween={20}
                    slidesPerView={2}
                    breakpoints={{
                        320: { slidesPerView: 2 },
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 2 },
                    }}
                    className="pb-12"
                >
                    {teamMembers.map((member, index) => (
                        <SwiperSlide key={index}>
                            <motion.div
                                whileHover={{
                                    scale: 1.05,
                                    y: -5,
                                    transition: { duration: 0.3 },
                                }}
                                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 flex flex-col items-center text-center shadow-[0_0_25px_rgba(255,255,255,0.1)] hover:shadow-[0_0_35px_rgba(255,255,255,0.25)] transition-all duration-300"
                            >
                                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-teal-400 shadow-md mb-4">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold text-white">
                                    {member.name}
                                </h3>
                                <p className="text-teal-300 text-sm font-medium mt-1">
                                    {member.role}
                                </p>
                                <p className="text-indigo-100 text-xs text-nowrap sm:text-sm mt-2 opacity-90 leading-relaxed">
                                    {member.title}
                                </p>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default TeamLider;
