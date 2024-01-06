import { createContext } from "react";
/* 
createHashRouter
RouterProvider 创建router实例，提供router配置
*/
import { createHashRouter, RouterProvider } from "react-router-dom";
import router from "@/config/router";
import { useEffect } from "react";
// import http from "@/utils/http";
import { useProducts } from "@/hooks";

export const productContext = createContext();

function App() {
  /* 
useEffect 宏任务
useLayoutEffect 微任务
事件环机制，微任务清空后GUI渲染，然后再出队列一个宏任务，再清空微任务队列，
一般将请求放到宏任务中，loading事件放到微任务中，先渲染loding状态，再去做请求，避免白屏，对用户友好
*/
  // useEffect(() => {
  /* 回调函数不能写成asyc函数，否则会报错是因为 async函数返回的是一个promise， 而 useEffect函数默认要返回一个清除函数 
    可以写成一个自执行函数来解决这个问题*/
  /*     (async () => {
      const res = await http("/products");
      console.log(res);
    })();
  }, []); */
  const [products] = useProducts("/products");
  return (
    <productContext.Provider value={products}>
      <RouterProvider router={createHashRouter(router)}></RouterProvider>
    </productContext.Provider>
  );
}

export default App;
