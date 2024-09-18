import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";

import App from "@/App.tsx";
// Internal components
import { Toaster } from "@/components/ui/toaster.tsx";
import { WalletProvider } from "@/components/WalletProvider.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home/page";
import LivestreamPage from "./pages/live/[id]/page";
import ProfilePage from "./pages/profile/[id]/page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/live/:channel",
        element: <LivestreamPage />,
      },
      {
        path: "/profile/:id",
        element: <ProfilePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WalletProvider>
      <RouterProvider router={router} />
      <Toaster />
    </WalletProvider>
  </React.StrictMode>,
);
