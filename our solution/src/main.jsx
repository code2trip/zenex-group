import React, { createRoot } from "react-dom/client";
import Component_dd4ce32c from "./components/Component_dd4ce32c";
const rootElement = document.getElementById("root");

if (!rootElement) throw new Error("root element not found");

const root = createRoot(rootElement);
root.render(
  <div style={{ display: "inline-block", width: "1440px", background: "#f7f8fa" }} data-ignore="used only for top most containter width">
    <Component_dd4ce32c />
  </div>
);
