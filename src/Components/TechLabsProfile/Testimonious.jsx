import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
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
    ];

    return (
        <section className="my-20 text-white font-[Poppins]">
            <h2
                className="text-xl md:text-3xl font-extrabold text-accent text-center mb-12"
                data-aos="fade-up"
            >
                What Our Clients Say
            </h2>

            <Swiper
                navigation={true}
                modules={[Navigation]}
                loop={true}
                spaceBetween={40}
                slidesPerView={1}
                className="mySwiper max-w-3xl mx-auto"
            >
                {reviews.map((review) => (
                    <SwiperSlide key={review._id}>
                        <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 text-center flex flex-col items-center shadow-xl hover:bg-white/20 transition-all duration-500">
                            <Rating style={{ maxWidth: 180 }} value={review.rating} isDisabled />
                            <p className="text-gray-300 mt-4 mb-4">{review.details}</p>
                            <h3 className="text-xl font-semibold text-orange-400">{review.name}</h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Testimonious;
