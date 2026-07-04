import { useState } from "react";

import Header from "./components/Header";
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

    <div className="min-h-screen bg-slate-100">

      <Header />

      <div className="max-w-6xl mx-auto p-8">

        <URLForm
          setWebsiteData={setWebsiteData}
          websiteData={websiteData}
          loading={loading}
          setLoading={setLoading}
          resetAnalysis={resetAnalysis}
        />

        {/* Loading Screen */}
        {loading && <Loading />}

        {/* Empty State */}
        {!loading && !websiteData && <EmptyState />}

        {/* Hidden PDF Button */}
        <DownloadPDF />

        {/* Analysis Report */}
        {websiteData && websiteData.audit && (

          <div id="report">

            <ScoreCards audit={websiteData.audit} />

            <WebsiteInfo data={websiteData} />

            <ComparisonCard audit={websiteData.audit} />

            <AuditCard audit={websiteData.audit} />

          </div>

        )}

      </div>

      <Footer />

    </div>

  );

}

export default App;