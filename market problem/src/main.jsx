import React, { createRoot } from "react-dom/client";
import Component_6fbeb4a from "./components/Component_6fbeb4a";
const rootElement = document.getElementById("root");

if (!rootElement) throw new Error("root element not found");

const root = createRoot(rootElement);
root.render(
  <div style={{ display: "inline-block", width: "1440px", background: "#f7f8fa" }} data-ignore="used only for top most containter width">
    <Component_6fbeb4a />
  </div>
);
