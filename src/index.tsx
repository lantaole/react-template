import React from "react";
import ReactDOM from "react-dom";
// import headStyle from "./style/head.css";
// import contentStyle  from "./style/content.css";
import './app.less'
import CssDemo from '@/pages/CssDemo/index'

// const Heading = () => <h1 className={headStyle.heading}>test</h1>;
// const Content = () => <div className={contentStyle.content}>With CSS!</div>


const App = () => (
  <div>
    <CssDemo/>
  </div>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
