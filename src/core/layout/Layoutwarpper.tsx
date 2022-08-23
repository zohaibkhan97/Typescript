import React, { Fragment } from 'react'

function Layoutwarpper(props: any) {
    const {layout,component}=props,
    Layout = layout,
    Component= component;
  return (
   <Fragment>
        <Layout>
        <Component />
      </Layout>
   </Fragment>
  )
}

export default Layoutwarpper