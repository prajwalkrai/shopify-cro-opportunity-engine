function ComparisonCard({ audit }) {

  if (!audit || !audit.comparison) return null;

  return (

    <div className="bg-white shadow-lg rounded-2xl p-8 mt-8">

      <h2 className="text-3xl font-bold mb-8">
        ⚔️ Competitor Comparison
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {/* Winner */}

        <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl p-6">

          <div className="text-5xl mb-4">
            🏆
          </div>

          <h3 className="text-xl font-bold text-green-700">
            Overall Winner
          </h3>

          <p className="text-2xl font-bold mt-4">
            {audit.comparison.winner}
          </p>

          <p className="text-gray-600 mt-3">
            Based on overall website quality and CRO signals.
          </p>

        </div>

        {/* Strengths */}

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6">

          <div className="text-5xl mb-4">
            💪
          </div>

          <h3 className="text-xl font-bold text-blue-700">
            Strengths
          </h3>

          <p className="mt-4 leading-7 text-gray-700">
            {audit.comparison.strengths}
          </p>

        </div>

        {/* Weaknesses */}

        <div className="bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-xl p-6">

          <div className="text-5xl mb-4">
            ⚠️
          </div>

          <h3 className="text-xl font-bold text-red-700">
            Improvement Areas
          </h3>

          <p className="mt-4 leading-7 text-gray-700">
            {audit.comparison.weaknesses}
          </p>

        </div>

      </div>

    </div>

  );

}

export default ComparisonCard;