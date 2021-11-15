import React from "react";
import ReactDOM from "react-dom";
import './app.less'
import BasicLayout from '@/pages/layouts/BasicLayout';


const App = () => (
  <div>
    <BasicLayout/>
  </div>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
