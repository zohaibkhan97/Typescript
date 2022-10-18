import React, { Fragment } from "react";
import Media from "react-media";
import { Col, Row } from "reactstrap";
import Navbar from "../../components/Navbar";
import Sidebar from "../../sidebar/Sidebar";

export default function AppLayout(props : any) {
  return <Fragment>
     <div className="admin_layout">
      <Row >

        <Media query="(min-width:1020px)">
          {(matches)=> {return matches && (
           <Col md='3'>
           
            <Sidebar/>
          
           </Col> 
          )
          }}

        </Media>
        <Media query= "(max-width : 1020px)" >
          {(matches)=> {
          return matches ? (
            <div className="pl-3">
              <Navbar/>

            <div >

            {props.children}
            </div>
            </div>

          ) : (
            <div>
              <Navbar/>

            <div >

            {props.children}
            </div>
            </div>


          )
          }}

        </Media>
      </Row>
  </div>

    
  </Fragment>
}
