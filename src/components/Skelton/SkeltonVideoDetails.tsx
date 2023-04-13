import React from 'react'
import SkeltonElement from './SkeltonElement'

const SkeltonVideoDetails = ():JSX.Element => {
  return (
	  <div className="skelton_video_details">
		  <div className="skelton_video_details_top">
			  <div>
				  <SkeltonElement type="text1" />
				   <SkeltonElement type="text2"/>
			  </div>
			  <div className='skelton_btns_container'>
				  <SkeltonElement type="button" />
				  <SkeltonElement type="button" />
				  <SkeltonElement type="button" />
				  <SkeltonElement type="button"/>
			  </div>
		  </div>
		  <hr />
		   <div className="skelton_video_details_bottom">
			  <SkeltonElement type="avatar" />
			  <div>
				  <SkeltonElement type="text1" />
				  <SkeltonElement type="text2"/>
			  </div>
		  </div>
	</div>
  )
}

export default SkeltonVideoDetails