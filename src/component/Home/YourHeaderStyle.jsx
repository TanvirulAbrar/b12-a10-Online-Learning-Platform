import React from "react";

const YourHeaderStyle = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-32 after:h-1 after:bg-gradient-to-r after:from-purple-500 after:to-indigo-600">
            Your Header Styles
          </h2>
          <p className="text-xl text-gray-600">
            Explore different header designs used throughout our platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Perfect H1 Header */}
          <div className="bg-base p-8 rounded-xl shadow-lg">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Perfect H1 Header
            </h1>
            <p className="text-gray-600 text-sm">
              Main section headers, dashboard titles
            </p>
          </div>

          {/* Perfect H2 Header */}
          <div className="bg-base p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Perfect H2 Header
            </h2>
            <p className="text-gray-600 text-sm">
              Section titles, main content headers
            </p>
          </div>

          {/* Perfect H3 Header */}
          <div className="bg-base p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Perfect H3 Header
            </h3>
            <p className="text-gray-600 text-sm">
              Subsection titles, card headers
            </p>
          </div>

          {/* Perfect H4 Header */}
          <div className="bg-base p-8 rounded-xl shadow-lg">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">
              Perfect H4 Header
            </h4>
            <p className="text-gray-600 text-sm">
              Small section headers, list items
            </p>
          </div>

          {/* Perfect H5 Header */}
          <div className="bg-base p-8 rounded-xl shadow-lg">
            <h5 className="text-lg font-semibold text-gray-900 mb-4">
              Perfect H5 Header
            </h5>
            <p className="text-gray-600 text-sm">Minor headings, labels</p>
          </div>

          {/* Perfect H6 Header */}
          <div className="bg-base p-8 rounded-xl shadow-lg">
            <h6 className="text-base font-semibold text-gray-900 mb-4">
              Perfect H6 Header
            </h6>
            <p className="text-gray-600 text-sm">Footnotes, small labels</p>
          </div>

          {/* Centered Header */}
          <div className="bg-base p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
              Centered Header
            </h2>
            <p className="text-gray-600 text-sm">For centered section titles</p>
          </div>

          {/* Header with Underline */}
          <div className="bg-base p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-0.5 after:bg-gray-700">
              Underlined Header
            </h2>
            <p className="text-gray-600 text-sm">
              Headers with decorative underline
            </p>
          </div>

          {/* Gradient Underline Header */}
          <div className="bg-base p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-0.5 after:bg-gradient-to-r after:from-purple-500 after:to-indigo-600">
              Gradient Underline
            </h2>
            <p className="text-gray-600 text-sm">
              Modern style with gradient underline
            </p>
          </div>
        </div>

        {/* Header examples from different sections */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Real Examples
          </h3>

          <div className="space-y-6">
            <div className="bg-base p-6 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Dashboard Overview
              </h2>
              <p className="text-gray-600">Example from Dashboard section</p>
            </div>

            <div className="bg-base p-6 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Us
              </h2>
              <p className="text-gray-600">Example from WhyChooseUs section</p>
            </div>

            <div className="bg-base p-6 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Top Instructors
              </h2>
              <p className="text-gray-600">
                Example from TopInstructor section
              </p>
            </div>

            <div className="bg-base p-6 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600">Example from FAQ section</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YourHeaderStyle;
