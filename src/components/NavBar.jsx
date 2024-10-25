import React from "react";
import Search from "./SearchBar";
import { ShoppingCart } from "lucide-react";

function NavBar() {
  return (
    <>
      <header className="min-w-[1000px] ">
        <div className="flex bg-amazonecolne text-white  h-[60px]">
          {/* Left wala */}
          <div className="flex items-center m-4 ">
            <img
              className=" h-[35px] w-[100px] m-2"
              src={"../amazon_clone/images/amazon.png"}
            />
            <div className="pr-4 pl-4">
              <div className="text-xs xl:text-sm">Deliver To</div>
              <div className="text-sm xl:text-base font-bold">
                UnitedKingDom
              </div>
            </div>
          </div>
          {/* Middle Wala Start */}

          <div className="flex flex-grow relative items-center">
            <Search />
          </div>
          {/* Middle wala End  */}

          {/* Right Wala */}
          <div className="flex items-center m-4 ">
            <div className="pr-4 pl-4">
              <div className="text-xs xl:text-sm">Hello,Sign In To</div>
              <div className="text-sm xl:text-base font-bold">
                Accounts and Lists
              </div>
            </div>

            <div className="pr-4 pl-4">
              <div className="text-xs xl:text-sm">Returns</div>
              <div className="text-sm xl:text-base font-bold">Orders</div>
            </div>
            <div className="flex  pr-3 pl-3 items-center">
              <ShoppingCart className=" h-[40px] w-[40px]" />
              <div className="mt-7 text-xs xl-text-sm font-bold">Cart</div>
            </div>
          </div>
        </div>
        <div className="flex bg-amazonecolne-light_blue space-x-3 text-white text-xs xl:text-sm p-2 pl-6">
          <div>Today's Deals</div>
          <div>Customer Serive</div>
          <div>Registry</div>
          <div>GiftCards</div>
          <div>Sell</div>
        </div>
      </header>
    </>
  );
}

export default NavBar;
