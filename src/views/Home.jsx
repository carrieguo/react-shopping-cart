import { useContext, useMemo } from "react";
import { productContext } from "@/App";
/* outlet接收childern路由 */
import { Outlet, Link } from "react-router-dom";
function Home() {
  const products = useContext(productContext);
  const hotList = useMemo(
    () => products.filter((item) => item.hot),
    [products]
  );
  const highList = useMemo(()=>products.filter(item=>item.high),[products])

  return (
    <div>
      <h1>首页</h1>
      <Link to="/">精品列表</Link> |<Link to="/hot_list">热门列表</Link> |
      <Link to="/list">全部列表</Link>
      <Outlet context={{hotList,highList}}></Outlet>
    </div>
  );
}

export default Home;
