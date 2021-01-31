const { REACT_APP_API_KEY } = process.env
export const COUNTRY = 'no'
export const URL = `http://newsapi.org/v2/top-headlines?country=${COUNTRY}&apiKey=${REACT_APP_API_KEY}`
