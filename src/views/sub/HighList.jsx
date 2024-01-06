import { useOutletContext } from "react-router";
function HighList() {
  const {highList} = useOutletContext()
  return (
    <div>
      <h1>High list</h1>
    </div>
  );
}
export default HighList;
