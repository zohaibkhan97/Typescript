import React, { Fragment } from 'react'
import { BrowserRouter as AppRouter, Routes, Route, } from "react-router-dom";
import Layoutwarpper from '../core/layout/Layoutwarpper';
import appRoutes from './router/appRoutes';
import "../core/scss/main.scss"


function Routing() {
  return <Fragment>
 

      <AppRouter>

          <Routes>
      
              {appRoutes.map(( item : any,index: number ) => (
                  <Route
                  key={index}
                  path={item.path}
                  element={<Layoutwarpper {...item}/>}/>
                  
                  )
                  )}
          
          </Routes>

      </AppRouter>
                 
  </Fragment>
}

export default Routing