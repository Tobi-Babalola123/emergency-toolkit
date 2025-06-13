import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search, ChevronDown, ChevronUp } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [dropdowns, setDropdowns] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleDropdown = (key: string) => {
    setDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!isMounted) return null;
  return (
    <header className="bg-white border-b border-gray-200">
      {/* Top Row */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-600 flex items-center justify-center">
                <span className="text-white text-lg font-bold">+</span>
              </div>
              <span className="text-2xl font-semibold text-gray-900">
                CrisisAid
              </span>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-4">
              {/* Desktop Search */}
              <div className="hidden md:flex items-center space-x-2">
                <Search className="w-5 h-5 text-gray-600" />
                <span className="text-sm text-gray-600">SEARCH</span>
              </div>

              {/* Donate Button */}
              <button className="bg-red-600 text-white px-6 py-2 font-semibold hover:bg-red-700">
                DONATE
              </button>

              {/* Hamburger (Mobile Only) */}
              <button
                className="md:hidden focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Nav */}
      <div className="max-w-7xl ml-32 gap-6 mx-auto px-4 sm:px-6 lg:px-8 hidden md:flex items-center">
        {/* Repeat this pattern for each dropdown link */}
        <div className="group relative">
          <Link
            href="/get-help"
            className="text-xl text-gray-700 font-bold hover:text-gray-900 px-4 py-4 inline-block group-hover:border-b-2 group-hover:border-red-600"
          >
            Toolkits
          </Link>
          <div className="absolute top-full left-0 bg-white shadow-lg hidden group-hover:block z-50 w-[600px]">
            <div className="grid grid-cols-3 gap-6 p-6">
              <ul className="space-y-2">
                <li>
                  <Link href="/get-help">Mental Health Crisis</Link>
                </li>
                <li>
                  <Link href="/hire-wheelchair">First Aid Basics</Link>
                </li>
                <li>
                  <Link href="/help-refugees">Domestic Violence</Link>
                </li>
                <li>
                  <Link href="/help-refugees">Grief & Loss</Link>
                </li>
              </ul>
              <ul className="space-y-2">
                <li>
                  <Link href="/family-reunion">Job Loss Support</Link>
                </li>
                <li>
                  <Link href="/emergency">Natural Disaster Response</Link>
                </li>
                <li>
                  <Link href="#">Fire Outbreak Guide</Link>
                </li>
              </ul>
              <ul className="space-y-2"></ul>
            </div>
          </div>
        </div>

        {/* Repeat similar group dropdowns for other navlinks... */}
        <div className="group relative">
          <Link
            href="#"
            className="text-xl text-gray-700 font-bold hover:text-gray-900 px-4 py-4 inline-block group-hover:border-b-2 group-hover:border-red-600"
          >
            Get Help
          </Link>
          <div className="absolute top-full left-0 bg-white shadow-lg hidden group-hover:block z-50 w-[600px]">
            <div className="grid grid-cols-3 gap-6 p-6">
              <ul className="space-y-2">
                <li>
                  <Link href="#">Emergency Numbers</Link>
                </li>
                <li>
                  <Link href="#">Nearby Resources</Link>
                </li>
                <li>
                  <Link href="#">Crisis Chat/Hotline</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="group relative">
          <Link
            href="#"
            className="text-xl text-gray-700 font-bold hover:text-gray-900 px-4 py-4 inline-block group-hover:border-b-2 group-hover:border-red-600"
          >
            Learn
          </Link>
          <div className="absolute top-full left-0 bg-white shadow-lg hidden group-hover:block z-50 w-[600px]">
            <div className="grid grid-cols-3 gap-6 p-6">
              <ul className="space-y-2">
                <li>
                  <Link href="#">Courses & Guides</Link>
                </li>
                <li>
                  <Link href="#">Video Tutorials</Link>
                </li>
                <li>
                  <Link href="#">Stories/Case Studies</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="group relative">
          <Link
            href="#"
            className="text-xl text-gray-700 font-bold hover:text-gray-900 px-4 py-4 inline-block group-hover:border-b-2 group-hover:border-red-600"
          >
            Get Involved
          </Link>
          <div className="absolute top-full left-0 bg-white shadow-lg hidden group-hover:block z-50 w-[600px]">
            <div className="grid grid-cols-3 gap-6 p-6">
              <ul className="space-y-2">
                <li>
                  <Link href="#">Volunteer</Link>
                </li>
                <li>
                  <Link href="#">Donate</Link>
                </li>
                <li>
                  <Link href="#">Share a Story</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="group relative">
          <Link
            href="#"
            className="text-xl text-gray-700 font-bold hover:text-gray-900 px-4 py-4 inline-block group-hover:border-b-2 group-hover:border-red-600"
          >
            About
          </Link>
          <div className="absolute top-full left-0 bg-white shadow-lg hidden group-hover:block z-50 w-[600px]">
            <div className="grid grid-cols-3 gap-6 p-6">
              <ul className="space-y-2">
                <li>
                  <Link href="#">Our Mission</Link>
                </li>
                <li>
                  <Link href="#">Team</Link>
                </li>
                <li>
                  <Link href="#">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Repeat for Learn, Get Involved, About... */}
      </div>

      {/* Mobile Fullscreen Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white overflow-y-auto p-6">
          {/* Close Button */}
          <div className="flex justify-end mb-4">
            <button
              className="text-gray-800"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Search Input */}
          <div className="flex items-center mb-6">
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 border border-gray-300 rounded-l px-4 py-2"
            />
            <button className="bg-red-600 text-white px-4 py-2 rounded-r">
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Nav Links with Dropdowns */}
          <ul className="space-y-4">
            {/* Toolkits */}
            <li>
              <button
                className="w-full flex justify-between items-center font-semibold text-gray-800"
                onClick={() => toggleDropdown("toolkits")}
              >
                Toolkits {dropdowns.toolkits ? <ChevronUp /> : <ChevronDown />}
              </button>
              {dropdowns.toolkits && (
                <ul className="pl-4 mt-2 space-y-2 text-sm text-gray-600">
                  <li>
                    <Link href="/get-help">Mental Health Crisis</Link>
                  </li>
                  <li>
                    <Link href="/hire-wheelchair">First Aid Basics</Link>
                  </li>
                  <li>
                    <Link href="/help-refugees">Domestic Violence</Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Get Help */}
            <li>
              <button
                className="w-full flex justify-between items-center font-semibold text-gray-800"
                onClick={() => toggleDropdown("help")}
              >
                Get Help {dropdowns.help ? <ChevronUp /> : <ChevronDown />}
              </button>
              {dropdowns.help && (
                <ul className="pl-4 mt-2 space-y-2 text-sm text-gray-600">
                  <li>
                    <Link href="#">Emergency Numbers</Link>
                  </li>
                  <li>
                    <Link href="#">Nearby Resources</Link>
                  </li>
                  <li>
                    <Link href="#">Crisis Chat/Hotline</Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Learn */}
            <li>
              <button
                className="w-full flex justify-between items-center font-semibold text-gray-800"
                onClick={() => toggleDropdown("learn")}
              >
                Learn {dropdowns.learn ? <ChevronUp /> : <ChevronDown />}
              </button>
              {dropdowns.learn && (
                <ul className="pl-4 mt-2 space-y-2 text-sm text-gray-600">
                  <li>
                    <Link href="#">Courses & Guides</Link>
                  </li>
                  <li>
                    <Link href="#">Video Tutorials</Link>
                  </li>
                  <li>
                    <Link href="#">Stories/Case Studies</Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Get Involved */}
            <li>
              <button
                className="w-full flex justify-between items-center font-semibold text-gray-800"
                onClick={() => toggleDropdown("involved")}
              >
                Get Involved{" "}
                {dropdowns.involved ? <ChevronUp /> : <ChevronDown />}
              </button>
              {dropdowns.involved && (
                <ul className="pl-4 mt-2 space-y-2 text-sm text-gray-600">
                  <li>
                    <Link href="#">Volunteer</Link>
                  </li>
                  <li>
                    <Link href="#">Donate</Link>
                  </li>
                  <li>
                    <Link href="#">Share a Story</Link>
                  </li>
                </ul>
              )}
            </li>

            {/* About */}
            <li>
              <button
                className="w-full flex justify-between items-center font-semibold text-gray-800"
                onClick={() => toggleDropdown("about")}
              >
                About {dropdowns.about ? <ChevronUp /> : <ChevronDown />}
              </button>
              {dropdowns.about && (
                <ul className="pl-4 mt-2 space-y-2 text-sm text-gray-600">
                  <li>
                    <Link href="#">Our Mission</Link>
                  </li>
                  <li>
                    <Link href="#">Team</Link>
                  </li>
                  <li>
                    <Link href="#">Contact</Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
