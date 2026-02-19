import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import HomePage from "./pages/home";

//components
import Sidebar from "./components/molecules/sidebar";

const Router = () => {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
