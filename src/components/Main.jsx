import Card from "./Card";
import { Context } from "../context/ProductContext";
import { useContext, useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";

function Main() {
  const { products, loading, getProducts } = useContext(Context);

  const [all, setAll] = useState(false);
  const [initial, setInitial] = useState(12);

  const handleAll = () => {
    setAll(true);
    setInitial(24);
  };
  const handleCollapse = () => {
    setAll(false);
    setInitial(12);
  };
  useEffect(() => {
    if (products.length < 10) {
      getProducts();
    }
  }, []);
  return (
    <div className="px-5 mb-3 md:max-w-[80%] md:mx-auto md:px-0">
      <div className="flex justify-between items-center">
        <p className="text-[#363431] md:hidden font-medium text-base leading-5 tracking-wider">
          Popular Products
        </p>
        <p className="text-[#363431] hidden md:block font-medium text-base leading-5 tracking-wider">
          Recommended items
        </p>
        {all ? (
          <p
            className="text-[#03247C] text-xs tracking-wide cursor-pointer"
            onClick={handleCollapse}
          >
            Collapse
          </p>
        ) : (
          <p
            className="text-[#03247C] text-xs tracking-wide cursor-pointer"
            onClick={handleAll}
          >
            See All
          </p>
        )}
      </div>
      {loading && (
        <div className="flex flex-col justify-center items-center my-3 h-20">
          <PuffLoader color="#36d7b7" />
        </div>
      )}
      {products.length > 0 && (
        <div className="my-2 grid grid-cols-2 md:grid-cols-3 md:gap-3 lg:grid-cols-6 gap-4">
          {products?.slice(0, initial).map((product) => (
            <Card product={product} key={product.id} />
          ))}
        </div>
      )}
      {products.length === 0 && !loading && (
        <div className="my-3 flex flex-col justify-center items-center h-20">
          <p className="text-lg font-semibold text-center">
            No Products Found...
          </p>
        </div>
      )}
      <div className="rounded-lg bg-gradient-to-r from-[#F79E7F] to-[#DE9C8D] p-4 my-6 md:hidden">
        <p className="text-[#03247C] font-semibold text-center text-base leading-5 tracking-wider">
          Enter your email and get the latest and best offers. Subscribe Now!
        </p>
        <div className="bg-white rounded-2xl flex justify-between items-center overflow-hidden my-4 px-3 py-1">
          <input
            type="text"
            placeholder="Enter your email"
            className="flex-1 outline-none placeholder:text-[#363431] placeholder:text-xs placeholder:leading-6 placeholder:font-medium"
          />
          <span className="text-[#03247C] text-xs font-bold">Subscribe</span>
        </div>
      </div>
    </div>
  );
}

export default Main;
