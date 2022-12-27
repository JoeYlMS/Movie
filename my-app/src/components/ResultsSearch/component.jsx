import {connect} from "react-redux";
import _default from "react-redux/es/components/connect";

import {selectSearchedMovies} from "../../store/selectors";

import Error from "../shared/Error";
import ResultCard from "./ResultCard";

import './styles.scss'

const ResultsSearch = ({searchedMovies}) => {
    return (
        <section>
            <div className="container">
                <div className="results_search">
                    <h2>Results :</h2>
                    {
                        Object.keys(searchedMovies).length === 0
                            ?
                            <Error message='Sorry...This page is still loading or can not be found'  btn/>
                            :
                            'status_code' in searchedMovies & 'status_message' in searchedMovies
                                ?
                                <Error  error={searchedMovies.status_code} message={searchedMovies.status_message}/>
                                :
                                searchedMovies.total_results === 0
                                    ?
                                    <Error message='Sorry, but the server did not return any results for your request.'  btn/>
                                    :
                                    searchedMovies.results.map(film => <ResultCard key={film.id} {...film}/>)
                    }
                </div>
            </div>
        </section>
    )
}
const mapStateToProps = state => ({
    searchedMovies: selectSearchedMovies(state),
})

export default connect(mapStateToProps, _default)(ResultsSearch);