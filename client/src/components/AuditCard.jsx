function AuditCard({ audit }) {

  if (!audit) return null;

  const badgeColor = (impact) => {
    switch (impact) {
      case "High":
        return "bg-red-100 text-red-700";
      case "Medium":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-green-100 text-green-700";
    }
  };

  const effortColor = (effort) => {
    switch (effort) {
      case "High":
        return "bg-red-100 text-red-700";
      case "Medium":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-green-100 text-green-700";
    }
  };

  const priorityMedal = (index) => {
    switch (index) {
      case 0:
        return "🥇 Priority #1";
      case 1:
        return "🥈 Priority #2";
      case 2:
        return "🥉 Priority #3";
      default:
        return `📌 Priority #${index + 1}`;
    }
  };

  return (

    <div className="mt-10">

      <h2 className="text-3xl font-bold">
        🧠 AI CRO Audit
      </h2>

      {/* Summary */}

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 mt-6 mb-8">

        <h3 className="text-xl font-bold text-blue-700 mb-3">
          📋 Executive Summary
        </h3>

        <p className="text-gray-700 leading-8">
          {audit.summary}
        </p>

      </div>

      <div className="grid gap-6">

        {audit.opportunities.map((item, index) => (

          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg border border-gray-200 p-7 hover:shadow-xl transition"
          >

            {/* Top */}

            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">

              <div>

                <p className="text-blue-600 font-semibold">
                  {priorityMedal(index)}
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  {item.title}
                </h3>

              </div>

              <span
                className={`px-5 py-2 rounded-full font-semibold ${badgeColor(item.impact)}`}
              >
                📈 {item.impact} Impact
              </span>

            </div>

            {/* Stats */}

            <div className="grid md:grid-cols-2 gap-6 mt-8">

              <div className="space-y-4">

                <div>

                  <span className="font-semibold">
                    🎯 Confidence
                  </span>

                  <div className="mt-2 bg-blue-100 text-blue-700 inline-block px-4 py-2 rounded-full font-semibold">
                    {item.confidence}
                  </div>

                </div>

                <div>

                  <span className="font-semibold">
                    ⚙ Implementation Effort
                  </span>

                  <div
                    className={`mt-2 inline-block px-4 py-2 rounded-full font-semibold ${effortColor(item.effort)}`}
                  >
                    {item.effort}
                  </div>

                </div>

              </div>

              <div>

                <h4 className="font-bold text-lg">
                  💡 Why this matters
                </h4>

                <p className="text-gray-600 leading-7 mt-3">
                  {item.reason}
                </p>

              </div>

            </div>

            {/* Experiment */}

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mt-8">

              <h4 className="font-bold text-blue-700">
                🧪 Recommended Experiment
              </h4>

              <p className="mt-3 text-gray-700 leading-7">
                {item.experiment}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}

export default AuditCard;