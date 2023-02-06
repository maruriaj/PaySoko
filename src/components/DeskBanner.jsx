import { useContext, useEffect } from "react";
import DeskBg from "../assets/DeskBanner.png";
import SaleBg from "../assets/saleDesk.png";
import { Link } from "react-router-dom";
import { CatContext } from "../context/CategoryContext";
import { PuffLoader } from "react-spinners";

function DeskBanner() {
  const { categories, loading, getCategories } = useContext(CatContext);

  useEffect(() => {
    if (categories.length === 0) {
      getCategories();
    }
  }, []);
  return (
    <div className="mt-[56px] hidden md:block mb-4">
      <div className="bg-white flex gap-3 px-12 py-2">
        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>

          <p className="text-[#1C1C1C] font-medium text-base cursor-pointer">
            All category
          </p>
        </div>
        <p className="text-[#1C1C1C] font-medium text-base cursor-pointer">
          Hot offers
        </p>
        <p className="text-[#1C1C1C] font-medium text-base cursor-pointer">
          Service Deals
        </p>
      </div>
      <div className="hidden md:flex md:mx-12 p-3 my-2 gap-3 bg-white shadow-md rounded-lg">
        <div className="flex flex-col gap-1">
          {loading && (
            <div className="flex flex-col justify-center items-center my-3 flex-1">
              <PuffLoader color="#36d7b7" />
            </div>
          )}
          {categories.slice(0, 9).map((category) => (
            <div
              key={category?.id}
              className=" cursor-pointer hover:bg-[#E5F1FF] rounded-md p-1"
            >
              <Link
                to={`/product/${category.id}?q=${category.name
                  .replaceAll(" ", ":")
                  .replaceAll("'", ";")}`}
              >
                <p className="text-[#505050]  text-sm leading-5">
                  {category?.name.slice(0, 20)}
                </p>
              </Link>
            </div>
          ))}
          <div className=" cursor-pointer hover:bg-[#E5F1FF] rounded-md p-1">
            <Link to="/category">
              <p className="text-[#505050]  text-sm leading-5">More category</p>
            </Link>
          </div>
        </div>
        <div
          className="p-4 bg-no-repeat bg-cover relative flex-1"
          style={{ backgroundImage: `url(${DeskBg})` }}
        >
          <div className="flex flex-col justify-between h-full">
            <div>
              <p className="text-white font-semibold text-2xl">
                Payments and eBusiness MarketPlace
              </p>
              <p className="text-white text-sm">
                Find businesses, products and services
              </p>
            </div>
            <div>
              <p className="text-white text-2xl">Jan 12th - Jan 26th</p>
              <p className="text-white font-bold text-3xl">25% Off</p>
              <p className="text-white text-sm">
                On all shoes above Ksh. 3,500
              </p>
              <button className="text-[#1C1C1C] text-center text-base font-medium bg-[#CDDDF8] rounded-md py-1 px-2">
                BUY NOW
              </button>
            </div>
          </div>
          <img src={SaleBg} alt="logo" className="absolute bottom-0 right-0" />
        </div>
        <div className="flex flex-col gap-1">
          <div className="bg-white max-w-[200px] shadow-md rounded-lg flex justify-between items-center p-4">
            <div>
              <div className="flex  justify-between items-center gap-2">
                <div className="bg-[#03247C] h-5 w-5 rounded-lg flex justify-center items-center text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-2 h-2"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                      clipRule="evenodd"
                    />
                    <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
                  </svg>
                </div>
                <Link to="/category">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-[#03247C] cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Link>
              </div>
              <div>
                <p className="leading-4 font-semibold text-base">Business</p>
                <p className="text-[#7E8392] text-[10px]">
                  Search and explore businesses in PaySoko Marketplace
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white max-w-[200px] shadow-md rounded-lg flex justify-between items-center p-4">
            <div>
              <div className="flex  justify-between items-center gap-2">
                <div className="bg-[#03247C] h-5 w-5 rounded-lg flex justify-center items-center text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-2 h-2"
                  >
                    <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
                    <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
                    <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
                  </svg>
                </div>
                <Link to="/category">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-[#03247C] cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Link>
              </div>
              <div>
                <p className="leading-4 font-semibold text-base">Product</p>
                <p className="text-[#7E8392] text-[10px]">
                  Search and explore products in PaySoko Marketplace
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white max-w-[200px] shadow-md rounded-lg flex justify-between items-center p-4">
            <div>
              <div className="flex  justify-between items-center gap-2">
                <div className="bg-[#03247C] h-5 w-5 rounded-lg flex justify-center items-center text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-2 h-2"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.5 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5h-.75V3.75a.75.75 0 000-1.5h-15zM9 6a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm-.75 3.75A.75.75 0 019 9h1.5a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM9 12a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm3.75-5.25A.75.75 0 0113.5 6H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM13.5 9a.75.75 0 000 1.5H15A.75.75 0 0015 9h-1.5zm-.75 3.75a.75.75 0 01.75-.75H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM9 19.5v-2.25a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-4.5A.75.75 0 019 19.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <Link to="/category">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-[#03247C] cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Link>
              </div>
              <div>
                <p className="leading-4 font-semibold text-base">Service</p>
                <p className="text-[#7E8392] text-[10px]">
                  Search and explore services in PaySoko Marketplace
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeskBanner;
