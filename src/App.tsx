import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import VerifyEmail from "./pages/VerifyEmial";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />"
        <Route path="/registration" element={<Registration />} />
        <Route path="/verify-email" element={<VerifyEmail/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
