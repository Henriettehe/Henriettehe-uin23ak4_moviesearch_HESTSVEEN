import React from "react";
import MovieCards from "./MovieCards";
import SearchResults from "./SearchResults";


export default function Layout({setResultat, getMovies}){
    return (
        <>
         <header>
                <h1>Filmer: </h1> 
                <SearchResults setResultat={setResultat} getMovies={getMovies} i class="bi bi-search" />
          </header>
          
          <main className="content">
                <MovieCards setResultat={setResultat} />
          </main>
          
        </>
         
    )
}