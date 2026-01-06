// import { useState } from "react";
// import { Link } from "react-router-dom";
// import GeneralTable from "../components/ui/Table";

// export default function Home() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const headers = ["Organization", "Total Hours", "Location"];
//   const rows = [
//     ["Soup Kitchen", 3.5, "New York, NY"],
//     ["Food Bank", 4.0, "Los Angeles, CA"],
//     ["Animal Shelter", 2.0, "Chicago, IL"],
//     ["Community Garden", 5.0, "Austin, TX"],
//   ];

//   const handleLogin = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Login attempt:", { email, password });
//   };

//   return (
//     <div className="min-h-screen bg-blue-50 flex flex-col items-center px-4 py-16">
//       {/* Hero Section */}
//       <div className="text-center max-w-3xl mb-16 space-y-6">
//         <h1 className="text-5xl md:text-6xl font-bold leading-snug">
//           Start <span className="text-blue-600">Tracking</span> <br />
//           Your Hours
//         </h1>
//         <p className="text-lg md:text-xl text-gray-700">
//           Changing the way social good is done by encouraging communities to volunteer together.
//         </p>
//         <div className="flex flex-wrap justify-center gap-4">
//           <Link
//             to="/about"
//             className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md transition"
//           >
//             Learn More About Us
//           </Link>
//           <Link
//             to="/componentsdemo"
//             className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
//           >
//             Components Demo
//           </Link>
//           <Link
//             to="/feed"
//             className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
//           >
//             Feed
//           </Link>
//           <Link
//             to="/profile"
//             className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
//           >
//             View Your Profile
//           </Link>
//         </div>
//       </div>

//       {/* Main Section: Table + Login */}
//       <div className="flex flex-col lg:flex-row items-start justify-center gap-8 w-full max-w-6xl">
//         {/* Table */}
//         <div className="w-full lg:w-2/3 p-6 bg-white rounded-lg shadow-lg">
//           <h2 className="text-2xl font-bold mb-4">Community Service</h2>
//           <GeneralTable
//             headers={headers}
//             rows={rows}
//             caption="Track Your Volunteering Hours"
//           />
//         </div>

//         {/* Login Form */}
//         <div className="w-full lg:w-1/3 p-6 bg-white rounded-lg shadow-lg">
//           <h2 className="text-2xl font-bold mb-4">Login</h2>
//           <form onSubmit={handleLogin} className="space-y-4">
//             <div>
//               <label className="block text-gray-700 mb-1">Email</label>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="you@example.com"
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 mb-1">Password</label>
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="••••••••"
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 shadow-md transition"
//             >
//               Login
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { Link } from "react-router-dom";
import GeneralTable from "../components/ui/Table";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const headers = ["Organization", "Total Hours", "Location"];
  const rows = [
    ["Soup Kitchen", 3.5, "New York, NY"],
    ["Food Bank", 4.0, "Los Angeles, CA"],
    ["Animal Shelter", 2.0, "Chicago, IL"],
    ["Community Garden", 5.0, "Austin, TX"],
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
  };

  return (
    <div className="flex flex-col items-center px-4 pt-16 pb-8 w-full">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mb-16 space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold leading-snug">
          Start <span className="text-blue-600">Tracking</span> <br />
          Your Hours
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          Changing the way social good is done by encouraging communities to volunteer together.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/about"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md transition"
          >
            Learn More About Us
          </Link>
          <Link
            to="/componentsdemo"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
          >
            Components Demo
          </Link>
          <Link
            to="/feed"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
          >
            Feed
          </Link>
          <Link
            to="/profile"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
          >
            View Your Profile
          </Link>
        </div>
      </div>

      {/* Main Section: Table + Login */}
      <div className="flex flex-col lg:flex-row items-start justify-center gap-8 w-full max-w-6xl">
        {/* Table */}
        <div className="w-full lg:w-2/3 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Community Service</h2>
          <GeneralTable
            headers={headers}
            rows={rows}
            caption="Track Your Volunteering Hours"
          />
        </div>

        {/* Login Form */}
        <div className="w-full lg:w-1/3 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 shadow-md transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
