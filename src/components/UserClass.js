import React from "react";
import Shimmer from "./Shimmer";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      views: 0,
      flagged: false,
      userInfo: null,
    };
    console.log("Child Constructor Called");
  }

  async componentDidMount() {
    console.log("Child Component Did Mount Called");
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();

    debugger;
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Child Component Did Update Called");
    console.log(prevProps, prevState);
  }

  componentWillUnmount() {
    console.log("Child Component Will Unmount Called");
  }

  render() {
    console.log("Child Render Called");
    // const { name, locality, role } = this.props;
    const { views, flagged, userInfo } = this.state;

    if (!userInfo) return <Shimmer />;

    return (
      <div className="user-card">
        <h4
          onClick={() => {
            this.setState({
              views: this.state.views + 1,
            });
          }}
        >
          {userInfo.name}
        </h4>
        <p>{userInfo.location}</p>
        <p>{userInfo.company}</p>
        <div className="user-card-view">
          <span>{views} views</span>
          <span
            className="user-card-flagged"
            onClick={() => {
              this.setState({
                flagged: !this.state.flagged,
              });
            }}
          >
            {!flagged ? "Not Flagged" : "Flagged"}
          </span>
        </div>
      </div>
    );
  }
}

export default UserClass;
