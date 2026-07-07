import {
  Globe,
  Heading,
  FileText,
  Image,
  MousePointerClick,
} from "lucide-react";

function WebsiteInfo({ data }) {
  if (!data) return null;

  const website = data;
  return (
    <div className="mt-8 bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">

      {/* Header */}

      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6">

        <div className="flex items-center gap-3">

          <Globe size={32} />

          <h2 className="text-3xl font-bold">
            Website Overview
          </h2>

        </div>

        <p className="text-indigo-100 mt-2">
          Basic information extracted from the Shopify store.
        </p>

      </div>

      {/* Content */}

      <div className="grid md:grid-cols-2 gap-6 p-8">

        {/* Title */}

        <div className="bg-slate-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition">

          <div className="flex items-center gap-3 mb-3">

            <FileText
              size={22}
              className="text-blue-600"
            />

            <p className="text-gray-500 uppercase font-semibold">
              Website Title
            </p>

          </div>

          <p className="text-xl font-bold text-gray-800">
            {website.title || "Not Found"}
          </p>

        </div>

        {/* H1 */}

        <div className="bg-slate-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition">

          <div className="flex items-center gap-3 mb-3">

            <Heading
              size={22}
              className="text-indigo-600"
            />

            <p className="text-gray-500 uppercase font-semibold">
              Main Heading
            </p>

          </div>

          <p className="text-xl font-bold text-gray-800">
            {website.h1 || "Not Found"}
          </p>

        </div>

        {/* Description */}

        <div className="md:col-span-2 bg-slate-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition">

          <div className="flex items-center gap-3 mb-3">

            <FileText
              size={22}
              className="text-green-600"
            />

            <p className="text-gray-500 uppercase font-semibold">
              Meta Description
            </p>

          </div>

          <p className="text-gray-700 leading-8">
            {website.description || "No description available."}
          </p>

        </div>

      </div>

      {/* Statistics */}

      <div className="grid md:grid-cols-2 gap-6 bg-slate-100 p-8">

        <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition text-center">

          <Image
            size={44}
            className="mx-auto text-blue-600 mb-4"
          />

          <h3 className="text-gray-500 font-semibold">
            Total Images
          </h3>

          <p className="text-4xl font-bold text-blue-600 mt-3">
            {website.totalImages ?? 0}
          </p>

        </div>

        <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition text-center">

          <MousePointerClick
            size={44}
            className="mx-auto text-purple-600 mb-4"
          />

          <h3 className="text-gray-500 font-semibold">
            Total Buttons
          </h3>

          <p className="text-4xl font-bold text-purple-600 mt-3">
            {website.totalButtons ?? 0}
          </p>

        </div>

      </div>

    </div>
  );
}

export default WebsiteInfo;