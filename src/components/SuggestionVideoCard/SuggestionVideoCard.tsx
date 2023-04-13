import React from 'react'

import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";
// import { AiOutlineClockCircle } from 'react-icons/ai'
// import { MdPlaylistAdd } from 'react-icons/md'
import { convertsSecondsToTime } from '../../utils/constants';


import './index.css'

type propType = {
	id: string;
	thumbnailUrl: string;
	avatar: string;
	title: string;
	channelName: string;
	publishedTimeText: string | null;
	views: number;
	verified: string;
	lenghtSeconds: number;
	notHome?:boolean
}


const SuggestionVideoCard = (props: propType): JSX.Element => {
	const { thumbnailUrl, title, channelName, publishedTimeText, views, verified, lenghtSeconds, id } = props

	return (
		<Link to={`/watch/${id}`} className="suggestion_video_link_item">
			<li className="suggestion_video_item">
				<div className='suggestion_thumbnail_container'>
					<img src={thumbnailUrl} className="thumbnail_img" alt="thumbnail" />
					<p className='video_item_time'>{convertsSecondsToTime(lenghtSeconds)}</p>
				</div>
				<div className="suggestion_video_item_content">
					<div className="suggestion_video_item_info">
						<span className='suggestion_video_item_info_title'>{title.slice(0, 50)}...</span>
						<div className='channel_container'>
							<span className='channel_name'>
								{channelName}
							</span>
							<span>{verified === 'VERIFIED_CHANNEL' && <BsFillCheckCircleFill color='#aaa' size={10} />}</span>
						</div>
						<div className="stats_container">
							<span>{abbreviateNumber(views, 2)} views</span>
							<span className='dot_icon'>.</span>
							<span>{publishedTimeText}</span>
						</div>
					</div>
				</div>
			</li>
		</Link>
	)
}

export default SuggestionVideoCard