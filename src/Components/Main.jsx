import { useEffect, useState } from "react";
import MovieData from "./MovieData";
import {FaLinkedin, FaYoutube, FaStarAndCrescent, FaStar, FaPlay} from 'react-icons/fa'
import {Link} from "react-router-dom"


function Main() {
    const [movieData, setMovieData] = useState([]);
    const [tvData, setTvData] = useState([]);
  
  function getTrendingMovieData(type) {
  fetch(`https://api.themoviedb.org/3/trending/${type}/day?api_key=628ba816b2f179a6ae7056ffa26e98f9`)
  // fetch(`https://api.themoviedb.org/3/movie/343611/videos?api_key=628ba816b2f179a6ae7056ffa26e98f9&language=en-US`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    if(type === "movie"){
      setMovieData(data.results)
    }else if(type === "tv"){
      setTvData(data.results)
    }   
  })
  .catch((error) => console.log(error))
}

useEffect(() => {
  getTrendingMovieData("tv");
  getTrendingMovieData("movie");
  
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
                  image= {`https://image.tmdb.org/t/p/w400/${item.poster_path}`}
                  title= {item.name}
                  language={item.original_language}
                  date = {item.first_air_date}
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
              <div class="images1">
                <img src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} alt='' />
                <div className="title">
                  <span>Title:</span> {item.original_title ? item.original_title : item.original_name} <br />
                  <span>Language:</span> {item.original_language} <br /> 
                  {item.vote_average >= 7 ?
                  <span>
                    <FaStar size={10} color="white" className="icon" /> 
                    <FaStar size={10} color="white" className="icon" /> 
                    <FaStar size={10} color="white" className="icon" />
                    <FaStar size={10} color="white" className="icon" />
                    <FaStar size={10} color="white" className="icon" />
                  </span>
                  :
                  <span>
                    <FaStar size={10} color="white" className="icon" /> 
                    <FaStar size={10} color="white" className="icon" /> 
                    <FaStar size={10} color="white" className="icon" /> 
                  </span>
                  
                  } 
                  
                  <br /> 
                  <Link to='/login_form'><FaPlay size={20} color="red" className="icon" /></Link>
                </div>
              </div>
              )}
          </div>
      </div>
      </div>
    </div>
  )
}

export default Main