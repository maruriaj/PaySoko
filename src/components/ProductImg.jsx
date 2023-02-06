import Jewel from "../assets/jewel.png";

function ProductImg({ category, products }) {
  return (
    <div className="bg-[#F8F7FB] h-[328px] mt-10 shadow-md mb-4 flex flex-col justify-end p-5 relative">
      <p className="text-[#03247C] font-extrabold text-4xl leading-10">
        {category.length > 20 ? category.slice(0, 20) + " ..." : category}
      </p>
      {products.length > 1 && (
        <p className="text-[#363431] font-medium text-sm leading-6">
          {products.length} Products Found
        </p>
      )}
      <img
        src={Jewel}
        alt="product img"
        className="absolute right-0 bottom-0 left-0 m-auto"
      />
    </div>
  );
}

export default ProductImg;
