/*
 * @Author: Shanshiping shi-ping.shan@leica-geosystems.com.cn
 * @Date: 2023-08-09 09:16:56
 * @LastEditors: Shanshiping shi-ping.shan@leica-geosystems.com.cn
 * @LastEditTime: 2023-08-09 09:16:56
 * @Description: 
 */
// App.tsx
import * as React from "react";
import './index.less'
import Coffee from '@/assets/images/coffee.jpg'

const App: React.FC = () => {
  return <div className="wrapper">Cesium
  <img src={Coffee}/>
  </div>;
};

export default App;