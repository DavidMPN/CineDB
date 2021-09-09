import React from 'react'

import '../styles/navbar.css'
import SearchIcon from '@material-ui/icons/Search';

class NavBar extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <nav class = "navbar">
                <div class = "nav_left">
                    <h1 class = "nav_title">
                        CineDB
                    </h1>
                </div>

                <div class = "nav_center">
                    <ul class = "nav_list">
                        <li>Filmes</li>
                        <li>Programação</li>
                        <li>Trailer</li>
                        <li>Noticias</li>
                        <li>Series</li>
                    </ul> 
                    <div class = "nav_searchBox">
                        <input class = "nav_searchBox_input" placeholder = "Pesquisar Filmes ou Series"></input>
                        <SearchIcon/>
                    </div>                   
                </div>

                <div class = "nav_right"></div>

        
            
            </nav>
        ) 
    }
}

export default NavBar
