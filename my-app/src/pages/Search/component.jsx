import React from "react";

import {connect} from "react-redux";

import {useParams} from "react-router-dom";

import {getUrlSearch} from "../../helpers/helpers";
import useGetData from "../../hooks/useGetData";

import {setSearchedMovies} from "../../store/movies/actions";
import { selectSearchHistory} from "../../store/selectors";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ResultsSearch from "../../components/ResultsSearch";

import './styles.scss'


const Search = ({setSearchedMovies, searchHistory}) => {
    const params = useParams()
    useGetData(getUrlSearch(params.query), setSearchedMovies, searchHistory)
    return (
        <>
            <Header searchForm/>
            <ResultsSearch/>
            <Footer/></>
    )
}

const mapStateToProps = state => ({
        searchHistory: selectSearchHistory(state)
    }
)


const mapDispatchToProps = {
    setSearchedMovies,
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
