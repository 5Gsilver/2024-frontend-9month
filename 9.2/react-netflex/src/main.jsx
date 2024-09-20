import { createRoot } from "react-dom/client";
import { AuthProvider } from "./contexts/auth.context";
import { MoviesProvider } from "./contexts/movies.context";
import "./index.css";
import Router from "./router";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <MoviesProvider>
      <Router />
    </MoviesProvider>
  </AuthProvider>
);
