import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "default",
  size = "default",
  className = "",
  type = "button", // default to "button" to prevent accidental form submit
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  // Type-safe variant classes
  const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
    default: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300",
    outline: "border border-white text-white hover:bg-white hover:text-blue-500 focus:ring-white",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-200",
  };

  // Type-safe size classes
  const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
    default: "h-10 px-4 py-2",
    sm: "h-9 px-3 text-sm",
    lg: "h-11 px-8",
    icon: "h-10 w-10 p-0",
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return <button type={type} className={combinedClasses} {...props} />;
};
