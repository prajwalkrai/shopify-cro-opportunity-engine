import {
  Trophy,
  ShieldCheck,
  TriangleAlert,
  BarChart3,
} from "lucide-react";

function ComparisonCard({ audit }) {
  if (!audit || !audit.comparison) return null;

  const comparison = audit.comparison;

  return (
    <div className="mt-10 bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">

      {/* Header */}

      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-6">

        <div className="flex items-center gap-3">

          <BarChart3 size={32} />

          <h2 className="text-3xl font-bold">
            Competitor Comparison
          </h2>

        </div>

        <p className="text-emerald-100 mt-2">
          AI comparison between your Shopify store and competitor.
        </p>

      </div>

      <div className="p-8">

        {/* Winner */}

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8 text-center shadow-sm">

          <Trophy
            size={52}
            className="mx-auto text-yellow-500"
          />

          <p className="uppercase text-gray-500 font-semibold mt-4">
            Winner
          </p>

          <h3 className="text-3xl font-bold text-green-700 mt-2">
            {comparison.winner || "Not Available"}
          </h3>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          {/* Strengths */}

          <div className="bg-blue-50 rounded-2xl p-7 shadow hover:shadow-lg transition">

            <div className="flex items-center gap-3 mb-5">

              <ShieldCheck
                size={28}
                className="text-blue-600"
              />

              <h3 className="text-2xl font-bold text-blue-700">
                Strengths
              </h3>

            </div>

            <p className="text-gray-700 leading-8">
              {comparison.strengths ||
                "No strengths available."}
            </p>

          </div>

          {/* Weaknesses */}

          <div className="bg-red-50 rounded-2xl p-7 shadow hover:shadow-lg transition">

            <div className="flex items-center gap-3 mb-5">

              <TriangleAlert
                size={28}
                className="text-red-600"
              />

              <h3 className="text-2xl font-bold text-red-700">
                Weaknesses
              </h3>

            </div>

            <p className="text-gray-700 leading-8">
              {comparison.weaknesses ||
                "No weaknesses available."}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ComparisonCard;