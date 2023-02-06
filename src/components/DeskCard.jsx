import React from "react";

function DeskCard({ product }) {
  return (
    <div className="bg-white max-w-[280px] rounded-lg shadow-md">
      <img src={product?.image} alt="" className="w-full" />
      <div className="relative p-2 flex justify-between items-center">
        <div>
          <p className="text-[#363431] font-semibold text-sm leading-5">
            {product?.title}
          </p>
          <div className="flex items-center gap-2">
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

            <p className="text-[#9A9998] font-medium text-xs tracking-wide">
              4.2
            </p>
          </div>
        </div>
        <div className="absolute -top-3 right-3 bg-[#D1E7FF] h-7 w-7 rounded-full border-2 border-[#03247C] flex justify-center items-center">
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
    </div>
  );
}

export default DeskCard;
