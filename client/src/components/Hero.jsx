import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowDown,
  BarChart3,
  TrendingUp,
  Target,
  Swords,
  FileText,
} from "lucide-react";

function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 rounded-3xl shadow-2xl text-white overflow-hidden"
    >
      <div className="grid lg:grid-cols-2 gap-10 items-center px-10 py-16 md:px-16">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full"
          >
            <Sparkles size={18} />

            <span className="font-semibold">
              AI Powered Shopify Analytics
            </span>

          </motion.div>

          <h1 className="text-5xl md:text-6xl font-extrabold mt-6 leading-tight">
            AI CRO
            <br />
            Opportunity Engine
          </h1>

          <p className="text-lg text-blue-100 mt-6 leading-8">
            Generate AI-powered conversion rate optimization reports,
            compare competitors and discover actionable opportunities
            to improve your Shopify store performance.
          </p>

          <motion.button
            whileHover={{
              scale: 1.06,
              y: -3,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={() =>
              window.scrollTo({
                top: 520,
                behavior: "smooth",
              })
            }
            className="mt-8 bg-white text-blue-700 font-bold px-8 py-4 rounded-xl shadow-lg flex items-center gap-3"
          >
            Analyze Store

            <ArrowDown size={20} />
          </motion.button>

        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="hidden lg:flex justify-center"
        >

          <motion.div
            whileHover={{
              scale: 1.03,
              rotate: 1,
            }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 w-96 shadow-2xl border border-white/20"
          >

            <div className="flex items-center gap-3 mb-6">

              <BarChart3 size={32} />

              <h3 className="text-2xl font-bold">
                Live Insights
              </h3>

            </div>

            <div className="space-y-4">

              <motion.div
                whileHover={{ x: 6 }}
                className="bg-white/10 rounded-xl p-4 flex items-center gap-3"
              >
                <TrendingUp size={20} />

                High Impact Opportunities
              </motion.div>

              <motion.div
                whileHover={{ x: 6 }}
                className="bg-white/10 rounded-xl p-4 flex items-center gap-3"
              >
                <Target size={20} />

                AI Confidence Score
              </motion.div>

              <motion.div
                whileHover={{ x: 6 }}
                className="bg-white/10 rounded-xl p-4 flex items-center gap-3"
              >
                <Swords size={20} />

                Competitor Comparison
              </motion.div>

              <motion.div
                whileHover={{ x: 6 }}
                className="bg-white/10 rounded-xl p-4 flex items-center gap-3"
              >
                <FileText size={20} />

                PDF Report
              </motion.div>

            </div>

          </motion.div>

        </motion.div>

      </div>
    </motion.section>
  );
}

export default Hero;