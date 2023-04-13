
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../app/store/store"
import { searchResultsType } from "../Types"


type optionsType = {
	method: string,
	headers: {
		'X-RapidAPI-Key': string,
		'X-RapidAPI-Host': string
	}
}

// type authorType = {
// 	avatar: [{
// 		url: string;
// 	}];
// 	title: string
// }

// type videoType = {
// 	videoId: string;
// 	author: authorType;
// 	badges: [string];
// 	title: string;
// 	publishedTimeText: string;
// 	stats: { views: number };
// 	thumbnails: [{ url: string }];
// }


const useFetchReluts = () => {
	const [loading, setLoading] = useState<boolean>(true)
	const [searchResults, setSearchResults] = useState<searchResultsType | []>([])

	const category = useSelector((state: RootState) => state.category.category)
	// console.log(category)



	useEffect(() => {

		const options: optionsType = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '858131ba66msh781ecf934ebaa6cp1a72a5jsn738f592f04c8',
			'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
		}
	}
		const fetchResults = async () => {
			// setLoading(true)
			const response = await fetch(`https://youtube138.p.rapidapi.com/search/?q=${category}&hl=en&gl=US`, options)
			const data = await response.json()
			setSearchResults(data.contents)
			console.log(response)
			setLoading(false)
		}

		fetchResults()

	}, [category])

	return { loading, searchResults }

}


export default useFetchReluts