function Footer() {
  return (
    <footer className="mt-20 bg-slate-900 text-white">

      <div className="max-w-7xl mx-auto px-8 py-14">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Brand */}

          <div>

            <h2 className="text-3xl font-bold leading-tight">
              Shopify CRO
              <br />
              Opportunity Engine
            </h2>

            <p className="text-gray-400 leading-8 mt-6">
              AI-powered Shopify CRO platform that analyzes Shopify
              stores, compares competitors, and generates prioritized
              conversion rate optimization recommendations to improve
              user experience and increase conversions.
            </p>

          </div>

          {/* Tech Stack */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              ⚡ Tech Stack
            </h3>

            <div className="flex flex-wrap gap-3">

              {[
                "React",
                "Node.js",
                "Express",
                "Gemini AI",
                "Tailwind CSS",
                "Playwright",
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-slate-800 hover:bg-blue-600 transition-all duration-300 px-4 py-2 rounded-full cursor-default shadow-md hover:shadow-blue-500/30"
                >
                  {tech}
                </span>
              ))}

            </div>

          </div>

          {/* Features */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              🚀 Features
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li className="hover:text-white transition">
                ✔ AI CRO Audit
              </li>

              <li className="hover:text-white transition">
                ✔ Competitor Comparison
              </li>

              <li className="hover:text-white transition">
                ✔ Website Analysis
              </li>

              <li className="hover:text-white transition">
                ✔ AI Recommendations
              </li>

              <li className="hover:text-white transition">
                ✔ PDF Report Generation
              </li>

            </ul>

            {/* Quick Links */}

            <div className="mt-8">

              <h3 className="text-xl font-semibold mb-4">
                🔗 Quick Links
              </h3>

              <div className="flex flex-col gap-3">

                <a
                  href="YOUR_LIVE_DEMO_URL"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition"
                >
                  🌐 Live Demo
                </a>

                <a
                  href="https://github.com/prajwalkrai/shopify-cro-opportunity-engine"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition"
                >
                  💻 GitHub Repository
                </a>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-slate-400 text-center md:text-left">
            © 2026 Shopify CRO Opportunity Engine • All Rights Reserved
          </p>

          <p className="text-slate-400 mt-4 md:mt-0">
            Built with ❤️ by{" "}
            <span className="font-semibold text-white">
              Prajwal Rai
            </span>
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;