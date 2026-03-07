import { lazy } from "react";
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
import ContactPage from "../pages/Contact";
import DashboardLayout from "../layouts/DashboardLayout";

// Lazy load dashboard pages
const DashboardHome = lazy(() => import("../pages/Dashboard"));
const Reservations = lazy(() => import("../pages/Reservations"));
const Rooms = lazy(() => import("../pages/Rooms"));
const Guests = lazy(() => import("../pages/Guests"));
const Finance = lazy(() => import("../pages/Finance"));
const Reviews = lazy(() => import("../pages/Reviews"));
const Users = lazy(() => import("../pages/Users"));
const Settings = lazy(() => import("../pages/Settings"));

function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route index path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/verify-email" element={<VerifyEmail />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      <Route path="/accommodation" element={<Accommodation />} />
      <Route path="/accommodation/:id" element={<RoomDetails />} />
      <Route path="/payment" element={<FinalizeReservation />} />
      <Route path="/events" element={<Events />} />
      <Route path="/contact" element={<ContactPage />} />

      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="reservations" element={<Reservations />} />
        <Route path="rooms" element={<Rooms />} />
        <Route path="guests" element={<Guests />} />
        <Route path="finance" element={<Finance />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="users" element={<Users />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
