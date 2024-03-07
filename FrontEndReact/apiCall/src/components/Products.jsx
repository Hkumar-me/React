import React, { useEffect, useState } from "react";
import axios from "../Utils/axios"
function Products() {
  let [productData, setProductData] = useState([]);
  let getProducts = () => {
    axios
      .get("products")
      .then((res) => setProductData(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="w-full h-screen flex flex-col  p-4">
      <h1 className="text-white text-xl w-full text-center ">Products Page</h1>
      <div className="products mt-5 flex flex-col gap-10 w-full overflow-y-scroll">
        {productData.length > 0 ? (
          productData.map((item, index) => (
            <h2
              key={item?.id}
              className="text-white bg-orange-400 text-xl text-nowrap p-4 w-full rounded-md  "
            >
              {item?.title}
            </h2>
          ))
        ) : (
          <h1 className="absolute top-1/2 left-1/2 text-3xl text-white translate-x-[-50%] translate-y-[-50%]">
            Loading...
          </h1>
        )}
      </div>
    </div>
  );
}

export default Products;
