import { useOutletContext } from "react-router";
function HotList() {
  const {hotList} = useOutletContext()
  console.log(hotList)
    return (
      <div>
        <h1>Hot List</h1>
      </div>
    );
  }
  export default HotList;
  