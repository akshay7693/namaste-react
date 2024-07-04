import User from "./User";
import UserClass from "./UserClass";

import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor Called");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount Called");
  }

  componentWillUnmount() {
    console.log("Parent Component Will Unmount Called");
  }

  render() {
    console.log("Parent Render Called");
    return (
      <div className="about">
        <h1>About Us</h1>
        <div className="about-card-container">
          <User />
          <UserClass />
          {/* <UserClass name="Mike Tyson" locality="NY" role="Boxer" /> */}
        </div>
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div className="about">
//       <h1>About Us</h1>
//       <div className="about-card-container">
//         <User name="Neelam Gupta" locality="Bhopal" role="Business Analyst" />
//         <UserClass
//           name="Akshay Porwal"
//           locality="Pune"
//           role="Frontend Engineer"
//         />
//       </div>
//     </div>
//   );
// };

export default About;
