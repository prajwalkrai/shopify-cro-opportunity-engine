import { useEffect, useState } from "react";

function Loading() {

  const steps = [
    "🔍 Scraping Shopify store...",
    "📄 Reading website content...",
    "🤖 Gemini AI analyzing CRO...",
    "📊 Ranking opportunities...",
    "✅ Preparing final report..."
  ];

  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {

    const timer = setInterval(() => {

      setCurrentStep((prev) => {

        if (prev === steps.length - 1)
          return prev;

        return prev + 1;

      });

    }, 1200);

    return () => clearInterval(timer);

  }, []);

  return (

    <div className="bg-white rounded-xl shadow-lg p-8 mt-8 text-center">

      <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>

      <h2 className="text-2xl font-bold mt-6">
        AI is analyzing your Shopify Store...
      </h2>

      <p className="text-blue-600 font-semibold mt-4">
        {steps[currentStep]}
      </p>

      <div className="w-full bg-gray-200 rounded-full h-3 mt-8">

        <div
          className="bg-blue-600 h-3 rounded-full transition-all duration-700"
          style={{
            width: `${((currentStep + 1) / steps.length) * 100}%`
          }}
        />

      </div>

    </div>

  );

}

export default Loading;