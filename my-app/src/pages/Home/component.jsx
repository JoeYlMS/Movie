import {connect} from "react-redux";

import {selectPopularMovies} from "../../store/selectors";
import {setPopularMovies} from "../../store/movies/actions";

import useGetData from "../../hooks/useGetData";
import {getUrlTopic} from "../../helpers/helpers";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Topic from "../../components/Topic";
import Banner from "../../components/Banner";

import './styles.scss'

const Home = ({setPopularMovies}) => {
    useGetData(getUrlTopic('popular'), setPopularMovies)
    return (
        <>
            <Header/>
            <Banner/>
            <Topic headerTopic="Most Popular today..."  setterTopic='popular'/>
            <Footer/>
        </>
    )
}

const mapStateToProps = state => ({
        popular: selectPopularMovies(state),
    }
)

const mapDispatchToProps = {
    setPopularMovies,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)