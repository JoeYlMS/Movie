import {connect} from "react-redux";
import _default from "react-redux/es/components/connect";

import {selectMovie} from "../../store/selectors";
import {generateImgUrl, convertDate} from "../../helpers/helpers";

import Error from "../shared/Error";

import './styles.scss'

const MovieCard = ({movie}) => {
    const {poster_path, backdrop_path, title, production_companies, overview, release_date, runtime} = movie
    const imgPath = backdrop_path ? backdrop_path : poster_path
    return (
        Object.keys(movie).length === 0
            ?
            <Error message='Sorry...This page is still loading or can not be found' className='error_message size' btn/>
            :
            'status_code' in movie ?
                <Error message={movie.status_message} error={movie.status_code} btn/>
                :
                <section className='movie'>
                    <div className="container">
                        <h2 className='movie_title'>{title}</h2>
                        <div className='movie_card d-flex'>
                            <div className='movie_card_poster'
                                 style={imgPath ? {backgroundImage: 'url(' + generateImgUrl('w500', imgPath) + ')'} : {backgroundColor: 'grey'}}>
                            </div>
                            <div className='movie_card_content d-flex'>
                                <p className='movie_card__release'>Release : {convertDate(release_date)}</p>
                                <p className='movie_card__runtime'>Duration : {runtime} minute</p>
                                <div className='movie_card__companies d-flex'>
                                    <h3> Companies :</h3>
                                    {production_companies && production_companies.map(({name, id}) => (
                                        <span key={id}>{name}</span>))}
                                </div>
                            </div>
                            <p className='movie_card__overview'>{overview}</p>
                        </div>
                    </div>
                </section>
    )
}

const mapStateToProps = state => ({
    movie: selectMovie(state),
})

export default connect(mapStateToProps, _default)(MovieCard);
