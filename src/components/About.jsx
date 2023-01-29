import AboutImg from "../assets/about.png";

function About() {
  return (
    <div className="bg-[#C2EDA7] p-5 mt-4">
      {/* <div className="flex justify-center items-center">
        <img src={AboutImg} alt="about logo" className="" />
      </div> */}
      <p className="text-[#03247C] text-base font-semibold text-center leading-5 tracking-wider my-2">
        What’s PaySoko Marketplace really about?
      </p>
      <p className="text-[#03247C] font-bold text-2xl leading-7 text-center my-2">
        For Businesses
      </p>
      <p className="text-[#363431] text-center text-xs font-medium leading-5 tracking-wide">
        PaySoko Marketplace aggregates all PaySoko businesses, storefronts,
        products and services into one place where consumers can find what they
        are looking for easily
      </p>
      <button className="bg-[#C2EDA7] border-[#03247C] rounded-2xl border w-full text-xs font-bold uppercase py-3 px-6 my-3">
        Sign up
      </button>
      <p className="text-[#03247C] font-bold text-2xl leading-7 text-center my-2">
        For Customers
      </p>
      <p className="text-[#363431] text-center text-xs font-medium leading-5 tracking-wide">
        PaySoko Marketplace aggregates all PaySoko businesses, storefronts,
        products and services into one place where consumers can find what they
        are looking for easily
      </p>
      <button className="bg-[#C2EDA7] border-[#03247C] rounded-2xl border w-full text-xs font-bold uppercase py-3 px-6 my-3">
        Sign up
      </button>
    </div>
  );
}

export default About;
