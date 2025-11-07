import { Link } from 'react-router-dom';
import { Button } from "./ui/Button";

export function HomeButton() {
  return (
    <Link to="/"> 
      {/* 3. The positioning and styling wrapper */}
      <div className="absolute -bottom-16 right-8">
        {/* 4. Use your custom Button component. Ensure it's correctly closed. */}
        <Button variant="default">
          Home 
        </Button>
      </div>
    </Link>
  );
}