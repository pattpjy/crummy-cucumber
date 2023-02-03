import "./Main.css";
import React, { Component } from "react";
import movieData from "../../movieData";
import Card from "../Card/Card";
import { Link } from "react-router-dom";


class Main extends Component {
    constructor() {
        super();
        this.state = {
            allMovies: movieData.movies,
        };
    }

    displayMovies() {
        const allMovies = this.state.allMovies.map((movie) => {
            return <Card
                poster={movie.poster_path}
                id={movie.id}
                key={movie.id}
                alt={movie.title}
                handleClick={this.clickHandler}
            />
        });
        return allMovies;
    }

    clickHandler(event) {
        console.log(event.target.id)
    }

    render() {
        return <div className="poster-display">{this.displayMovies()}</div>;
    }
}

export default Main;
