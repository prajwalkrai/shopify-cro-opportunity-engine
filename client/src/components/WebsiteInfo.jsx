function WebsiteInfo({ data }) {
  if (!data || !data.website) return null;

  const website = data.website;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">

      <h2 className="text-3xl font-bold mb-8">
        🌐 Website Information
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="border rounded-xl p-5 bg-slate-50">
          <p className="text-gray-500 font-semibold mb-2">
            Store Title
          </p>

          <p className="text-lg font-semibold text-slate-800">
            {website.title || "Not Found"}
          </p>
        </div>

        <div className="border rounded-xl p-5 bg-slate-50">
          <p className="text-gray-500 font-semibold mb-2">
            Main Heading
          </p>

          <p className="text-lg font-semibold text-slate-800">
            {website.h1 || "Not Found"}
          </p>
        </div>

      </div>

      <div className="border rounded-xl p-5 bg-slate-50 mt-6">

        <p className="text-gray-500 font-semibold mb-2">
          Description
        </p>

        <p className="text-slate-700 leading-7">
          {website.description || "Not Available"}
        </p>

      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-8">

        <div className="bg-blue-50 rounded-xl p-5 text-center">

          <div className="text-3xl mb-2">🖼️</div>

          <p className="text-sm text-gray-500">
            Images
          </p>

          <p className="text-3xl font-bold text-blue-600">
            {website.totalImages}
          </p>

        </div>

        <div className="bg-green-50 rounded-xl p-5 text-center">

          <div className="text-3xl mb-2">🔘</div>

          <p className="text-sm text-gray-500">
            Buttons
          </p>

          <p className="text-3xl font-bold text-green-600">
            {website.totalButtons}
          </p>

        </div>

        <div className="bg-yellow-50 rounded-xl p-5 text-center">

          <div className="text-3xl mb-2">📄</div>

          <p className="text-sm text-gray-500">
            Description Length
          </p>

          <p className="text-3xl font-bold text-yellow-600">
            {website.description?.length || 0}
          </p>

        </div>

        <div className="bg-purple-50 rounded-xl p-5 text-center">

          <div className="text-3xl mb-2">🏷️</div>

          <p className="text-sm text-gray-500">
            Title Length
          </p>

          <p className="text-3xl font-bold text-purple-600">
            {website.title?.length || 0}
          </p>

        </div>

      </div>

    </div>
  );
}

export default WebsiteInfo;