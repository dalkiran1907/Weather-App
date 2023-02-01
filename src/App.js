import { useState } from "react";
import Form from "./componenets/form";
import { Info } from "./componenets/info";

function App() {
  const [info, setInfo] = useState([]);
  const [state, setState] = useState(false);

  return (
    <div>
      <Form info={info} setInfo={setInfo} setState={setState} />
      <Info info={info} state={state} />
    </div>
  );
}

export default App;
