import Logo from "../assets/logo.png";
import { Context } from "../context/ProductContext";
import { useContext, useEffect, useState } from "react";

function Navbar() {
  const { filterProducts } = useContext(Context);
  const [searchText, setSearchText] = useState("");
  const [search, setSearch] = useState("");
  const handleClick = () => {
    setSearch(searchText);
    setSearchText("");
  };
  useEffect(() => {
    filterProducts(search);
  }, [search]);
  return (
    <nav className="bg-[#F2F3F9] px-2 md:px-6 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-gray-200">
      <div className="flex items-center justify-between mx-auto">
        <img src={Logo} className="h-6 mr-3 sm:h-9" alt="Paysoko Logo" />
        <div className="flex items-center bg-white rounded-2xl px-4 py-1">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 outline-none"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
            onClick={handleClick}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
