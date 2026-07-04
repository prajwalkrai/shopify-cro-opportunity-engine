import { useState } from "react";

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

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <Hero />
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">

        {/* URL Form */}
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

        {/* Hidden PDF Generator */}
        <DownloadPDF />

        {/* Analysis Report */}
        {websiteData && websiteData.audit && (
          <div
            id="report"
            className="space-y-8 mt-10 animate-fade-in"
          >
            <ScoreCards audit={websiteData.audit} />

            <WebsiteInfo data={websiteData.website || websiteData} />

            <ComparisonCard audit={websiteData.audit} />

            <AuditCard audit={websiteData.audit} />
          </div>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;