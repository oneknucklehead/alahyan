import React from "react";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import reviews from "../data/reviews.js";
import ReviewCard from "./ReviewCard";

const ReviewCarousel = ({ setSwiperRef }) => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        onSwiper={setSwiperRef}
        //   pagination={{
        //     clickable: true,
        //   }}
        // autoplay={{
        //   delay: 2500,
        // }}
        breakpoints={{}}
        modules={[]}
        className="mySwiper "
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index} className="cursor-pointer ">
            <ReviewCard
              review={review.review}
              name={review.name}
              position={review.position}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewCarousel;
