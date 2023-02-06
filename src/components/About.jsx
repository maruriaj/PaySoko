function About() {
  return (
    <div className="bg-[#C2EDA7] p-5 mt-4">
      <div className="md:hidden">
        <p className="text-[#03247C] text-base font-semibold text-center leading-5 tracking-wider my-2">
          What’s PaySoko Marketplace really about?
        </p>
        <p className="text-[#03247C] font-bold text-2xl leading-7 text-center my-2">
          For Businesses
        </p>
        <p className="text-[#363431] text-center text-xs font-medium leading-5 tracking-wide">
          PaySoko Marketplace aggregates all PaySoko businesses, storefronts,
          products and services into one place where consumers can find what
          they are looking for easily
        </p>
        <button className="bg-[#C2EDA7] border-[#03247C] rounded-2xl border w-full text-xs font-bold uppercase py-3 px-6 my-3">
          Sign up
        </button>
        <p className="text-[#03247C] font-bold text-2xl leading-7 text-center my-2">
          For Customers
        </p>
        <p className="text-[#363431] text-center text-xs font-medium leading-5 tracking-wide">
          PaySoko Marketplace aggregates all PaySoko businesses, storefronts,
          products and services into one place where consumers can find what
          they are looking for easily
        </p>
        <button className="bg-[#C2EDA7] border-[#03247C] rounded-2xl border w-full text-xs font-bold uppercase py-3 px-6 my-3">
          Sign up
        </button>
      </div>
      <section className="hidden max-w-xl mt-12 mx-auto px-4 md:block md:px-8">
        <div className="space-y-3 text-center">
          <h3 className="text-3xl text-gray-800 font-bold">
            Subscribe to our newsletter
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Get daily news on upcoming offers from your favourite shops and
            businesses
          </p>
        </div>
        <div className="mt-6">
          <form className="items-center justify-center sm:flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="text-gray-500 w-full p-3 rounded-md border outline-none focus:border-indigo-600"
            />
            <button className="w-full mt-3 px-5 py-3 rounded-md text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 duration-150 outline-none shadow-md focus:shadow-none focus:ring-2 ring-offset-2 ring-indigo-600 sm:mt-0 sm:ml-3 sm:w-auto">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default About;
