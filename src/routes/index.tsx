import { Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import VerifyEmail from "../pages/VerifyEmail";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import Accommodation from "../pages/Accommodation";
import RoomDetails from "../pages/RoomDetails";
import FinalizeReservation from "../pages/FinalizeReservation";
import Events from "../pages/Events";

function AppRoutes() {
  return (
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/verify-email" element={<VerifyEmail/>} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/accommodation" element={<Accommodation />} />
        <Route path="/accommodation/:id" element={<RoomDetails />}/>
        <Route path="/payment" element={<FinalizeReservation />} />
        <Route path="/events" element={<Events />} />
      </Routes>
  )
}

export default AppRoutes;
