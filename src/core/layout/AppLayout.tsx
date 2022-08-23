import React, { Fragment } from "react";
import Navbar from "../../components/Navbar";

export default function AppLayout(props : any) {
  return <Fragment>

    <Navbar/>
    {props.children}
    
  </Fragment>
}
