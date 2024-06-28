import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Main from "./components/Body";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Main></Main>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

// function tuples(input) {
//   let result = [];

//   if (typeof input != "string") {
//     throw new TypeError("invalid input type");
//   } else if (!input || !input.trim().length) {
//     return [];
//   }

//   arr = input.split(" , ").map((group) => group.replace(/\(\^\)g/));
//   console.log(arr);
// }

// tuples("(1, 2, 3) , (4, 5, 6) , (7, 8, 9)");
