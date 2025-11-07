import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
}

export function Button({ variant = "default", className = "", ...props }: ButtonProps) {
  const baseClasses = "px-4 py-2 rounded-md font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClasses: Record<string, string> = {
    default: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300",
    outline: "border border-white text-white hover:bg-white hover:text-blue-500 focus:ring-white",
    ghost: "bg-transparent text-white hover:bg-gray-100 focus:ring-gray-200",
  };

  return <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props} />;
}
