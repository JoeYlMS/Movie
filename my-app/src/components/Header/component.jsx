import * as React from "react";

import Navigation from "../shared/Navigation";

import SearchForm from "../shared/SearchForm";

import Logo from "../shared/Logo";

import './styles.scss'

const Header = ({searchForm}) => (
        <header>
            <div className="container d-flex">
                <Logo/>
                <Navigation/>
                {searchForm && <SearchForm/>}
            </div>
        </header>

    )


export default Header;