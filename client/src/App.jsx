import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="max-w-screen-xl mx-auto px-2">
      <Navbar />
      <main className="mt-8 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
