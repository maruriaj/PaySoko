import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "../requests";

function DeskContainer({ id, title }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = title.replaceAll(" ", ":").replaceAll("'", ";");
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const results = await fetchProducts(id);
        setProducts(results.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    })();
  }, [id]);
  return (
    <div className={`hidden md:${loading ? "hidden" : "block"} md:px-12 my-4`}>
      <div className="bg-white shadow-md rounded-md grid grid-rows-2 grid-cols-5">
        <div className="bg-[#F8F7FB] flex flex-col row-span-2 p-2">
          <p className="text-[#03247C] font-semibold text-xl">{title}</p>
          <p className="text-[#363431] font-medium text-sm">
            {products.length} Products Found
          </p>
          <img
            src={products[1]?.thumbnail_url}
            alt="logo"
            className="h-[145px] w-[145px] self-center my-1"
          />
          <div className="flex items-center">
            <Link to={`/product/${id}?q=${url}`}>
              <p className="text-[#363431] font-medium text-sm cursor-pointer">
                View All
              </p>
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3 text-[#03247C]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        </div>
        {products.slice(1, 9).map((product) => (
          <div key={product.id} className="bg-white border p-2 cursor-pointer">
            <a
              href={product.product_url}
              target="_blank"
              className="flex justify-between items-center"
            >
              <div>
                <p className="text-[#1C1C1C] text-base">{product.name}</p>
                <p className="text-[#8B96A5] text-xs">From</p>
                <p className="text-[#032276] text-xs">{product.unit_price}</p>
              </div>
              <img
                src={product?.thumbnail_url}
                alt="picLogo"
                className="h-[69px] w-[66px] ml-1"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DeskContainer;
