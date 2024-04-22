import React, { useCallback, useState } from "react";
import Container from "../components/Container";

import ReviewCarousel from "../components/ReviewCarousel.jsx";

const Reviews = () => {
  const [swiperRef, setSwiperRef] = useState();
  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);
  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);
  return (
    <div className="relative flex flex-col justify-center my-16 px-4 md:px-8">
      <Container>
        <div className="grid grid-cols-6 md:grid-cols-12 place-content-center gap-8 w-full h-full">
          <div className="col-span-6 flex flex-col justify-center">
            <div className="">
              {/* <Swiper
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
              </Swiper> */}
              <ReviewCarousel setSwiperRef={setSwiperRef} />
            </div>

            <div className="my-4 flex justify-center gap-4">
              <button
                className="flex w-fit shadow-lg bg-[#091036] p-3 rounded-full"
                onClick={handlePrevious}
              >
                <span className="">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5114 2.75839L4.02999 9.00805L10.5114 15.2577C11.1629 15.8859 11.1629 16.9007 10.5114 17.5289C9.85991 18.157 8.80752 18.157 8.15604 17.5289L0.488609 10.1356C-0.162872 9.50738 -0.162871 8.49262 0.488609 7.86443L8.15604 0.471143C8.80752 -0.157044 9.85991 -0.157044 10.5114 0.471144C11.1462 1.09933 11.1629 2.1302 10.5114 2.75839Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </button>
              <button
                className="flex w-fit shadow-lg bg-[#091036] p-3 rounded-full"
                onClick={handleNext}
              >
                <span className="">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.48861 15.2416L6.97001 8.99195L0.48861 2.74228C-0.16287 2.11409 -0.16287 1.09933 0.48861 0.471141C1.14009 -0.157047 2.19248 -0.157047 2.84396 0.471141L10.5114 7.86443C11.1629 8.49262 11.1629 9.50738 10.5114 10.1356L2.84396 17.5289C2.19248 18.157 1.14009 18.157 0.48861 17.5289C-0.146166 16.9007 -0.16287 15.8698 0.48861 15.2416Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <div className="order-first md:order-last col-span-6 bg-[#b7d9e4] p-8 flex flex-col justify-evenly rounded-lg">
            <p
              className="font-extralight text-2xl"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Testimonials
            </p>
            <h3
              className="text-4xl md:text-6xl font-semibold my-2"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              What our clients say about us
            </h3>
            <h4
              className="text-sm md:text-lg"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              Our clients commend Al-Ahyan for their swift and efficient
              recruitment services, seamlessly fulfilling our urgent manpower
              needs. Their professionalism and dedication have been instrumental
              in our success.
            </h4>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Reviews;
