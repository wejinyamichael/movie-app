import { useEffect, useState } from "react";
import {FaStar, FaPlay} from 'react-icons/fa'
import {Link} from "react-router-dom"
import MovieData from "./MovieData";



function Subscribed_Main() {
  const [movieData, setMovieData] = useState([]);
  const [tvData, setTvData] = useState([]);
  
  
  function getTrendingMovieData(type) {
  fetch(`https://api.themoviedb.org/3/trending/${type}/day?api_key=628ba816b2f179a6ae7056ffa26e98f9`)
  .then((res) => res.json())
  .then(data => {
    console.log(data);
    if(type === "movie"){
      setMovieData(data.results)
    }else if (type === "tv"){
      setTvData(data.results)
    }
  })
  .catch((error) => console.log(error) )
}

useEffect(() => {
  getTrendingMovieData("movie");
  getTrendingMovieData("tv");
}, []);




  return (
    <div>
        <div className="movie">
      <div>
          <h3>Get Started With Our Trending Movies</h3><br />
      </div>
      <div class="container4">
          <div class="image-container">
        {tvData.map((item) =>
              <MovieData 
                image={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
                title= {item.original_title ? item.original_title : item.original_name}
                language = {item.original_language}
                date={item.first_air_date}
                rating = {item.vote_average}
              />
              )}
          </div>
      </div>
    </div>

    <div className="tv">
      <div>
          <h3>Get Started With Our Trending TV</h3> <br />
      </div>
      <div class="container4">

          <div class="image-container">
        {movieData.map((item) =>
             <MovieData 
                image={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
                title= {item.original_title ? item.original_title : item.original_name}
                language= {item.original_language}
                date= {item.first_air_date}
                rating= {item.vote_average}
             />
              )}
          </div>
      </div>
      </div>
    </div>
  )
}

export default Subscribed_Main