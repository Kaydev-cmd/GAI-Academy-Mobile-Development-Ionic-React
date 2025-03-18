import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Welcome from "./Welcome";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <Welcome />
  </React.StrictMode>
);
