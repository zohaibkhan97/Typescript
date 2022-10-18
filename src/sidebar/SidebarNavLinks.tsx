import React, { Fragment } from "react";
import SidebarLinker from "../reusable/SidebarLinker";
import {RiDashboardLine} from "react-icons/ri";

function SidebarNavLinks() {
  return (
    <Fragment>
    
      <SidebarLinker title="Home" path="home" Icon={RiDashboardLine} />
      <SidebarLinker title="Ship" path="home" Icon={RiDashboardLine} />
    </Fragment>
  );
}

export default SidebarNavLinks;
