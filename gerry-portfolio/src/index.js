import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "../node_modules/aos/dist/aos.css";
import "typeface-roboto";
import AOS from "aos";
AOS.init();

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
