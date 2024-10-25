import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function Corousel() {
  return (
    <>
      <div className="h-[600px] bg-white">
        <Swiper
          loop={true}
          spaceBetween={0}
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 10000 }}
          className="h-[50%]"
        >
          <SwiperSlide>
            <img src="../amazon_clone/images/carousel_1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="..\amazon_clone\images\carousel_2.jpg" />
          </SwiperSlide>
          <SwiperSlide className="bg-white">
            <video controls>
              <source
                src={"../amazon_clone/images/carousel_vid.mp4"}
                type="video/mp4"
              />
            </video>
          </SwiperSlide>
          <SwiperSlide>
            <img src="..\amazon_clone\images\carousel_4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="..\amazon_clone\images\carousel_5.jpg" />
          </SwiperSlide>
        </Swiper>
        <div className="h-[50%] bg-gradient-to-b from-stone-900" />
      </div>
    </>
  );
}

export default Corousel;
