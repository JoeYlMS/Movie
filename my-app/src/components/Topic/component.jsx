import {connect} from "react-redux";
import _default from "react-redux/es/components/connect";

import {selectMovies} from "../../store/selectors";

import TopicCard from "./TopicCard";
import Error from "../shared/Error";

import './styles.scss'
import {generateTitle} from "../../helpers/helpers";

const Topic = ({sectionTopicClass, headerTopic=generateTitle(window.location.pathname), headerTopicClass,setterTopic=window.location.pathname.replace('/',''),movies}) => {
    return (
        <section className={sectionTopicClass ? sectionTopicClass : 'topic_main'}>
            {headerTopic &&
                <h2 className={headerTopicClass ? headerTopicClass : 'topic_main_header'}>{ headerTopic ? headerTopic : generateTitle(window.location.pathname) } </h2>}
            <div className="container d-flex">
                {
                    Object.keys(movies[setterTopic]).length === 0
                        ?
                        <Error message='Sorry...This page is still loading or can not be found' btn/>
                        :
                        ("status_code" in movies[setterTopic] & "status_message" in movies[setterTopic])
                            ?
                            <Error error={movies[setterTopic].status_code} message={movies[setterTopic].status_message}/>
                            :
                            movies[setterTopic].total_results === 0
                                ?
                                <Error message='Sorry, but the server did not return any results for your request.'  btn/>
                                :
                                movies[setterTopic].results.map(movie=><TopicCard key={movie.id} {...movie}/>)
                }
            </div>
        </section>
    )
}

const mapStateToProps = state => ({
        movies: selectMovies(state),
    }
)

export default connect(mapStateToProps, _default)(Topic)
