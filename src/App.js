import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="container">
      <Navigation />
      <Outlet />
    </div>
  );
}

export default App;
