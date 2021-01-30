import LiskerViewer from "./LiskerViewer";
import { useParams, useLocation } from "react-router-dom";

const App = () => {
  let { liskerid } = useParams();
  let query = useLocation().search;
  let size = query.split("=")[1];
  // validate user input
  if (size < 0 || size > 2000) {
    size = 500;
  }
  console.log(liskerid);
  if (liskerid !== "") {
    let numberOfTypes = liskerid.split("t").length - 1;
    let numberOfColors = liskerid.split("c").length - 1;
    let pattern = /[^0-9a-fA-Ftc]/g;

    if (
      numberOfTypes < 11 ||
      numberOfColors < 4 ||
      liskerid.length < 76 ||
      liskerid.length > 98 ||
      liskerid.match(pattern)
    ) {
      liskerid = "";
    }
  }
  return (
    <div>
      <LiskerViewer size={size} setLiskerId={liskerid} />
    </div>
  );
};

export default App;
