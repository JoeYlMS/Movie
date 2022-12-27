import {useNavigate} from "react-router-dom";

import {generateImgUrl, convertDate} from "../../../helpers/helpers";

import './styles.scss'

const ResultCard = ({poster_path, title, release_date, overview, id}) => {
    const navigate = useNavigate()
    const movieNavigate = (movie) => navigate(movie, {replace: false})
    return (
            <div className="result_card" onClick={() => movieNavigate(`/movie/${id}`)}>
                <div className="result_card_img">
                    <img src={generateImgUrl('w300', poster_path)} alt={'Logo ' + title}/>
                </div>
                <div className="result_card_content d-flex">
                    <h3>{title}</h3>
                    <p className='result_card_content_release'> Release : {convertDate(release_date)}</p>
                    <div className="result_card_content__overview">
                        <p>{overview}</p>
                    </div>
                </div>
            </div>
    )
}
export default ResultCard