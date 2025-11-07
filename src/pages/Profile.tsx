import { Button } from "../components/ui/Button";

const Profile: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-6">User Profile</h1>
      <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex flex-col items-center mb-6">
          <img
            src="https://via.placeholder.com/150" // Placeholder for profile picture
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 mb-4"
          />
          <h2 className="text-2xl font-semibold">John Doe</h2>
          <p className="text-gray-600">john.doe@example.com</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">About Me</h3>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
          <p className="text-gray-700">Phone: (123) 456-7890</p>
          <p className="text-gray-700">Location: New York, USA</p>
        </div>
        {/* Edit Profile Button */}
        <div className="absolute -bottom-16 right-8">
          <Button variant="outline">Edit Profile</Button>
        </div>
      </div>
      </div>
  );
};

export default Profile;
