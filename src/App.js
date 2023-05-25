import { useState, useEffect } from "react";
import'./App.css';
import MovieCard from "./movieCard";
import searchIcon from "./search.svg";
//  http://www.omdbapi.com/?apikey=c9dca126

const API_URL = 'http://www.omdbapi.com/?apikey=533fab9d';

const App = () =>{
    const [movies, setMovies] = useState ([]);
    const [searchTerm, setSearchTerm] = useState('');
    const searchMovie = async (title) =>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

       setMovies(data.Search);
    }
    useEffect(()=>{
        searchMovie('avatar');
    },[]);

    return(
        <div className="app">
            <h1>Movie Land</h1>

            <div className="search">
                <input 
                  placeholder="Search for movies"
                  value= {searchTerm}
                  onChange={(e)=> setSearchTerm(e.target.value)}
                />
                <img 
                    src={searchIcon}
                    alt="some text of search"
                    onClick={()=>searchMovie(searchTerm)}
                />
            </div>
            {
                movies?.length > 0 ? (
                    <div className="container">
                        {
                            movies.map((movies)=>(
                                <MovieCard movies={movies} />
                            ))
                        }
                       
                    </div>
                ):(
                    <div className="empty">
                        <h2>There are no movies</h2>
                    </div>
                )
            }
           
        </div>
    );
}

export default App; 
