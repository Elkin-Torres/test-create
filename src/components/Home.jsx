import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>Home</div>
      <Link to="/first">
        <button>First</button>
      </Link>
      <Link to="/second">
        <button>Second</button>
      </Link>
    </div>
  );
};

export default Home;
