import React, {useState,useEffect} from 'react'
// import { useSelector } from 'react-redux/es/hooks/useSelector'
// import { RootState } from '../app/store/store'
import Sidebar from '../../components/Sidebar/Sidebar'
import SkeltonVideoItem from '../../components/Skelton/SkeltonVideoItem'
import VideoItem from '../../components/VideoItem/VideoItem'
import { contents } from '../../data/data'

import useFetchReluts from '../../hooks/useFetchResults'


import './index.css'
import { searchContents } from '../../data/data'

const Home = (): JSX.Element => {
	const [loading, setLoading] = useState<boolean>(true)
	
	//const { loading, searchResults } = useFetchReluts()
	// console.log(loading)

	useEffect(() => {
		setTimeout(() => {
			setLoading(false)
		},5000)
	})

	return (
		<div className='home'>
			<Sidebar />
			{loading ? (
				<ul className="home_lists">
					{contents.slice(0,12).map((item,index) => <SkeltonVideoItem key={index} />)}
			</ul>
			): (
				<ul className='home_lists'>
					{contents.map((item) => {
						 if (item.type !== "video") return false;
						return(
							<VideoItem
								key={item.video?.videoId}
								id={item.video?.videoId}
								thumbnailUrl={item.video.thumbnails[0].url}
								avatar={item.video.author.avatar[0].url}
								title={item.video.title}
								channelName={item.video.author.title}
								publishedTimeText={item.video.publishedTimeText}
								views={item.video.stats.views}
								verified={item.video.author?.badges[0]?.type}
								lenghtSeconds={item.video.lengthSeconds}
								loading={loading}
							/>
						)
					})}
				</ul>
			)}
			{/* <ul className='home_lists'>
			  {contents.map((item) => (
				  <VideoItem
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
					  loading={loading}
				  />
			))}
			 </ul> */}
		</div>
	)
}

export default Home