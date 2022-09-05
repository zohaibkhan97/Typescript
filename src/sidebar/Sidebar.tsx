import React, { Fragment } from 'react'
import SidebarNavLinks from './SidebarNavLinks'
import FireLogo from "../assets/Images/bgs/Firelogo.jpg"

export default function Sidebar() {
    const renderImage = () => {
        return (
            <img src={FireLogo} alt = ""/>
        )
    }
  return (

    <Fragment>
        <div>
            {/* {renderImage()} */}
        <SidebarNavLinks/>
            </div>
        </Fragment>
  )
}
