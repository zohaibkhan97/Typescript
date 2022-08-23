import React, { Fragment } from 'react'
import {Row,Col} from "reactstrap"
import Media from "react-media";

function AuthLayout(props: any) {
  return <Fragment>
      <Row>
      <Media query="(min-width: 768px)">
          {(matches) => matches && <Col sm="8" ></Col>}
        </Media>
        <Col>{props.children}</Col>
      </Row>
  </Fragment>
}
export default AuthLayout