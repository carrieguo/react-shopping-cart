/* 
createHashRouter
RouterProvider 创建router实例，提供router配置
*/
import { createHashRouter, RouterProvider } from "react-router-dom";
import router from "@/config/router";
function App() {
  return <RouterProvider router={createHashRouter(router)}></RouterProvider>;
}

export default App;
