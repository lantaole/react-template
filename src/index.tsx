import React from "react";
import ReactDOM from "react-dom";
import './app.less'
import CssDemo from '@/pages/CssDemo/index'
import imgDemo from '@/assets/img/01.jpg'




const App = () => (
  <div>
    <CssDemo/>
    <img className='myImg' src={imgDemo} alt=""/>
  </div>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
