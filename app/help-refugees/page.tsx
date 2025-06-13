const HelpRefugeesPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Help Refugees</h1>
      <p className="mb-4">There are many ways you can help refugees. Here are a few ideas:</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Donate Section */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Donate</h2>
          <p className="mb-2">
            Your financial contributions can provide essential resources like food, shelter, and medical care.
          </p>
          <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Donate Now
          </a>
        </div>

        {/* Volunteer Section */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Volunteer</h2>
          <p className="mb-2">Offer your time and skills to organizations that support refugees.</p>
          <a href="#" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Volunteer
          </a>
        </div>

        {/* Advocate Section */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Advocate</h2>
          <p className="mb-2">Raise awareness and support policies that protect refugees' rights.</p>
          <a href="#" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
            Learn More
          </a>
        </div>

        {/* Get Involved Section - Dropdown Menu */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Get Involved</h2>
          <div className="relative inline-block text-left w-full">
            <div>
              <button
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                id="menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                Choose an action
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div
              className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex={-1}
            >
              <div className="py-1" role="none">
                <a
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-0"
                >
                  Get involved
                </a>
                <a
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-1"
                >
                  Donate
                </a>
                <a
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-2"
                >
                  Volunteer
                </a>
                <a
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-3"
                >
                  Fundraising and events
                </a>
                <a
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-4"
                >
                  Partner with us
                </a>
                <a
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-5"
                >
                  Teaching resources
                </a>
                <a
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-6"
                >
                  Jobs
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HelpRefugeesPage
