import React from "react";
import "./Breadcrumbs.css";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link } from "react-router-dom";

const CustomBreadcrumbs = () => {
  return (
    <div className="breadcrumbs">
      <Breadcrumbs separator="»" aria-label="breadcrumb">
        <Link color="inherit" to="/Home" className="breadcrumb__link">
          Home
        </Link>
        <Link color="inherit" to="/Home/Listing" className="breadcrumb__link">
          Listing
        </Link>
      </Breadcrumbs>
    </div>
  );
};

export default CustomBreadcrumbs;
