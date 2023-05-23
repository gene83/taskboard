import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Login/Login";
import "./App.scss";
import Home from "../Home/Home";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
