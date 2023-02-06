import ShopIcon from "../assets/shopIcon.png";

function Card({ product }) {
  return (
    <div
      className={`bg-white ${
        product?.isSponsered
          ? "col-span-2 flex gap-2 max-w-full items-center p-4"
          : "rounded-lg max-w-[185px] px-4 shadow-md"
      }`}
    >
      <a href={product?.product_url} target="_blank">
        {!product?.isSponsered && (
          <div className="flex justify-between items-center py-1 my-1">
            <p className="text-[#9A9998] text-xs tracking-wide">
              {product?.site}
            </p>
          </div>
        )}
        <img
          src={product?.thumbnail_url}
          alt="shoe"
          className="rounded-lg w-[157px] h-[132px]"
        />
        <div>
          <p className="text-[#363431] font-semibold text-sm my-1 tracking-wide truncate">
            {product?.name}
          </p>
          <div
            className={`flex ${
              product?.isSponsered && "flex-row-reverse justify-end"
            } items-center gap-2`}
          ></div>
          {product?.brand_name && (
            <div className="flex items-center gap-2 mt-1">
              <p className="text-[#9A9998] text-xs">From:</p>
              {/* <img src={product?.brand_logo_url} alt="" className="w-3 h-3" /> */}
              <p className="text-[#F79E7F] text-xs tracking-wide truncate">
                {product?.brand_name}
              </p>
            </div>
          )}
          <div className="flex justify-between items-center my-1">
            <p className="text-[#03247C] font-bold text-lg tracking-wide my-1">
              {product?.unit_price}
            </p>
            <a
              href={product?.product_url}
              target="_blank"
              className="bg-[#03247C] text-white rounded-lg px-4 py-1 text-xs"
            >
              View
            </a>
          </div>
          {product?.isSponsered && (
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-3 h-3 text-[#FF8901]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 19.5l-15-15m0 0v11.25m0-11.25h11.25"
                  />
                </svg>
                <span className="text-[#9A9998] font-medium text-[8px]">
                  Sponsored
                </span>
              </div>
              <div className="h-5 w-5 rounded-full border-2 border-[#03247C] flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-2 h-2 text-[#03247C]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>
      </a>
    </div>
  );
}
export default Card;
