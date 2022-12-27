import {useNavigate} from "react-router-dom";

import {generateImgUrl} from "../../../helpers/helpers";

import './styles.scss'

const TopicCard = ({id,title,vote_average,poster_path}) => {
    const navigate = useNavigate()
    const movieNavigate = (movie) => navigate(movie, {replace: false})
    return (
        <div className='topic_card' onClick={()=>movieNavigate(`/movie/${id}`)}>
            <div style={{backgroundImage:'url('+generateImgUrl('w300',poster_path)+')'}}></div>
            <h3 className='text-center'>{title}</h3>
            <div className='topic_rate'><span className='topic_rate__span'>{vote_average*10}</span></div>
        </div>
    )
}

export default TopicCard
