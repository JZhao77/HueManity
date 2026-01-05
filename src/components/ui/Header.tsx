import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center">
        {/* Left: Logo */}
        <Link to="/" className="text-xl font-bold text-blue-600">
          HueManity
        </Link>

        {/* Center: Navigation */}
        <nav className="flex flex-1 justify-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2">
            About
          </Link>
          <Link to="/profile" className="text-gray-700 hover:text-blue-600 px-3 py-2">
            Profile
          </Link>
        </nav>

        {/* Right: Placeholder for buttons/avatar */}
        <div className="w-[120px]" />
      </div>
    </header>
  );
}
