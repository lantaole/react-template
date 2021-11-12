import React from "react";
import ReactDOM from "react-dom";
import './app.less'
import CssDemo from '@/pages/CssDemo/index'
import BasicExample from "@/pages/BasicExample";



const App = () => (
  <div>
    <CssDemo/>
    <BasicExample/>
  </div>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
