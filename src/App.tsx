import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import ComponentsDemo from "./pages/ComponentsDemo";
import Feed from "./pages/Feed";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout><Home /></Layout>} path="/" />
        <Route element={<Layout><About /></Layout>} path="/about" />
        <Route element={<Layout><Profile /></Layout>} path="/profile" />
        <Route element={<Layout><ComponentsDemo /></Layout>} path="/componentsdemo" />
        <Route element={<Layout><Feed /></Layout>} path="/feed" />
      </Routes>
    </Router>
  );
}
