import React from "react";
import { Link } from "react-router-dom";

const First = () => {
  return (
    <div>
      <div>First</div>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default First;
