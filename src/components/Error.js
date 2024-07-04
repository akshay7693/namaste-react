import { useRouteError } from "react-router-dom";
import Header from "./Header";

const Error = () => {
  const err = useRouteError();

  return (
    <div className="error">
      <Header />
      <h1>Oopsssss....</h1>
      <p>Something went wrong!</p>
      <p>
        {err.status} - {err.statusText}
      </p>
    </div>
  );
};

export default Error;
