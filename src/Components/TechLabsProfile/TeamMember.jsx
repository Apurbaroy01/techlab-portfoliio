import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2200,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div
      className="mt-12 sm:mt-16 w-11/12 mx-auto"
      data-aos="fade-up"
    >
      {/* ✨ Section Title */}
      <h3
        className="lilita-one-regular text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-16
        bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text
        drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
      >
        🌟 Meet Our Creative Team 🌟
      </h3>

      <section className="relative py-6 sm:py-10">
        <div className="container mx-auto px-3 sm:px-6">
          <Slider {...settings}>
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
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
                    <h4 className="text-base sm:text-lg font-semibold text-white">
                      {member.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-purple-200 mt-1 tracking-wide">
                      {member.role}
                    </p>
                  </div>

                  {/* 🌈 Animated Border Glow */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-40
                    bg-gradient-to-r from-purple-400/40 via-pink-400/40 to-blue-400/40 blur-md
                    transition-all duration-700"
                  ></div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default TeamMember;
