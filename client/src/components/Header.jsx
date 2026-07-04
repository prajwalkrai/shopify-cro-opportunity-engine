function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-8 py-10">

        <h1 className="text-5xl font-bold">
          🏪 Shopify CRO Opportunity Engine
        </h1>

        <p className="text-xl mt-4 text-blue-100">
          AI-powered Conversion Rate Optimization Audit
        </p>

        <div className="flex flex-wrap gap-4 mt-8">

          <div className="bg-white/20 rounded-full px-4 py-2">
            🤖 AI Powered
          </div>

          <div className="bg-white/20 rounded-full px-4 py-2">
            📊 Competitor Analysis
          </div>

          <div className="bg-white/20 rounded-full px-4 py-2">
            📈 CRO Score
          </div>

          <div className="bg-white/20 rounded-full px-4 py-2">
            📄 PDF Report
          </div>

        </div>

      </div>
    </header>
  );
}

export default Header;