import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1 style={{ color: "red" }}>Something very Important</h1>
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
