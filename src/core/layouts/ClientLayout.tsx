import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import { ClientSidebar, ClientHeader } from "@features/client";
import { LoadingSpinner } from "@shared";

export default function ClientLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="min-h-screen bg-surface flex flex-col md:block max-w-[1920px]">
      <ClientSidebar isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      <ClientHeader toggleSidebar={toggleSidebar} />
      <main className="flex-1 pt-18 p-4 md:p-6 transition-all duration-300 ml-0 md:ml-64 md:pt-24">
        <Suspense fallback={<LoadingSpinner />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}
