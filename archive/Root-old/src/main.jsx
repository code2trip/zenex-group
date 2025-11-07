import React, { createRoot } from "react-dom/client";
import Component_d8090930 from "./components/Component_d8090930";
const rootElement = document.getElementById("root");

if (!rootElement) throw new Error("root element not found");

const root = createRoot(rootElement);
root.render(
  <div style={{ display: "inline-block", width: "1322px" }} data-ignore="used only for top most containter width">
    <Component_d8090930 />
  </div>
);
