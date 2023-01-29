import BannerImg from "../assets/banner.png";

function Banner() {
  return (
    <div className="relative bg-[#E1E4F6] h-[247px] pt-20 shadow-md">
      <h2 className="text-[#151444] text-center text-base font-semibold tracking-wider leading-6">
        Payments and eBusiness MarketPlace
      </h2>
      <p className="text-center text-[#151444] text-xs leading-6">
        Find businesses, products and services
      </p>
      <div className="h-[160px] absolute w-11/12 mx-auto rounded-lg -bottom-16 left-0 right-0 bg-gradient-to-r from-[#1b52dc] to-[#4f78e0] p-3">
        <div className="relative">
          <p className="text-sm text-white leading-6 font-semibold">
            Jan 12th - Jan 26th
          </p>
          <p className="text-white leading-6 text-4xl font-bold my-1">
            25% Off
          </p>
          <p className="text-white text-sm leading-6 font-medium">
            On all shoes above Ksh. 3,500
          </p>
          <img
            src={BannerImg}
            alt="banner logo"
            className="absolute -top-3 right-4"
          />
        </div>
        <button className="bg-[#CDDDF8] text-[#1650DF] w-full font-bold text-xs leading-6 rounded-2xl py-2 uppercase mt-2">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default Banner;
