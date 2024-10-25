import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";

function CorouselProduct() {
  return (
    <>
      <div className=" bg-white m-2">
        <div className="text-2xl font-semibold p-3 ">BestSeller</div>
        <Swiper
          slidesPerView={5}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
        >
          {Array.from({ length: 9 }, (_, i) => (
            <SwiperSlide key={i}>
              <Link to={`./product/${i}`}>
                <img src={`../amazon_clone/images/product_${i}_small.jpg`} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default CorouselProduct;
