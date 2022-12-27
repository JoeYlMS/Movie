import {
    SET_MOVIE,
    SET_POPULAR_MOVIES,
    SET_SEARCHED_HISTORY,
    SET_SEARCHED_MOVIES,
    SET_TOP_RATED_MOVIES,
    SET_UPCOMING_MOVIES
} from "./types"

export const setSearchedMovies = payload => {
    return ({
        type: SET_SEARCHED_MOVIES,
        payload
    })
}
export const setSearchedHistory = payload => {
    return ({
        type: SET_SEARCHED_HISTORY,
        payload
    })
}
export const setPopularMovies = payload => {
    return ({
        type: SET_POPULAR_MOVIES,
        payload
    })
}
export const setTopRatedMovies = payload => {
    return ({
        type: SET_TOP_RATED_MOVIES,
        payload
    })
}
export const setUpcomingMovies = payload => {
    return ({
        type: SET_UPCOMING_MOVIES,
        payload
    })
}
export const setMovie = payload => {
    return ({
        type: SET_MOVIE,
        payload
    })
}
