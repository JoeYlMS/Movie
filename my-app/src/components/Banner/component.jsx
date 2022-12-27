import SearchForm from "../shared/SearchForm";

import './styles.scss'

const Banner = () =>  (
            <section className='home_banner'>
                <h3 className='text-center'>G’day!</h3>
                <h3 className='text-center'>A million movies, series for your enjoyment.</h3>
                <h3 className='text-center'> What are you waiting for ?</h3>
                <SearchForm/>
                <p>Your satisfaction is our inspiration</p>
            </section>
    )

export default Banner
