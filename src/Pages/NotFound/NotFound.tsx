import React from "react";
import { Link } from "react-router-dom";

import "./index.css";

const NotFound = () => {
  return (
    <main className="not_found">
      <img
        src="https://www.gstatic.com/youtube/src/web/htdocs/img/monkey.png"
        alt="not-found"
      />
      <p>
        We are sorry, the page you requested could not be found
        <br /> Please go back to the homepage.
      </p>
      <Link to="/">Go to Home</Link>
    </main>
  );
};

export default NotFound;
