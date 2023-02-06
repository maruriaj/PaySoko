import Card from "./Card";
import { FadeLoader } from "react-spinners";
import { useState } from "react";

function ProductMain({ products, loading, category }) {
  const [all, setAll] = useState(false);
  const [initial, setInitial] = useState(10);

  const handleAll = () => {
    setAll(true);
    setInitial(20);
  };
  const handleLess = () => {
    setAll(false);
    setInitial(10);
  };
  return (
    <div className="my-3 px-4">
      <p className="text-[#363431] font-semibold text-base leading-5">
        Browse {category}
      </p>
      {loading && (
        <div className="flex flex-col justify-center items-center my-3 h-20">
          <FadeLoader color="#3654d7" />
        </div>
      )}
      {products.length > 0 && (
        <div className="my-2 grid grid-cols-2 md:grid-cols-3 md:gap-3 lg:grid-cols-6 gap-4">
          {products.slice(0, initial).map((product) => (
            <Card key={product?.product_id} product={product} />
          ))}
        </div>
      )}
      {products.length === 0 && !loading && (
        <div className="my-3 flex flex-col justify-center items-center h-20">
          <p className="text-lg font-semibold text-center">No Products Found</p>
        </div>
      )}

      {products.length > 10 &&
        (all ? (
          <button
            onClick={handleLess}
            className="bg-[#03247C] rounded-2xl text-white text-xs font-bold leading-6 py-1.5 w-full my-3"
          >
            BROWSE LESS
          </button>
        ) : (
          <button
            onClick={handleAll}
            className="bg-[#03247C] rounded-2xl text-white text-xs font-bold leading-6 py-1.5 w-full my-3"
          >
            BROWSE MORE
          </button>
        ))}
    </div>
  );
}

export default ProductMain;
