import { motion } from "framer-motion";
import { Store, Sparkles } from "lucide-react";

function Header() {
  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-3 rounded-xl text-white">
            <Store size={24} />
          </div>

          <div>
            <h1 className="text-2xl font-extrabold text-slate-800">
              Shopify CRO
            </h1>

            <p className="text-sm text-gray-500">
              Opportunity Engine
            </p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-semibold text-slate-600 hover:text-blue-600 transition"
          >
            Home
          </button>

          <button
            onClick={() =>
              window.scrollTo({
                top: 500,
                behavior: "smooth",
              })
            }
            className="font-semibold text-slate-600 hover:text-blue-600 transition"
          >
            Analyze
          </button>

          <button
            onClick={() =>
              document
                .getElementById("report")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="font-semibold text-slate-600 hover:text-blue-600 transition"
          >
            Report
          </button>
        </nav>

        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-5 py-2 rounded-full shadow cursor-pointer"
        >
          <Sparkles size={18} />
          <span className="font-semibold">Gemini AI</span>
        </motion.div>

      </div>
    </motion.header>
  );
}

export default Header;