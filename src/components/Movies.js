import React from "react";
import { movies } from "../data";

function Movies() {

  const elem =movies.map((movie,index)=>{
             return (
               <div key={index}>
                 <h4>Name:{movie.title}</h4>
                 <p>Time:{movie.time}</p>
                 <p>Genres:</p>
                 <ul>
                   {movie.genres.map((genre,index) => {
                     return <li key={index}>{genre}</li>;
                   })}
                 </ul>
               </div>
             );
                
        })
    
  return (
    <div>
      {/*{code here}*/}
      <h1>Movies Page</h1>
      {elem}
    </div>
  );
}

export default Movies;
