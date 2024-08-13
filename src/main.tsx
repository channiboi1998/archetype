import "./globals.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createSessionPersister, queryClient } from "./lib/tanstack/helpers.ts";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { HelmetProvider } from "react-helmet-async";
import { AppRoutes } from "./router/index.tsx";

const persister = createSessionPersister("ARCHETYPE:Query", sessionStorage);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
    >
      <HelmetProvider>
        <AppRoutes />
      </HelmetProvider>
    </PersistQueryClientProvider>
  </StrictMode>
);
