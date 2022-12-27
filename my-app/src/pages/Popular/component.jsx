import {connect} from "react-redux";

import {setPopularMovies} from "../../store/movies/actions";

import useGetData from "../../hooks/useGetData";
import {getUrlTopic} from "../../helpers/helpers";

import Header from "../../components/Header";
import Topic from "../../components/Topic";
import Footer from "../../components/Footer";

import './styles.scss'

const Popular = ({setPopularMovies}) => {
    useGetData(getUrlTopic('popular'), setPopularMovies)
    return (
        <>
            <Header searchForm/>
            <Topic/>
            <Footer/>
        </>
    )
}
const mapDispatchToProps = {
    setPopularMovies,
}

export default connect(null, mapDispatchToProps)(Popular);