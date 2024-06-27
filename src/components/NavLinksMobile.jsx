import React from 'react'

function NavLinksMobile() {
  return (
    <div className='container my-3 d-lg-none'>
        <div className='row mx-1 text-center align-items-center justify-content-md-center bg-light px-1  rounded-5 shadow'>

            <div className='col-6 rounded-5 bg-white py-3 px-1'>
                <a className=" active rounded-4 shadow-sm " aria-current="page" href="#">Catalogue</a>
            </div>
            <div className='col-6 py-1 px-0'>
                <a className="d-inline-block pt-3" href="#">My training  <p className="d-inline-block bg-primary text-white rounded-5 px-2 py-0 "> 4 </p></a>
                
            </div>

            {/* <ul className=" ms-auto mb-2 mb-lg-0 bg-light p-1 rounded-5 shadow-sm">
                <li className=" rounded-5 bg-white">
                </li>
                <li className=" ">
                </li>
            </ul> */}
        </div>
            
        
    </div>
  )
}

export default NavLinksMobile