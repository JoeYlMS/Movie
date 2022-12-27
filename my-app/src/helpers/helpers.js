import {REACT_APP_API_KEY, BASIC_URL, IMG_URL,SEARCH_URL} from '../constants/constans'

export const getUrlTopic = path => `${BASIC_URL}${path}?api_key=${REACT_APP_API_KEY}`;
export const getUrlSearch = search => `${SEARCH_URL}?api_key=${REACT_APP_API_KEY}&query=${search.replaceAll(' ','%')}`;
export const generateImgUrl = (size,path) => `${IMG_URL}${size}${path}`;
export const convertDate = date => new Date(date).toLocaleDateString('uk-UA')
export const generateTitle = title=> (title.replace('/','')[0].toUpperCase()+ title.slice(2)).replaceAll('_',' ')
