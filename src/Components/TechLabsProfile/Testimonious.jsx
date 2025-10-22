import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonious = () => {
  const reviews = [
    {
      _id: "643010e0f5a7e52ce1e8fa65",
      name: "Jane Doe",
      details:
        "Various versions have evolved over the years, sometimes by accident, sometimes on purpose.",
      rating: 3,
    },
    {
      _id: "643010f9f5a7e52ce1e8fa66",
      name: "John Doe",
      details:
        "It is a long established fact that a reader will be distracted by the readable content.",
      rating: 2,
    },
    {
      _id: "6430110af5a7e52ce1e8fa67",
      name: "MJ Doe",
      details:
        "Various versions have evolved over the years, sometimes by accident, sometimes on purpose.",
      rating: 5,
    },
    {
      _id: "6430111af5a7e52ce1e8fa68",
      name: "Alice Smith",
      details:
        "Clean and readable content makes a website professional and trustworthy.",
      rating: 4,
    },
  ];

  return (
    <section className="py-20 bg-transparent text-white font-[Poppins]">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white  mb-12">
        What Our Clients Say
      </h2>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        loop
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto px-4"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 flex flex-col items-center text-center shadow-xl hover:scale-105 transition-transform duration-500">
              <div className="mb-4">
                <Rating style={{ maxWidth: 160 }} value={review.rating} isDisabled />
              </div>
              <p className="text-gray-300 text-sm md:text-base mb-4">{review.details}</p>
              <h3 className="text-lg md:text-xl font-semibold text-orange-400">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonious;
