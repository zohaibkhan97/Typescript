import React, { Fragment } from 'react'
import SidebarNavLinks from './SidebarNavLinks'
import FireLogo from "../assets/Images/bgs/Firelogo.jpg"

export default function Sidebar() {
    const renderImage = () => {
        return (
            <img src={FireLogo} alt = "" className='img-thumbnail mb-1'/>
        )
    }
  return (

    <Fragment>
        <div className='sidebar_desktop p-3'>
            {/* {renderImage()} */}
        <SidebarNavLinks/>
            </div>
        </Fragment>
  )
}
