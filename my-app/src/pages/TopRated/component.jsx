import {connect} from "react-redux";

import {setTopRatedMovies} from "../../store/movies/actions";

import useGetData from "../../hooks/useGetData";
import {getUrlTopic} from "../../helpers/helpers";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Topic from "../../components/Topic";

import './styles.scss'

const TopRated = ({setTopRatedMovies}) => {
    useGetData(getUrlTopic('top_rated'), setTopRatedMovies)
    return (
        <>
            <Header searchForm/>
            <Topic />
            <Footer/>
        </>
    )
}

const mapDispatchToProps = {
    setTopRatedMovies,
}

export default connect(null, mapDispatchToProps)(TopRated);