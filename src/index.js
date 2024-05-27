import React from "react";
import ReactDOM from "react-dom";
import Header from "./component/Header";
const App = () => {
  return (
    <React.Fragment>
      <h1>This is header outside the div</h1>
      <div>
        {/* <Header></Header>  */}
        {/* <h1>This is a header</h1> */}
        This is my App
      </div>
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
