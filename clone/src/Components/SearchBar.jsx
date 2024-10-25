import React from "react";
import { Search } from "lucide-react";

function SearchBar() {
  return (
    <div className="w-[100%]">
      <div className="flex items-cente h-10 bg-amazonecolne-yellow rounded ">
        <select className="p-2 bg-gray-100 text-black outline-none rounded-t-sm rounded-b-sm text-xs xl:text-sm">
          <option>All</option>
          <option>Deals</option>
          <option>Computer</option>
          <option>Amazon</option>
          <option>Home</option>
          <option>Mobiles</option>
        </select>
        <input
          className="flex grow items-center h-[100%]  outline-none text-black"
          type="text"
        />
        <button className="w-[40px]">
          <Search className="h-[27px] m-auto stroke-black" />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
