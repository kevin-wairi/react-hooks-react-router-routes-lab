import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      {/*{code here}*/}
      <h1>Actors Page</h1>
      <div>
        {actors.map((actor,index)=>{
          return (<div key={index}>
                   <h4>Name: {actor.name}</h4>
                  <p>Movies</p>
                  <ul>
                      {actor.movies.map((movie,index)=>{
                        return (<li key={index}>{movie}</li>)
                      })}
                  </ul>
                  </div>
          )
        })}
      </div>
    </div>
  );
}

export default Actors;
