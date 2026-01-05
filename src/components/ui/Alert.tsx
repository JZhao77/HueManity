import React from "react";

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "success" | "error" | "warning" | "info";
  children: React.ReactNode;
}

export function Alert({ type = "info", className = "", children, ...props }: AlertProps) {
  const typeClasses: Record<string, string> = {
    success: "bg-green-100 border-green-400 text-green-800",
    error: "bg-red-100 border-red-400 text-red-800",
    warning: "bg-yellow-100 border-yellow-400 text-yellow-800",
    info: "bg-blue-100 border-blue-400 text-blue-800",
  };

  return (
    <div
      className={`border-l-4 p-4 rounded ${typeClasses[type]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
