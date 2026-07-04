function EmptyState() {

  return (

    <div className="bg-white rounded-xl shadow-lg mt-8 p-12 text-center">

      <div className="text-7xl mb-6">
        🛍️
      </div>

      <h2 className="text-3xl font-bold text-gray-800">
        Ready to Analyze Your Shopify Store
      </h2>

      <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
        Enter a Shopify store URL above to generate an AI-powered
        CRO audit with prioritized recommendations, competitor
        comparison, and experiment ideas.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">

        <div className="bg-blue-50 rounded-xl p-6">

          <div className="text-4xl">
            🤖
          </div>

          <h3 className="font-bold mt-3">
            AI Audit
          </h3>

          <p className="text-gray-600 mt-2">
            Gemini AI analyzes the store and finds CRO opportunities.
          </p>

        </div>

        <div className="bg-green-50 rounded-xl p-6">

          <div className="text-4xl">
            📊
          </div>

          <h3 className="font-bold mt-3">
            Competitor Comparison
          </h3>

          <p className="text-gray-600 mt-2">
            Compare your Shopify store against competitors.
          </p>

        </div>

        <div className="bg-purple-50 rounded-xl p-6">

          <div className="text-4xl">
            🚀
          </div>

          <h3 className="font-bold mt-3">
            CRO Recommendations
          </h3>

          <p className="text-gray-600 mt-2">
            Get prioritized experiments ranked by impact and effort.
          </p>

        </div>

      </div>

    </div>

  );

}

export default EmptyState;