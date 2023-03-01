import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App/App";
import isOdd from "is-odd";

console.log(isOdd(5));

createRoot(document.getElementById("root")).render(<App />);
