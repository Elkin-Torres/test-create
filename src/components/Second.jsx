import React from "react";
import { Link } from "react-router-dom";

const Second = () => {
  return (
    <div>
      <div>Second</div>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default Second;
