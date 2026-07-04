function ScoreCards({ audit }) {

  if (!audit) return null;

  const getImpactColor = (impact) => {
    if (impact === "High") return "text-red-500";
    if (impact === "Medium") return "text-yellow-500";
    return "text-green-500";
  };

  const getEffortColor = (effort) => {
    if (effort === "High") return "text-red-500";
    if (effort === "Medium") return "text-yellow-500";
    return "text-green-500";
  };

  const calculateScore = () => {

    let score = 100;

    audit.opportunities.forEach((item) => {

      if (item.impact === "High") score -= 10;
      else if (item.impact === "Medium") score -= 5;

      if (item.effort === "High") score -= 5;
      else if (item.effort === "Medium") score -= 2;

    });

    return Math.max(score, 0);
  };

  const score = calculateScore();

  return (

    <div className="grid md:grid-cols-4 gap-5 mt-8">

      {/* Impact */}
      <div className="bg-white rounded-xl shadow-lg p-6">

        <h3 className="font-semibold text-gray-500">
          📈 Overall Impact
        </h3>

        <p className={`text-3xl font-bold mt-3 ${getImpactColor(audit.overallImpact)}`}>
          {audit.overallImpact}
        </p>

      </div>

      {/* Confidence */}
      <div className="bg-white rounded-xl shadow-lg p-6">

        <h3 className="font-semibold text-gray-500">
          🎯 Confidence
        </h3>

        <p className="text-3xl font-bold text-blue-600 mt-3">
          {audit.averageConfidence}
        </p>

      </div>

      {/* Effort */}
      <div className="bg-white rounded-xl shadow-lg p-6">

        <h3 className="font-semibold text-gray-500">
          ⚙ Estimated Effort
        </h3>

        <p className={`text-3xl font-bold mt-3 ${getEffortColor(audit.averageEffort)}`}>
          {audit.averageEffort}
        </p>

      </div>

      {/* CRO Score */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl shadow-lg p-6">

        <h3 className="font-semibold">
          ⭐ CRO Score
        </h3>

        <p className="text-4xl font-bold mt-3">
          {score}/100
        </p>

        <div className="w-full bg-white/30 rounded-full h-3 mt-5">

          <div
            className="bg-white h-3 rounded-full"
            style={{
              width: `${score}%`
            }}
          />

        </div>

      </div>

    </div>

  );

}

export default ScoreCards;