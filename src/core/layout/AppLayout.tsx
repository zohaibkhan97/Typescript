import React, { Fragment } from "react";
import Media from "react-media";
import { Col, Row } from "reactstrap";
import Navbar from "../../components/Navbar";
import Sidebar from "../../sidebar/Sidebar";

export default function AppLayout(props : any) {
  return <Fragment>
    
      <Row>
        <Media query="(min-width:1020px)">
          {(matches)=> {return matches && (
           <Col md='3'>
           
            <Sidebar/>
           </Col> 
          )
          }}

        </Media>
      </Row>
  

    <Navbar/>
    {props.children}
    
  </Fragment>
}
