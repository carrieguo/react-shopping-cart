import Home from "@/views/Home";
import Detail from "@/views/Detail";
import List from "@/views/List";
import Cart from "@/views/Cart";
import NotFound from "@/views/NotFound";
import HighList from "@/views/sub/HighList";
import HotList from "@/views/sub/HotList";

export default [
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        index: true, //默认路由
        element: <HighList></HighList>,
      },
      {
        path: "hot_list",
        element: <HotList></HotList>,
      },
    ],
  },
  {
    path: "/list",
    element: <List></List>,
  },
  {
    path: "/cart",
    element: <Cart></Cart>,
  },
  {
    path: "/detail/:id",
    element: <Detail></Detail>,
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
];
