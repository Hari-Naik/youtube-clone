import React from 'react'
import SkeltonElement from './SkeltonElement'

const SkeltonNavbar = ():JSX.Element => {
  return (
	  <div className="skelton_navbar">
		  <SkeltonElement type='button' />
		  {/* <SkeltonElement type='button' />
		  <SkeltonElement type='button' />
		   <SkeltonElement type='button'/> */}
	</div>
  )
}

export default SkeltonNavbar