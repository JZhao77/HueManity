import React from "react";
import { Hello } from "./components/Hello";
import { Footer } from "./components/Footer";
import { HomeButton } from "./components/HomeButton";

function App() {
  return (
    <div style={{ 
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      margin: 0,
      padding: 0
    }}>
      <main style={{ 
        textAlign: "center", 
        marginTop: "50px",
        flex: "1",
        paddingBottom: "20px"
      }}>
        <HomeButton />
        <h1>Welcome to My React App!</h1>
        <Hello />
      </main>
      <Footer />
    </div>
  );
}

export default App;
