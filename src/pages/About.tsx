import { HomeButton } from "../components/HomeButton";

const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-6">About HueManity</h1>
      <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Our Purpose</h3>
          <p className="text-gray-700">
            HueManity will change the way social good is done by encouraging communities to volunteer together.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <p className="text-gray-700">Phone: (123) 456-7890</p>
          <p className="text-gray-700">Location: New York, USA</p>
        </div>
        <HomeButton></HomeButton>
      </div>
    </div>
  );
};

export default About;