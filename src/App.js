/** @format */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home/Home";
import Main from "./pages/main";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wallet" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
