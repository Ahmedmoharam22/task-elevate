import { useState } from "react";
import { Link } from "react-router-dom";

function AppNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <>
        <nav className="fixed top-0 left-0 right-0 bg-white shadow z-50 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16 ">
              <Link to="/" className="text-xl font-bold text-gray-800">
                Products Gallery website
              </Link>

              <button
                className="md:hidden text-gray-700 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>

              <div
                className={`flex-col md:flex md:flex-row md:items-center gap-4 md:gap-6 ${
                  isOpen ? "flex" : "hidden"
                } md:flex`}
              >
                <Link to="/" className="text-gray-700 hover:text-blue-600">
                  Products
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="pt-28 px-4 max-w-7xl mx-auto"></div>
      </>
    </>
  );
}

export default AppNavbar;
