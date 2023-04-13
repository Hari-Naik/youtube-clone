import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchDataFromApi } from '../../api'


import ReactPlayer from 'react-player/lazy'

//data 
// import { videoDetails } from '../../utils/constants'
// import { relatedVideos } from '../../utils/constants'


import './index.css'
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
import { RiMenuAddFill } from 'react-icons/ri'
import { abbreviateNumber } from 'js-abbreviation-number'
import { RiShareForwardLine } from 'react-icons/ri'
import { BiCut } from 'react-icons/bi'
import { getPublishedTimeText } from '../../api'
import SuggestionVideoCard from '../../components/SuggestionVideoCard/SuggestionVideoCard'
import { searchResultsType, videoDetailsType, videoType } from '../../Types'
import SkeltonElement from '../../components/Skelton/SkeltonElement'
import SkeltonVideoDetails from '../../components/Skelton/SkeltonVideoDetails'
import { videoDetails } from '../../data/data'
import { relatedVideos } from '../../utils/constants'

import { relatedVideoType } from '../../Types'

const VideoDetails = (): JSX.Element => {
	const [showmore, setShowmore] = useState<boolean>(false)
	//const [videoDetails, setVideoDetails] = useState<videoDetailsType>()
	const [loading, setLoading] = useState<boolean>(true)
	//const [relatedVideos, setRelatedVideos] = useState<searchResultsType | []>([])
	const { id } = useParams()

	useEffect(() => {
		// fetchVideoDetails()
		// fetchRelatedContents()
		setTimeout(() => {
			setLoading(false)
		}, 5000);
	}, [])

	// const fetchVideoDetails = async () => {
	// 	// setLoading(true)
	// 	const data = await fetchDataFromApi(`video/details/?id=${id}&hl=en&gl=US`)
	// 	setVideoDetails(data)
	// 	setLoading(false)
	// 	// console.log(data)

	// }

	// const fetchRelatedContents = async () => {
	// 	const data = await fetchDataFromApi(`video/related-contents/?id=${id}&hl=en&gl=US`)
	// 	setRelatedVideos(data.contents)
	// 	// console.log(data.contents)
	// }

	// const fetchComments = () => {
	// 	const data = fetchDataFromApi(`video/comments/?id=${id}&hl=en&gl=US`)
	// 	console.log(data)
	// }

	const onClickShowMore = () => {
		setShowmore(prevState => !prevState)
	}

	return (
		<div className="video_details">
			<div className="video_container">
				<div className="video_player">
					<div className="player_container">
						<ReactPlayer
							url={`https://www.youtube.com/watch?v=${id}`}
							width="100%"
							height="100%"
							style={{ backgroundColor: "#000000" }}
							playing={true}
							controls={true}
						/>
					</div>
					{loading ? <SkeltonVideoDetails /> : (
						<>
							<div className="video_info">
								<span className='video_info_title'>{videoDetails?.title}</span>
								<div className="video_profile">
									<div className='channel_info'>
										<div className="avatar_container">
											<img src={videoDetails?.author?.avatar[0]?.url} className="avatar_img" alt="avatar" />
										</div>
										<div className="channelName_subscribers">
											<span>{videoDetails?.author?.title}</span>
											<span className='subscribers'>{videoDetails?.author?.stats?.subscribersText}</span>
										</div>
										<button type='button' className='subscribe_btn'>
											Subscribe
										</button>
									</div>
									<div className="buttons_container">
										<div className='subscribe'>
											<button type='button' className='subscribe_screen_btn'>
												Subscribe
											</button>
										</div>
										<div className='buttons_container_right'>
											<div className="likes_dislikes">
												<button type='button'>
													<span>
														<AiOutlineLike size={14} />
													</span>
													<span className='margin'>{abbreviateNumber(videoDetails?.stats?.likes)}</span>
												</button>
												<span className='divider_line'></span>
												<button type='button' className='dislike_btn'>
													<AiOutlineDislike size={14} />
												</button>
											</div>
											<button type='button'>
												<span><RiShareForwardLine size={18} /></span>
												<span className='margin'>Share</span>
											</button>
											<button type='button'>
												<span><RiMenuAddFill size={16} /></span>
												<span className='margin'>Save</span>
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className="video_description">
								<div className="video_description_stats">
									<span>{abbreviateNumber(videoDetails?.stats?.views)} views</span>
									<span>{getPublishedTimeText(videoDetails?.date?.published)}</span>
								</div>
								<span>
									{showmore ? `${videoDetails?.description}` : `${videoDetails?.description?.slice(0, 200)}...`}

									<button type='button' className='show_more_btn' onClick={onClickShowMore}>{showmore ? 'Show less' : 'Show more'}</button>
								</span>
							</div>
						</>
					)}
				</div>
			</div>
			{!loading && <div className="related_contents">
				<ul className="related_contents_list_items">
					{relatedVideos?.map((item:relatedVideoType) => (
						<SuggestionVideoCard
							key={item.video.videoId}
							id={item.video.videoId}
							thumbnailUrl={item.video.thumbnails[0].url}
							avatar={item.video.author.avatar[0].url}
							title={item.video.title}
							channelName={item.video.author.title}
							publishedTimeText={item.video.publishedTimeText}
							views={item.video.stats.views}
							verified={item.video.author?.badges[0]?.type}
							lenghtSeconds={item.video.lengthSeconds}
							notHome={true}
						/>
					))}
					
				</ul>
			</div>}

			{/* 
			<div className="video_container">
				<div className="video_player">
					<div className="player_container">
						<ReactPlayer
							url={`https://www.youtube.com/watch?v=${id}`}
							width="100%"
							height="100%"
							style={{ backgroundColor: "#000000" }}
							playing={true}
							controls={true}
						/>
					</div>
					<div className="video_info">
						<span className='video_info_title'>{videoDetails.title}</span>
						<div className="video_profile">
							<div className='channel_info'>
								<div className="avatar_container">
									<img src={videoDetails?.author?.avatar[0]?.url} className="avatar_img" alt="avatar" />
								</div>
								<div className="channelName_subscribers">
									<span>{videoDetails?.author?.title}</span>
									<span className='subscribers'>{videoDetails?.author?.stats?.subscribersText}</span>
								</div>
								<button type='button' className='subscribe_btn'>
									Subscribe
								</button>
							</div>
							<div className="buttons_container">
								<div className='subscribe'>
									<button type='button' className='subscribe_screen_btn'>
										Subscribe
									</button>
								</div>
								<div className='buttons_container_right'>
									<div className="likes_dislikes">
										<button type='button'>
											<span>
												<AiOutlineLike size={14} />
											</span>
											<span className='margin'>{abbreviateNumber(videoDetails?.stats?.likes)}</span>
										</button>
										<span className='divider_line'></span>
										<button type='button' className='dislike_btn'>
											<AiOutlineDislike size={14} />
										</button>
									</div>
									<button type='button'>
										<span><RiShareForwardLine size={18} /></span>
										<span className='margin'>Share</span>
									</button>
									<button type='button'>
										<span><BiCut size={16} /></span>
										<span className='margin'>Clip</span>
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="video_description">
						<div className="video_description_stats">
							<span>{abbreviateNumber(videoDetails?.stats?.views)} views</span>
							<span>{getPublishedTimeText(videoDetails?.publishedDate)}</span>
						</div>
						<span>
							{showmore ? `${videoDetails.description}`:`${videoDetails.description.slice(0,200)}...`}
						
							<button type='button' className='show_more_btn' onClick={onClickShowMore}>{ showmore ? 'Show less':'Show more'}</button>
						</span>
					</div>
				</div>
			</div>
			<div className="related_contents">
				<ul className="related_contents_list_items">
					{relatedVideos.map(item => (
						<SuggestionVideoCard
							key={item.video.videoId}
							id={item.video.videoId}
							thumbnailUrl={item.video.thumbnails[0].url}
							avatar={item.video.author.avatar[0].url}
							title={item.video.title}
							channelName={item.video.author.title}
							publishedTimeText={item.video.publishedTimeText}
							views={item.video.stats.views}
							verified={item.video.author?.badges[0]?.type}
							lenghtSeconds={item.video.lengthSeconds}
							notHome={true}
						/>
					))}
				</ul>
			</div> */}
		</div>
	)
}

export default VideoDetails