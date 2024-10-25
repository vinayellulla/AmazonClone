import React from "react";
import Corousel from "./Corousel";
import HomePageCards from "./HomePageCards";
import CorouselCategory from "./CorouselCategory";
import CorouselProduct from "./CorouselProduct";
import NavBar from "./NavBar";

function HomePage() {
  return (
    <>
      <div className="bg-amazonecolne-background">
        <div className="min-w-[1000px] max-w-[1500px] m-auto ">
          <Corousel />
          <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80 ">
            <HomePageCards
              title={"we have a suprise"}
              img={"../amazon_clone/images/home_grid_1.jpg"}
              link={"see the suprise now"}
            />
            <HomePageCards
              title={"Ringes of fire"}
              img={"../amazon_clone/images/home_grid_2.jpg"}
              link={"stream Now "}
            />
            <HomePageCards
              title={"Laptops"}
              img={"../amazon_clone/images/home_grid_3.jpg"}
              link={"See in the Laptops"}
            />
            <HomePageCards
              title={"Do Read Books"}
              img={"../amazon_clone/images/home_grid_4.jpg"}
              link={"More Books are Here"}
            />
            <HomePageCards
              title={"we have a suprise"}
              img={"../amazon_clone/images/home_grid_5.jpg"}
              link={"see more here"}
            />
            <HomePageCards
              title={"we have a suprise"}
              img={"../amazon_clone/images/home_grid_6.jpg"}
              link={"see more here"}
            />
            <HomePageCards
              title={"we have a suprise"}
              img={"../amazon_clone/images/home_grid_7.jpg"}
              link={"see more here"}
            />
            <HomePageCards
              title={"we have a suprise"}
              img={"../amazon_clone/images/home_grid_8.jpg"}
              link={"see more here"}
            />
            <div className="m-3 pt-8">
              <img
                className="xl:hidden"
                src={"../amazon_clone/images/banner_image_2.jpg"}
              />
            </div>
          </div>
          <CorouselProduct />
          <CorouselCategory />
          <div className="h-[200px]">
            <img
              className="h-[100%] m-auto"
              src="../amazon_clone/images/banner_image.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
