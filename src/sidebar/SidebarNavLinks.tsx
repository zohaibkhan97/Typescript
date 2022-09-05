import React, { Fragment } from "react";
import SidebarLinker from "../reusable/SidebarLinker";

function SidebarNavLinks() {
  return (
    <Fragment>
      <SidebarLinker title="Home" path="home" />
    </Fragment>
  );
}

export default SidebarNavLinks;
