import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Search from "../pages/Search/component";
import BatGatWay from "../pages/BadGatWay/component";
import TopRated from "../pages/TopRated";
import Popular from "../pages/Popular";
import Upcoming from "../pages/Upcoming";
import Movie from "../pages/Movie";


import './styles.scss'


function MovieApp() {
    return (
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/search/:query' element={<Search/>}/>
                <Route path='/movie/:movieId' element={<Movie/>}/>
                <Route path='/popular' element={<Popular/>}/>
                <Route path='/top_rated' element={<TopRated/>}/>
                <Route path='/upcoming' element={<Upcoming/>}/>
                <Route path='*' element={<BatGatWay/>}/>
            </Routes>
    );
}

export default MovieApp;