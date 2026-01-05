// External
import React from "react";

// Internal - Components
import { Header } from "../ui/Header";
import { Footer } from "../ui/Footer";

// Types
interface LayoutProps {
  children: React.ReactNode;
}

/**
 * Layout component that wraps pages with Header and Footer
 * Provides a consistent layout with sticky footer using flexbox
 */
export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
