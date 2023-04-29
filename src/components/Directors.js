import React from "react";
import { directors } from "../data";

function Directors() {
  const elem = directors.map((director,index)=>{
    return (
      < div key={index}>
        <h4>{director.name}</h4>
        <ul>
          {director.movies.map((movie,index) => {
            return ( <li key={index}>{movie}</li>)
          })}
        </ul>
      </div>
    );
  })
  return (
    <div>
      {/*{code here}*/}
      <h1>Directors Page</h1>
      {elem}
    </div>
  );
}

export default Directors;
