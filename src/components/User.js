import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const User = () => {
  const [views, setViews] = useState(0);
  const [flagged, setFlagged] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    console.log("useEffect Called");
    fetchUserData();

    return () => {
      console.log("useEffect Return Called");
    };
  }, []);

  fetchUserData = async () => {
    const data = await fetch("https://api.github.com/users/akshay7693");
    const json = await data.json();
    console.log(json);

    setUser({ ...json });
  };

  if (!user) return <Shimmer />;

  return (
    <div className="user-card">
      <h4
        onClick={() => {
          setViews(views + 1);
        }}
      >
        {user.name}
      </h4>
      <p>{user.location}</p>
      <p>{user.company}</p>
      <div className="user-card-view">
        <span>{views} views</span>
        <span
          className="user-card-flagged"
          onClick={() => {
            setFlagged(!flagged);
          }}
        >
          {!flagged ? "Not Flagged" : "Flagged"}
        </span>
      </div>
    </div>
  );
};

export default User;
