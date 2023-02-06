import RegBanner from "../assets/regBanner.png";
import BusinessCard from "./BusinessCard";
import Chip from "../assets/chip.png";
import Flower from "../assets/flower.png";

const products = [
  { title: "Kev’s Frys Place", image: Chip, id: 1 },
  { title: "Sheila’s Flowers", image: Flower, id: 2 },
];

function RegisterBanner() {
  return (
    <div
      className="hidden md:block rounded-lg max-w-[80%] mx-auto p-4 my-6 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(44,124,241,1), rgba(0,209,255,0.5)), url(${RegBanner})`,
      }}
    >
      <div className=" flex flex-row justify-between">
        <div className="text-[#FFFFFF] mr-3">
          <h1 className="word-break break-before-all text-3xl tracking-tight leading-10 font-semibold flex-col mx-4 my-0 mt-4">
            To register your business on PaySoko,
          </h1>
          <h2 className=" text-3xl tracking-tight leading-10 font-semibold flex-col mx-4">
            please click the button below
          </h2>
          <p className="text-[#FFFFFF] text-base font-normal mx-4 my-4">
            Register your business by clicking the button below.
          </p>

          <div className="mb-1 mx-6 mt-1 pt-1 ">
            <button
              type="register"
              className="  mb-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Register
            </button>
          </div>
        </div>

        <div className=" mt-8 mb-10 mx-10 grid grid-cols-2 gap-10">
          {products.map((product) => (
            <BusinessCard key={product.id} product={product} />
          ))}
        </div>
        {/* <form className="flex-1 bg-white rounded-lg mt-4 mb-8 mx-4">
          <div className=" mx-5 mb-6 mt-5 ">
            <label
              htmlFor="business"
              className="block mb-4 ml-1 tracking-normal font-semibold text-xl text-gray-900 mt-5 pt-3"
            >
              Register your business
            </label>
            <input
              type="business"
              id="business"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
              placeholder="Business name"
              required
            />
          </div>
          <div className="mb-6 mx-5">
            <input
              type="details"
              id="details"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Type more details"
              required
            />
          </div>
          <div className="mb-6 mx-5 ">
            <select
              id="industry"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option>Industry</option>
              <option>Perfume</option>
              <option>Botique</option>
              <option>Flower</option>
            </select>
          </div>
          <div className="mb-6 mx-5 ">
            <button
              type="register"
              className="  mb-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Register
            </button>
          </div>
        </form> */}
      </div>
    </div>
  );
}

export default RegisterBanner;
