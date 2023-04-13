
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '858131ba66msh781ecf934ebaa6cp1a72a5jsn738f592f04c8',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
}

const baseUrl = 'https://youtube138.p.rapidapi.com'


export const fetchDataFromApi = async(query:string)=>{
	const response = await fetch(`${baseUrl}/${query}`, options)
	const data = await response.json()
	return data
}



export const getPublishedTimeText = (date:string) => {
	const currentDate = new Date()
	const publishedDate = new Date(date)
	const year = currentDate.getFullYear() - publishedDate.getFullYear()
	const month = currentDate.getMonth() - publishedDate.getMonth()
	const day = currentDate.getDay() - publishedDate.getDay()
	const hour = currentDate.getHours() - publishedDate.getHours()
	const mins = currentDate.getMinutes() - publishedDate.getMinutes()
	const secs = currentDate.getSeconds() - publishedDate.getSeconds()

	if (year === 0) {
		if (month !== 0 && month > 0) {
			return `${month === 1 ? '1 month ago':`${month} months ago`} `
		}else{
			if (day !== 0 && day> 0) {
				return `${day === 1 ? '1 day ago':`${day} days ago`} `
			} else {
				if (hour !== 0 && hour > 0) {
					return `${hour === 1 ? '1 hour ago':`${hour} hours ago`} `
				} else {
					if (mins !== 0 && hour > 0) {
						return `${mins === 1 ? '1 minute ago':`${mins} minutes ago`} `
					} else {
						return `${secs === 1 ? '1 second ago':`${secs} seconds ago`} `
					}
				}
			}
		}
	} else {
		return `${year === 1 ? '1 year ago':`${year} years ago`} `
	}
	
}