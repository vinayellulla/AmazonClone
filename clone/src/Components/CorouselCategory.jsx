import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function CorouselCategory() {
  return (
    <>
      <div className="bg-white m-3">
        <div className="text-2xl font-semibold p-3">Shop By Category</div>
        <Swiper
          slidesPerView={5}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
        >
          <SwiperSlide>
            <img src={"../amazon_clone/images/category_1.jpg"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={"../amazon_clone/images/category_2.jpg"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={"../amazon_clone/images/category_3.jpg"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={"../amazon_clone/images/category_4.jpg"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={"../amazon_clone/images/category_5.jpg"} />
          </SwiperSlide>
        </Swiper>
        Carousel Catagory
      </div>
    </>
  );
}

export default CorouselCategory;
