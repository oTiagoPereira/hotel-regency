import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import {
  DashboardSidebar,
  DashboardHeader,
  LoadingSpinner,
} from "../components";
import { DashboardProvider } from "../contexts/DashboardContext";

export default function DashboardLayout() {
  return (
    <DashboardProvider>
      <div className="min-h-screen bg-surface flex flex-col md:block max-w-[1920px]">
        <DashboardSidebar />
        <DashboardHeader />
        <main className="flex-1 pt-18 p-4 md:p-6 transition-all duration-300 ml-0 md:ml-64 md:pt-24">
          <Suspense fallback={<LoadingSpinner />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </DashboardProvider>
  );
}
