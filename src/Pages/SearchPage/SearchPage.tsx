import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import VideoItem from '../../components/VideoItem/VideoItem'
import { searchContents } from '../../data/data'
import useFetchReluts from '../../hooks/useFetchResults'

import './index.css'
const SearchPage = () => {
	const [loading, setLoading] = useState(false)
	
	//const { loading, searchResults } = useFetchReluts()
	// console.log(loading, searchResults)

  return (
	  <div className="searchPage">
		  <Sidebar />
		  <div className="search_result">
				  <ul>
					 {!loading && searchContents.map((item) => (
					  <VideoItem
						  key={item.video?.videoId}
						  id={item.video?.videoId}
						  thumbnailUrl={item?.video?.thumbnails[0].url}
						  avatar={item?.video?.author.avatar[0].url}
						  title={item.video.title}
						  channelName={item.video.author.title}
						  publishedTimeText={item.video.publishedTimeText}
						  views={item.video.stats.views}
						  verified={item.video.author?.badges[0]?.type}
						  lenghtSeconds={item.video.lengthSeconds}
						  searchPage={true}
					  />
				  ))} 
				  </ul>
			  {/* {loading ? <p>Loading...</p> : (<ul>
				  {searchResults.map((item) => (
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
						  searchPage={true}
					  />
				  ))}
			  </ul>)} */}
		  </div>
	</div>
  )
}

export default SearchPage