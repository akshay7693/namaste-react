import React from "react";
import ReactDOM from "react-dom/client";

const reactElement = React.createElement(
  "p",
  { className: "para" },
  "I am para"
);

const randomVar = "I am random Variable";

// let elem = "";

const TitleComponent = () => {
  return (
    <div className="titlediv">
      <h1>Namaste From Functional Compoenent</h1>
    </div>
  );
};
// {elem ? elem : "Not Present"}

var elem = (
  <div className="elemDiv">
    Hello {randomVar} {reactElement}
    <TitleComponent />
  </div>
);

const HeadingComponent = () => (
  <div className="container">
    {TitleComponent()}
    <TitleComponent />
    <TitleComponent>
      <p>From Insise TitleComponent</p>
    </TitleComponent>
    {elem}
    <p>This is cominng from Heading Component</p>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
