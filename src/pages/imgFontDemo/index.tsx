import React from "react";

import style from "./index.less";

const flower = `https://qiniu.nsuedu.cn/react-buid-forAssets/flower.jpeg`

const Index: React.FC = () => {
  return (
    <div className={style.container}>
      <div >
        <div>
          <span className={style.iconHello}>{ }</span>
          <span className={style.hello}>你好</span>
        </div>


        <div>
          <span className={style.iconWorld}>{ }</span>
          <span className={style.world}>世界</span>
        </div>
      </div>


      <div className={style.bgStyle}>
        <img src={flower} width="200" height="200" alt="flower.jpeg无法显示" />
      </div>
    </div>
  );
};

export default Index;





