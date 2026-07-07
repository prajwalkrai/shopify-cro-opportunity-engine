import { motion } from "framer-motion";
import {
  TrendingUp,
  Target,
  Settings,
  Star,
} from "lucide-react";

function ScoreCards({ audit }) {
  if (!audit) return null;

  const getImpactColor = (impact) => {
    if (impact === "High")
      return "text-red-600 bg-red-100";

    if (impact === "Medium")
      return "text-yellow-700 bg-yellow-100";

    return "text-green-700 bg-green-100";
  };

  const getEffortColor = (effort) => {
    if (effort === "High")
      return "text-red-600 bg-red-100";

    if (effort === "Medium")
      return "text-yellow-700 bg-yellow-100";

    return "text-green-700 bg-green-100";
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
    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mt-10">

      {/* Overall Impact */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{
          y: -8,
          scale: 1.03,
        }}
        className="bg-white rounded-2xl shadow-xl p-7"
      >

        <div className="flex justify-between items-center">

          <div>

            <p className="text-gray-500 font-semibold">
              Overall Impact
            </p>

            <TrendingUp
              size={40}
              className="mt-4 text-red-500"
            />

          </div>

          <span className={`px-4 py-2 rounded-full font-bold ${getImpactColor(audit.overallImpact)}`}>
            {audit.overallImpact}
          </span>

        </div>

      </motion.div>

      {/* Confidence */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.15,
          duration: 0.5,
        }}
        whileHover={{
          y: -8,
          scale: 1.03,
        }}
        className="bg-white rounded-2xl shadow-xl p-7"
      >

        <div className="flex justify-between items-center">

          <div>

            <p className="text-gray-500 font-semibold">
              AI Confidence
            </p>

            <Target
              size={40}
              className="mt-4 text-blue-600"
            />

          </div>

          <h2 className="text-3xl font-bold text-blue-600">
            {audit.averageConfidence}
          </h2>

        </div>

      </motion.div>

      {/* Effort */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.3,
          duration: 0.5,
        }}
        whileHover={{
          y: -8,
          scale: 1.03,
        }}
        className="bg-white rounded-2xl shadow-xl p-7"
      >

        <div className="flex justify-between items-center">

          <div>

            <p className="text-gray-500 font-semibold">
              Estimated Effort
            </p>

            <Settings
              size={40}
              className="mt-4 text-green-600"
            />

          </div>

          <span className={`px-4 py-2 rounded-full font-bold ${getEffortColor(audit.averageEffort)}`}>
            {audit.averageEffort}
          </span>

        </div>

      </motion.div>

      {/* CRO Score */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.45,
          duration: 0.5,
        }}
        whileHover={{
          scale: 1.05,
        }}
        className="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-700 rounded-2xl shadow-2xl text-white p-7"
      >

        <div className="flex justify-between">

          <div>

            <p className="text-blue-100 font-semibold">
              CRO Score
            </p>

            <h2 className="text-5xl font-extrabold mt-3">
              {score}
            </h2>

            <p className="text-blue-100">
              out of 100
            </p>

          </div>

          <Star
            size={46}
            fill="white"
          />

        </div>

        <div className="mt-8">

          <div className="bg-white/20 rounded-full h-3">

            <motion.div
              initial={{ width: 0 }}
              animate={{
                width: `${score}%`,
              }}
              transition={{
                duration: 1.2,
              }}
              className="bg-white h-3 rounded-full"
            />

          </div>

        </div>

      </motion.div>

    </div>
  );
}

export default ScoreCards;