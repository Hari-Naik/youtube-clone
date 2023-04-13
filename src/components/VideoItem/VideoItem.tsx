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
	loading?: boolean;
	searchPage?: boolean
}


const VideoItem = (props: propType): JSX.Element => {
	const { thumbnailUrl, avatar, title, channelName, publishedTimeText, views, verified, lenghtSeconds, id, loading, searchPage } = props


	return (
		<Link to={`/watch/${id}`} className={`${searchPage ? "search_page_style":'link_item'}`}>
			<li className={`${searchPage ? 'video_item search_page_style' : 'video_item'}`}>
				<div className={`${searchPage ? 'thumbnail_container search_page_thumbnail_container' : 'thumbnail_container'}`}>
					<img src={thumbnailUrl} className="thumbnail_img" alt="thumbnail" />
					<p className='video_item_time'>{convertsSecondsToTime(lenghtSeconds)}</p>
				</div>
				<div className="video_item_content">
					{!searchPage && <div className="avatar_container">
						<img src={avatar} className="avatar_img" alt="avatar" />
					</div>}
					<div className="video_item_info">
						<span className={`${searchPage ? 'video_item_info_title search_page_title':'video_item_info_title'}`}>{title.slice(0, 50)}...</span>

						{searchPage && (
							<div className="search_page_stats_screen">
								<span>{abbreviateNumber(views, 2)} views</span>
								<span className='dot_icon'>.</span>
								<span>{publishedTimeText}</span>
							</div>
						)}
						<div>
							<div className='channel_container'>
								{searchPage && <img src={avatar} className="search_page_profile_img" alt="avatar"/>}

								<span className='channel_name'>
									{channelName}
								</span>
								<span>{verified === 'VERIFIED_CHANNEL' && <BsFillCheckCircleFill color='#aaa' size={10} />}</span>
							</div>
						 <div className={`${searchPage?'stats_container search_page_stats_mobile':'stats_container'}`}>
								<span>{abbreviateNumber(views, 2)} views</span>
								<span className='dot_icon'>.</span>
								<span>{publishedTimeText}</span>
							</div>
						</div>
					</div>
				</div>
				{/* <div ref={btnRef}>
					<button type="button">
						<span>
							<AiOutlineClockCircle size={16} color="#ded9d9" />
						</span>
						<span className='btn_text'>Watch Later</span>
					</button>
					<button type='button'>
						<span>
							<MdPlaylistAdd size={21} color="#ded9d9" />
						</span>
						<span className='btn_text'>Add to queue</span>
					</button>
				</div> */}
			</li>
		</Link>
	)
}

export default VideoItem