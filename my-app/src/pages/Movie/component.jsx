import {connect} from "react-redux";
import {useParams} from "react-router-dom";

import {setMovie} from "../../store/movies/actions";

import useGetData from "../../hooks/useGetData";
import {getUrlTopic} from "../../helpers/helpers";

import Header from "../../components/Header";
import MovieCard from "../../components/MovieCard";
import Footer from "../../components/Footer";

import './styles.scss';


const Movie = ({setMovie}) => {
    const params = useParams()
    useGetData(getUrlTopic(params.movieId), setMovie)
    return (
        <>
            <Header searchForm/>
            <MovieCard/>
            <Footer/>
        </>
    )
}
const mapDispatchToProps = {
    setMovie,
}

export default connect(null, mapDispatchToProps)(Movie);