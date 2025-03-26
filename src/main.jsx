import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./Routes/Router.jsx";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
   
     <AuthProvider>
     <HelmetProvider>
     <div className="max-w-screen-xl mx-auto">
        <RouterProvider router={router} />
      </div>
      </HelmetProvider>
     </AuthProvider>
   
  </StrictMode>
);
