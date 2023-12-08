/* outlet接收childern路由 */
import { Outlet, Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <h1>首页</h1>
      <Link to="/">精品列表</Link> | 
      <Link to="/hot_list">热门列表</Link> |
      <Link to="/list">全部列表</Link>
      <Outlet></Outlet>
    </div>
  );
}

export default Home;
