import {
    SET_MOVIE,
    SET_POPULAR_MOVIES,
    SET_SEARCHED_HISTORY,
    SET_SEARCHED_MOVIES,
    SET_TOP_RATED_MOVIES,
    SET_UPCOMING_MOVIES
} from "./types"

const initialState = {
    searchedMovies: {},
    movie: {},
    popular: {},
    top_rated: {},
    upcoming:{},
    searchHistory: ['']

}
export const movies = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCHED_MOVIES :
            return {
                ...state,
                searchedMovies: action.payload,
            }
        case SET_SEARCHED_HISTORY :
            return {
                ...state,
                searchHistory: [action.payload]
            }
        case SET_POPULAR_MOVIES :
            return {
                ...state,
                popular: action.payload
            }
        case SET_TOP_RATED_MOVIES :
            return {
                ...state,
                top_rated: action.payload
            }
        case SET_UPCOMING_MOVIES :
            return {
                ...state,
                upcoming: action.payload
            }
            case SET_MOVIE :
            return {
                ...state,
                movie: action.payload
            }
        default :
            return state
    }
}
