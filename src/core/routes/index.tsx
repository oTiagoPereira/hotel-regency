import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "@shared/pages/NotFound";
import Home from "@features/accommodation/pages/Home";
import Login from "@features/auth/pages/Login";
import Registration from "@features/auth/pages/Registration";
import VerifyEmail from "@features/auth/pages/VerifyEmail";
import ForgotPasswordPage from "@features/auth/pages/ForgotPasswordPage";
import ResetPasswordPage from "@features/auth/pages/ResetPasswordPage";
import Accommodation from "@features/accommodation/pages/Accommodation";
import RoomDetails from "@features/accommodation/pages/RoomDetails";
import FinalizeReservation from "@features/booking/pages/FinalizeReservation";
import Events from "@features/accommodation/pages/Events";
import ContactPage from "@features/accommodation/pages/Contact";
import DashboardLayout from "@core/layouts/DashboardLayout";
import ClientLayout from "@core/layouts/ClientLayout";

// Lazy load dashboard pages
const DashboardHome = lazy(() => import("@features/admin/pages/Dashboard"));
const Reservations = lazy(() => import("@features/admin/pages/Reservations"));
const Rooms = lazy(() => import("@features/admin/pages/Rooms"));
const Guests = lazy(() => import("@features/admin/pages/Guests"));
const Finance = lazy(() => import("@features/admin/pages/Finance"));
const Reviews = lazy(() => import("@features/admin/pages/Reviews"));
const Users = lazy(() => import("@features/admin/pages/Users"));
const Settings = lazy(() => import("@features/admin/pages/Settings"));

// Lazy load client pages
const ClientDashboardHome = lazy(() => import("@features/client/pages/ClientDashboardHome"));
const ClientReservations = lazy(() => import("@features/client/pages/ClientReservations"));
const ClientProfile = lazy(() => import("@features/client/pages/ClientProfile"));

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

      <Route path="/client" element={<ClientLayout />}>
        <Route index element={<ClientDashboardHome />} />
        <Route path="reservations" element={<ClientReservations />} />
        <Route path="profile" element={<ClientProfile />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
