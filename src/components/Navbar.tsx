import React, { Fragment } from 'react'
import Media from 'react-media';
import { Card } from 'reactstrap';
import Sidebar from '../sidebar/Sidebar';

function Navbar() {
  const Navbar=(

 
    <div className="admin_navbar mb-4">
      <Card className='admin_navbar_horizontal rounded'>
      <div>
                    <Media query="(min-width:1020px)">
                        {(matches) => {
                            return matches && (
                                <Sidebar/>
                              
                                )
                            }}
                    </Media>
                </div>
                <div className='d-flex align-items-center'>
                  <span> Waleed Churasiya</span>
                  <Media query="(max-width:1020px)">
                            {(matches) => {
                                return matches ? (
                                        <div>
                                           <Sidebar/>
                                        </div>  
                                    ) : (
                                        <div className='m-1'>
                                            Class
                                        </div>
                                    )
                                }}
                        </Media>
                </div>
      </Card>
   
    </div>
       )
       return (
        Navbar
    )
  
}

export default Navbar