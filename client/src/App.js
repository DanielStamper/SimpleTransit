import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage, NotFoundPage, ProfilePage, MapPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
