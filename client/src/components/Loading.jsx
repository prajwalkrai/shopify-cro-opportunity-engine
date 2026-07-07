import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  LoaderCircle,
  Globe,
  Search,
  Brain,
  FileText,
} from "lucide-react";

function Loading() {
  const steps = [
    {
      icon: Globe,
      text: "Connecting to Shopify store...",
    },
    {
      icon: Search,
      text: "Scraping website content...",
    },
    {
      icon: Brain,
      text: "Analyzing with Gemini AI...",
    },
    {
      icon: FileText,
      text: "Generating CRO recommendations...",
    },
  ];

  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) =>
        prev === steps.length - 1 ? prev : prev + 1
      );
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  const Icon = steps[step].icon;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mt-10"
    >
      <div className="bg-white rounded-3xl shadow-2xl p-12 text-center">

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
          className="flex justify-center"
        >
          <LoaderCircle
            size={70}
            className="text-blue-600"
          />
        </motion.div>

        <h2 className="text-3xl font-bold mt-8">
          AI Analysis in Progress
        </h2>

        <p className="text-gray-500 mt-3">
          Please wait while we analyze the Shopify store.
        </p>

        <motion.div
          key={step}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center items-center gap-3 mt-10"
        >
          <Icon
            size={24}
            className="text-indigo-600"
          />

          <span className="text-lg font-semibold">
            {steps[step].text}
          </span>

        </motion.div>

        {/* Progress */}

        <div className="mt-10">

          <div className="bg-gray-200 h-3 rounded-full overflow-hidden">

            <motion.div
              initial={{ width: "0%" }}
              animate={{
                width: `${((step + 1) / steps.length) * 100}%`,
              }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-blue-600 to-indigo-700 h-3 rounded-full"
            />

          </div>

          <p className="mt-3 text-sm text-gray-500">
            Step {step + 1} of {steps.length}
          </p>

        </div>

      </div>
    </motion.div>
  );
}

export default Loading;