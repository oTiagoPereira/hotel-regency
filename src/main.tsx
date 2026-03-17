import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "@core/styles/global.css";
import App from "./App.tsx";
import "@core/i18n";
import { LoadingSpinner } from "@shared/index.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<LoadingSpinner />}>
      <App />
    </Suspense>
  </StrictMode>,
);
