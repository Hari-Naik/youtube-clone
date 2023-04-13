import React from 'react'
import SkeltonElement from './SkeltonElement'

const SkeltonVideoItem = () => {
	return (
		<li className="skelton_wrapper">
			<div className="skelton_video_item">
				<SkeltonElement type="thumbnail" />
				<div className='skelton_video_item_content'>
					<SkeltonElement type="avatar" />
					<div className='skelton_text_container'>
						<SkeltonElement type="text1" />
						<SkeltonElement type="text2" />
					</div>
				</div>
			</div>
			{/* <div className="shimmer-wrapper">
			<div className="shimmer"></div> */}
		{/* </div> */}
	</li>
  )
}

export default SkeltonVideoItem