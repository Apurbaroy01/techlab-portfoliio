import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import useAxois from "../../Hooks/useAxois";
import { useQuery } from "@tanstack/react-query";

const TeamMember = () => {
  const axiosInstance = useAxois();

  const { data: teamMembers = [] } = useQuery({
    queryKey: ["teamMembers"],
    queryFn: async () => {
      const res = await axiosInstance.get("/teamMembers");
      return res.data;
    },
  });

  return (
    <div className="mt-12 sm:mt-16 w-11/12 mx-auto" data-aos="fade-up">
      {/* ✨ Section Title */}
      {/* <h3 className="lilita-one-regular text-4xl md:text-5xl font-extrabold text-accent mb-4 text-center">
        Meet Our Creative Team
      </h3> */}

      <section className="relative py-6 sm:py-10 space-y-10">
        <div className="container mx-auto px-3 sm:px-6">
          {/* 🔹 Slider 1 — Normal direction (Left-to-Right) */}
          <Swiper
            modules={[FreeMode, Autoplay]}
            freeMode={true}
            loop={true}
            speed={3600}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: false,
            }}
            breakpoints={{
              180: { slidesPerView: 2, spaceBetween: 10 },
              640: { slidesPerView: 2, spaceBetween: 16 },
              768: { slidesPerView: 2, spaceBetween: 18 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
              1280: { slidesPerView: 3, spaceBetween: 24 },
              1536: { slidesPerView: 4, spaceBetween: 28 },
            }}
            className="!overflow-hidden"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="px-2 sm:px-3"
                >
                  <div
                    className="group relative bg-white/10 backdrop-blur-xl
                    border border-white/20 rounded-2xl overflow-hidden shadow-lg
                    hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-500
                    hover:-translate-y-2"
                  >
                    {/* 🖼️ Image */}
                    <div className="relative">
                      <img
                        src={member.url}
                        alt={member.name}
                        className="w-full h-36 sm:h-44 object-cover rounded-t-2xl transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent"></div>
                    </div>

                    {/* 👤 Text */}
                    <div className="p-3 sm:p-4 text-center">
                      <h4 className="text-base text-nowrap sm:text-lg font-semibold text-white">
                        {member.name}
                      </h4>
                      <p className="text-xs text-nowrap sm:text-sm text-purple-200 mt-1 tracking-wide">
                        {member.role}
                      </p>
                    </div>

                    {/* 🌈 Border Glow */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-40
                      bg-gradient-to-r from-purple-400/40 via-pink-400/40 to-blue-400/40 blur-md
                      transition-all duration-700"
                    ></div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* 🔹 Slider 2 — Reverse direction (Right-to-Left) */}
          <Swiper
            modules={[FreeMode, Autoplay]}
            freeMode={true}
            loop={true}
            speed={3600}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: true, // 👈 Reverse scroll
            }}
            breakpoints={{
              180: { slidesPerView: 2, spaceBetween: 10 },
              640: { slidesPerView: 2, spaceBetween: 16 },
              768: { slidesPerView: 2, spaceBetween: 18 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
              1280: { slidesPerView: 3, spaceBetween: 24 },
              1536: { slidesPerView: 4, spaceBetween: 28 },
            }}
            className="!overflow-hidden mt-10"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={`reverse-${index}`}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="px-2 sm:px-3"
                >
                  <div
                    className="group relative bg-white/10 backdrop-blur-xl
                    border border-white/20 rounded-2xl overflow-hidden shadow-lg
                    hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-500
                    hover:-translate-y-2"
                  >
                    <div className="relative">
                      <img
                        src={member.url}
                        alt={member.name}
                        className="w-full h-36 sm:h-44 object-cover rounded-t-2xl transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent"></div>
                    </div>

                    <div className="p-3 sm:p-4 text-center">
                      <h4 className="text-base text-nowrap sm:text-lg font-semibold text-white">
                        {member.name}
                      </h4>
                      <p className="text-xs text-nowrap sm:text-sm text-purple-200 mt-1 tracking-wide">
                        {member.role}
                      </p>
                    </div>

                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-40
                      bg-gradient-to-r from-purple-400/40 via-pink-400/40 to-blue-400/40 blur-md
                      transition-all duration-700"
                    ></div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default TeamMember;
