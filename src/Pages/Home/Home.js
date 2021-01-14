import React from "react";
import Heading from "../../components/ui/Heading/Heading";
import Breadcrumbs from "../../components/ui/Breadcrumbs/CustomBreadcrumbs";
import PropertyList from "./components/PropertyList/PropertyList";

const Home = () => {
  return (
    <div>
      <Heading text="LISTINGS" />
      <Breadcrumbs />
      <PropertyList />
    </div>
  );
};

export default Home;
