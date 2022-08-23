import React, { Fragment } from "react";

function BlankLayout(props : any) {
  return <Fragment>
    blank
    {props.children}
  </Fragment>;
}

export default BlankLayout;
