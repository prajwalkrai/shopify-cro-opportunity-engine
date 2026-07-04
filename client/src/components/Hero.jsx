function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 rounded-3xl text-white p-12 shadow-xl mb-10">

      <div className="max-w-3xl">

        <p className="uppercase tracking-widest text-blue-200 font-semibold">
          AI Powered Shopify Analytics
        </p>

        <h1 className="text-5xl font-extrabold leading-tight mt-4">
          Shopify CRO
          <br />
          Opportunity Engine
        </h1>

        <p className="text-lg text-blue-100 mt-6 leading-8">
          Analyze any Shopify store using AI and discover
          high-impact conversion opportunities across
          product pages, collections, merchandising,
          competitor analysis and user experience.
        </p>

        <button
          onClick={() =>
            window.scrollTo({
              top: 450,
              behavior: "smooth",
            })
          }
          className="mt-8 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:scale-105 transition"
        >
          🔍 Start Analysis
        </button>

      </div>

    </div>
  );
}

export default Hero;