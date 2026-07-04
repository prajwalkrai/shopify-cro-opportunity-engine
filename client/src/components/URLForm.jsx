import { useState } from "react";
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

  // Sample Shopify Stores
  const sampleStores = [
    { name: "Allbirds", url: "https://allbirds.com" },
    { name: "Gymshark", url: "https://gymshark.com" },
    { name: "MVMT", url: "https://mvmt.com" },
  ];

  // Competitor Stores
  const competitorStores = [
    { name: "Birdies", url: "https://birdies.com" },
    { name: "YoungLA", url: "https://youngla.com" },
    { name: "Fashion Nova", url: "https://fashionnova.com" },
  ];

  const analyzeWebsite = async () => {

    setError("");

    // Empty URL
    if (!url.trim()) {
      setError("Please enter a Shopify Store URL.");
      return;
    }

    // Validate Main URL
    try {
      new URL(url);
    } catch {
      setError("Please enter a valid Shopify Store URL.");
      return;
    }

    // Validate Competitor URL
    if (competitor.trim()) {
      try {
        new URL(competitor);
      } catch {
        setError("Please enter a valid Competitor URL.");
        return;
      }
    }

    // Prevent same website
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

      setWebsiteData(response.data);
      setError("");

    } catch (err) {

      console.log(err);

      setError(
        "Unable to analyze the website. Please check the URL or try again later."
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="bg-white rounded-xl shadow-lg p-8">

      <h2 className="text-2xl font-bold mb-6">
        Shopify Store URL
      </h2>

      <input
        type="text"
        placeholder="https://allbirds.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="w-full border rounded-lg p-4 text-lg"
      />

      {/* Error Message */}

      {error && (

        <div className="mt-4 bg-red-50 border border-red-300 rounded-lg p-4">

          <p className="text-red-700 font-semibold">
            ⚠ {error}
          </p>

        </div>

      )}

      {/* Sample Store Buttons */}

      <div className="flex flex-wrap gap-2 mt-4">

        <span className="text-sm font-semibold text-gray-600">
          Quick Test:
        </span>

        {sampleStores.map((store) => (

          <button
            key={store.name}
            type="button"
            onClick={() => setUrl(store.url)}
            className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-1 rounded-full text-sm"
          >
            {store.name}
          </button>

        ))}

      </div>

      <h2 className="text-2xl font-bold mt-8 mb-6">
        Competitor URL (Optional)
      </h2>

      <input
        type="text"
        placeholder="https://birdies.com"
        value={competitor}
        onChange={(e) => setCompetitor(e.target.value)}
        className="w-full border rounded-lg p-4 text-lg"
      />

      {/* Competitor Buttons */}

      <div className="flex flex-wrap gap-2 mt-4">

        <span className="text-sm font-semibold text-gray-600">
          Competitors:
        </span>

        {competitorStores.map((store) => (

          <button
            key={store.name}
            type="button"
            onClick={() => setCompetitor(store.url)}
            className="bg-purple-100 hover:bg-purple-200 text-purple-700 px-3 py-1 rounded-full text-sm"
          >
            {store.name}
          </button>

        ))}

      </div>

      <div className="flex flex-wrap gap-4 mt-8">

        <button
          onClick={analyzeWebsite}
          disabled={loading}
          className={`px-8 py-3 rounded-lg text-white font-semibold transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Analyzing..." : "Analyze Store"}
        </button>

        <button
          onClick={resetAnalysis}
          className="bg-gray-700 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold"
        >
          New Analysis
        </button>

        {websiteData && (
          <button
            onClick={() =>
              document.getElementById("downloadPdfBtn")?.click()
            }
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold"
          >
            📄 Download PDF
          </button>
        )}

      </div>

    </div>

  );

}

export default URLForm;