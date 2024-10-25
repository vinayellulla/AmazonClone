import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { callAPI } from "../utils/CallApi";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProduct = () => {
    callAPI(`data/products.json`).then((productResults) => {
      setProduct(productResults[id]);
    });
  };

  useEffect(() => {
    getProduct();
  }, []);

  if (!product?.title) return <h1>Loading Product ....</h1>;

  return (
    product && (
      <div className="h-screen bg-amazonecolne-background ">
        <div className="min-w-[1000px] max-w-[1500px] m-auto bg-orange-400">
          <div className="grid grid-cols-10">
            {/* {left} */}
            <div className="col-span-3 bg-blue-400">
              <img src={`${product.image}`} />
            </div>
            {/* Middle Div */}
            <div className="col-span-5 bg-pink-400">Middle</div>
            {/* Right Div */}
            <div className="col-span-2">Right</div>
          </div>
        </div>
      </div>
    )
  );
}

export default ProductPage;
