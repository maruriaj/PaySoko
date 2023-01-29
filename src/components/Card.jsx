import ShopIcon from '../assets/shopIcon.png';

function Card({ product }) {
  return (
    <div
      className={`bg-white ${
        product?.isSponsered
          ? 'col-span-2 flex gap-2 max-w-full items-center p-4'
          : 'rounded-lg max-w-[185px] px-4 shadow-md'
      }`}
    >
      <a href={product?.product_url} target="_blank">
        {!product?.isSponsered && (
          <div className="flex justify-between items-center py-1 my-1">
            <p className="text-[#9A9998] text-xs tracking-wide">
              {product?.site}
            </p>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-[#CECECE]"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
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
              product?.isSponsered && 'flex-row-reverse justify-end'
            } items-center gap-2`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-3 h-3 text-[#FFB001]"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>

            <p className="text-[#9A9998] text-xs tracking-wide">124 reviews</p>
          </div>
          {product?.brand_name && (
            <div className="flex items-center gap-2 mt-1">
              <img src={product?.brand_logo_url} alt="" className="w-3 h-3" />
              <p className="text-[#F79E7F] text-xs tracking-wide truncate">
                {product?.brand_name}
              </p>
            </div>
          )}
          <p className="text-[#03247C] font-bold text-lg tracking-wide my-1">
            {product?.unit_price}
          </p>
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
