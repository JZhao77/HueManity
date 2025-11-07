import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-center p-4">
      <h1 className="text-5xl font-bold mb-4">Welcome to HueManity</h1>
      <p className="text-lg mb-8">
        Changing the way social good is done by encouraging communities to volunteer together.
      </p>
      <Link to="/about" className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
        Learn More About Us
      </Link>
    </div>
  );
}
