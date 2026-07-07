import { useState } from "react";
import {
  Search,
  Globe,
  Swords,
  RotateCcw,
  Download,
  Rocket,
} from "lucide-react";
import API from "../api";

function URLForm({
  setWebsiteData,
  resetAnalysis,
  loading,
  setLoading,
  websiteData,
}) {
  const [url, setUrl] = useState("");
  const [competitor, setCompetitor] = useState("");
  const [error, setError] = useState("");

  const sampleStores = [
    { name: "Allbirds", url: "https://allbirds.com" },
    { name: "Gymshark", url: "https://gymshark.com" },
    { name: "MVMT", url: "https://mvmt.com" },
  ];

  const competitorStores = [
    { name: "Birdies", url: "https://birdies.com" },
    { name: "YoungLA", url: "https://youngla.com" },
    { name: "Fashion Nova", url: "https://fashionnova.com" },
  ];

  const analyzeWebsite = async () => {
    setError("");

    if (!url.trim()) {
      setError("Please enter a Shopify Store URL.");
      return;
    }

    try {
      new URL(url);
    } catch {
      setError("Please enter a valid Shopify Store URL.");
      return;
    }

    if (competitor.trim()) {
      try {
        new URL(competitor);
      } catch {
        setError("Please enter a valid Competitor URL.");
        return;
      }
    }

    if (
      competitor.trim() &&
      url.trim().toLowerCase() === competitor.trim().toLowerCase()
    ) {
      setError("Main Store and Competitor Store cannot be the same.");
      return;
    }

    try {
      setLoading(true);

      const response = await API.post("/audit", {
        url,
        competitor,
      });

      console.log("========== BACKEND RESPONSE ==========");
      console.log(response.data);
      console.log("======================================");

      setWebsiteData(response.data);
      setError("");
    } catch (err) {
      console.error("========== BACKEND ERROR ==========");
      console.error(err);

      if (err.response) {
        console.log("Status:", err.response.status);
        console.log("Data:", err.response.data);
      }

      console.log("===================================");

      setError(
        "Unable to analyze the website. Please check the URL or try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-10 -mt-6 relative z-10">

      {/* Heading */}

      <div className="text-center mb-10">

        <div className="flex justify-center items-center gap-3">

          <Search
            size={34}
            className="text-blue-600"
          />

          <h2 className="text-4xl font-extrabold text-slate-800">
            Analyze Shopify Store
          </h2>

        </div>

        <p className="text-gray-500 mt-3 text-lg">
          Enter a Shopify store URL and let AI generate a CRO audit.
        </p>

      </div>

      {/* Store URL */}

      <div className="mb-8">

        <div className="flex items-center gap-2 mb-3">

          <Globe
            size={20}
            className="text-blue-600"
          />

          <span className="font-semibold text-slate-700">
            Shopify Store URL
          </span>

        </div>

        <input
          type="text"
          placeholder="https://allbirds.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none p-4 text-lg transition"
        />

      </div>

      {/* Error */}

      {error && (
        <div className="bg-red-50 border border-red-300 rounded-xl p-4 mb-6">
          <p className="text-red-700 font-semibold">
            ⚠ {error}
          </p>
        </div>
      )}

      {/* Sample Stores */}

      <div className="mb-8">

        <p className="font-semibold text-slate-700 mb-3 flex items-center gap-2">

          <Rocket
            size={18}
            className="text-blue-600"
          />

          Quick Test Stores

        </p>

        <div className="flex flex-wrap gap-3">

          {sampleStores.map((store) => (
            <button
              key={store.name}
              type="button"
              onClick={() => setUrl(store.url)}
              className="bg-blue-100 hover:bg-blue-600 hover:text-white transition-all duration-300 px-4 py-2 rounded-full font-medium"
            >
              {store.name}
            </button>
          ))}

        </div>

      </div>

      {/* Competitor */}

      <div className="mb-8">

        <div className="flex items-center gap-2 mb-3">

          <Swords
            size={20}
            className="text-purple-600"
          />

          <span className="font-semibold text-slate-700">
            Competitor URL (Optional)
          </span>

        </div>

        <input
          type="text"
          placeholder="https://birdies.com"
          value={competitor}
          onChange={(e) => setCompetitor(e.target.value)}
          className="w-full rounded-xl border-2 border-slate-200 focus:border-purple-500 focus:outline-none p-4 text-lg transition"
        />

      </div>

      {/* Competitor Buttons */}

      <div className="mb-10">

        <p className="font-semibold text-slate-700 mb-3 flex items-center gap-2">

          <Swords
            size={18}
            className="text-purple-600"
          />

          Suggested Competitors

        </p>

        <div className="flex flex-wrap gap-3">

          {competitorStores.map((store) => (
            <button
              key={store.name}
              type="button"
              onClick={() => setCompetitor(store.url)}
              className="bg-purple-100 hover:bg-purple-600 hover:text-white transition-all duration-300 px-4 py-2 rounded-full font-medium"
            >
              {store.name}
            </button>
          ))}

        </div>

      </div>

      {/* Buttons */}

      <div className="flex flex-wrap gap-4 justify-center">

        <button
          onClick={analyzeWebsite}
          disabled={loading}
          className={`px-10 py-4 rounded-xl text-white font-bold text-lg shadow-lg transition-all duration-300 flex items-center gap-2 ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-600 to-indigo-700 hover:scale-105"
          }`}
        >
          <Search size={20} />

          {loading ? "Analyzing..." : "Analyze Store"}
        </button>

        <button
          onClick={resetAnalysis}
          className="px-10 py-4 rounded-xl bg-slate-700 hover:bg-slate-900 text-white font-bold shadow-lg transition-all duration-300 flex items-center gap-2"
        >
          <RotateCcw size={18} />

          New Analysis
        </button>

        {websiteData && (
          <button
            onClick={() =>
              document.getElementById("downloadPdfBtn")?.click()
            }
            className="px-10 py-4 rounded-xl bg-gradient-to-r from-green-600 to-emerald-700 hover:scale-105 text-white font-bold shadow-lg transition-all duration-300 flex items-center gap-2"
          >
            <Download size={18} />

            Download PDF
          </button>
        )}

      </div>

    </div>
  );
}

export default URLForm;