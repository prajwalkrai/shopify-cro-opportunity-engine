import { useState } from "react";
import { motion } from "framer-motion";

import Header from "./components/Header";
import Hero from "./components/Hero";
import URLForm from "./components/URLForm";
import Loading from "./components/Loading";
import EmptyState from "./components/EmptyState";
import ScoreCards from "./components/ScoreCards";
import WebsiteInfo from "./components/WebsiteInfo";
import AuditCard from "./components/AuditCard";
import ComparisonCard from "./components/ComparisonCard";
import DownloadPDF from "./components/DownloadPDF";
import Footer from "./components/Footer";

function App() {
  const [websiteData, setWebsiteData] = useState(null);
  const [loading, setLoading] = useState(false);

  const resetAnalysis = () => {
    setWebsiteData(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100">

      {/* Header */}
      <Header />

      {/* Hero */}
      <motion.div
        className="max-w-7xl mx-auto px-6 pt-8"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Hero />
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="max-w-6xl mx-auto px-6 py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <URLForm
          setWebsiteData={setWebsiteData}
          websiteData={websiteData}
          loading={loading}
          setLoading={setLoading}
          resetAnalysis={resetAnalysis}
        />

        {/* Loading */}
        {loading && <Loading />}

        {/* Empty State */}
        {!loading && !websiteData && <EmptyState />}

        {/* PDF Generator */}
        <DownloadPDF websiteData={websiteData} />

        {/* Report */}
        {websiteData && websiteData.audit && (
          <motion.div
            id="report"
            className="space-y-8 mt-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <ScoreCards audit={websiteData.audit} />

            <WebsiteInfo data={websiteData.website} />

            <ComparisonCard audit={websiteData.audit} />

            <AuditCard audit={websiteData.audit} />
          </motion.div>
        )}
      </motion.div>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;