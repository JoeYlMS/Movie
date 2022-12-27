import {connect} from "react-redux";

import useGetData from "../../hooks/useGetData";
import {getUrlTopic} from "../../helpers/helpers";

import {setUpcomingMovies} from "../../store/movies/actions";

import Header from "../../components/Header";
import Topic from "../../components/Topic";
import Footer from "../../components/Footer";

import './styles.scss'

const Upcoming = ({setUpcomingMovies}) => {
    useGetData(getUrlTopic('upcoming'), setUpcomingMovies)
    return (
        <>
            <Header searchForm/>
            <Topic/>
            <Footer/>
        </>
    )
}
const mapDispatchToProps = {
    setUpcomingMovies,
}

export default connect(null, mapDispatchToProps)(Upcoming);