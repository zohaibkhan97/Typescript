import React, { Fragment, Suspense } from "react";
import AppLayout from "./AppLayout";

function Layoutwarpper(props: any) {
  const { layout, component } = props,
    layouts: any = { AppLayout },
    Layout: any = layouts[layout],
    Component = component;
  return (
    <Fragment>
      <Layout>
        <Suspense fallback={null}>
          <Component />
        </Suspense>
      </Layout>
    </Fragment>
  );
}

export default Layoutwarpper;
