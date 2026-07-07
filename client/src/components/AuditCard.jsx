import { motion } from "framer-motion";
import {
  Brain,
  TrendingUp,
  Target,
  Settings,
  FlaskConical,
  BadgeCheck,
  Medal,
} from "lucide-react";

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

  const priorityLabel = (index) => {
    switch (index) {
      case 0:
        return "Highest Priority";
      case 1:
        return "High Priority";
      case 2:
        return "Medium Priority";
      default:
        return `Opportunity ${index + 1}`;
    }
  };

  return (
    <div className="mt-12">

      {/* Header */}

      <motion.div
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-indigo-700 via-blue-700 to-cyan-600 rounded-3xl p-8 text-white shadow-xl"
      >
        <div className="flex items-center gap-4">

          <Brain size={42} />

          <div>

            <h2 className="text-4xl font-extrabold">
              AI CRO Audit Report
            </h2>

            <p className="text-blue-100 mt-2">
              AI-generated recommendations prioritized by business impact.
            </p>

          </div>

        </div>
      </motion.div>

      {/* Executive Summary */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-3xl p-8 mt-8 shadow"
      >

        <div className="flex items-center gap-3 mb-4">

          <BadgeCheck
            size={28}
            className="text-blue-600"
          />

          <h3 className="text-2xl font-bold text-blue-700">
            Executive Summary
          </h3>

        </div>

        <p className="text-gray-700 leading-8 text-lg">
          {audit.summary}
        </p>

      </motion.div>

      {/* Opportunities */}

      <div className="grid gap-8 mt-10">

        {audit.opportunities.map((item, index) => (

          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.15,
              duration: 0.5,
            }}
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            className="bg-white rounded-3xl shadow-xl border border-slate-200"
          >

            {/* Card Header */}

            <div className="bg-slate-50 border-b p-6 rounded-t-3xl">

              <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4">

                <div>

                  <div className="flex items-center gap-2 mb-3">

                    <Medal
                      size={20}
                      className="text-yellow-500"
                    />

                    <span className="text-blue-700 font-semibold">
                      {priorityLabel(index)}
                    </span>

                  </div>

                  <h3 className="text-3xl font-bold text-slate-800">
                    {item.title}
                  </h3>

                </div>

                <span
                  className={`px-5 py-3 rounded-full font-bold ${badgeColor(
                    item.impact
                  )}`}
                >
                  {item.impact} Impact
                </span>

              </div>

            </div>

            {/* Body */}

            <div className="p-8">

              <div className="grid lg:grid-cols-2 gap-8">

                <div className="space-y-6">

                  <div>

                    <div className="flex items-center gap-2 mb-3">

                      <Target
                        size={20}
                        className="text-blue-600"
                      />

                      <span className="font-semibold">
                        AI Confidence
                      </span>

                    </div>

                    <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-bold">
                      {item.confidence}
                    </span>

                  </div>

                  <div>

                    <div className="flex items-center gap-2 mb-3">

                      <Settings
                        size={20}
                        className="text-green-600"
                      />

                      <span className="font-semibold">
                        Implementation Effort
                      </span>

                    </div>

                    <span
                      className={`px-4 py-2 rounded-full font-bold ${effortColor(
                        item.effort
                      )}`}
                    >
                      {item.effort}
                    </span>

                  </div>

                </div>

                <div>

                  <div className="flex items-center gap-2 mb-4">

                    <TrendingUp
                      size={22}
                      className="text-indigo-600"
                    />

                    <h4 className="font-bold text-xl">
                      Why This Matters
                    </h4>

                  </div>

                  <p className="text-gray-700 leading-8">
                    {item.reason}
                  </p>

                </div>

              </div>

              {/* Experiment */}

              <motion.div
                whileHover={{
                  scale: 1.02,
                }}
                className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6"
              >

                <div className="flex items-center gap-3 mb-3">

                  <FlaskConical
                    size={24}
                    className="text-green-700"
                  />

                  <h4 className="text-xl font-bold text-green-700">
                    Recommended Experiment
                  </h4>

                </div>

                <p className="text-gray-700 leading-8">
                  {item.experiment}
                </p>

              </motion.div>

            </div>

          </motion.div>

        ))}

      </div>

    </div>
  );
}

export default AuditCard;