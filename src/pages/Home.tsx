// import { Link } from "react-router-dom";

// export default function Home() {
//   return (
//     <div className="text-center p-4">
//       <h1 className="text-5xl font-bold mb-4">Welcome to HueManity</h1>
//       <p className="text-lg mb-8">
//         Changing the way social good is done by encouraging communities to volunteer together.
//       </p>
//       <Link to="/about" className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
//         Learn More About Us 
//       </Link>

//       <Link to="/profile" className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
//         View Your Profile
//       </Link>
//     </div>
//   );
// }

import { Link } from "react-router-dom";

export default function Home() {
  return (
    // Add space-y-6 to the container to put 1.5rem (24px) vertical
    // space between ALL direct children (h1, p, Link, Link).
    // Note: We remove individual mb-* classes from children.
    <div className="text-center p-4 space-y-6"> 
      {/* Removed mb-4 */}
      <h1 className="text-5xl font-bold">Welcome to HueManity</h1> 

      {/* Removed mb-8 */}
      <p className="text-lg"> 
        Changing the way social good is done by encouraging communities to volunteer together.
      </p>  

      {/* Removed mt-6 */}
      <p className="text-md">
      <Link to="/about" className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
        Learn More About Us 
      </Link>
      </p>
      
      {/* Removed mt-6 */}
      <p className="text-md">
      <Link to="/profile" className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
        View Your Profile
      </Link>
      </p>
    </div>
  );
}
