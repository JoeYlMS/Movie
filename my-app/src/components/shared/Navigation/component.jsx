import {Link} from "react-router-dom";

import './styles.scss'

const Navigation = () => (
    <nav className='nav'>
    <ul>
        <Link to='/' className='link mr-10'>Home</Link>
        <Link to='/top_rated' className='link mr-10'>Top Rated</Link>
        <Link to='/popular' className='link mr-10 '>Popular</Link>
        <Link to='/upcoming' className='link '>Upcoming</Link>
    </ul>
</nav>)


export default Navigation