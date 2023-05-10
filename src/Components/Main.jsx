import { useEffect, useState } from "react";
import {FaLinkedin, FaYoutube, FaStarAndCrescent, FaStar, FaPlay} from 'react-icons/fa'
import {Link} from "react-router-dom"



function Main() {
    const [movieData, setMovieData] = useState([]);
  
  
  function getTrendingMovieData(type) {
  fetch(`https://api.themoviedb.org/3/trending/${type}/day?api_key=628ba816b2f179a6ae7056ffa26e98f9`)
  .then((res) => res.json())
  .then(data => {
    console.log(data);
    setMovieData(data.results)
  })
}

useEffect(() => {
  getTrendingMovieData("movie");
}, []);





  const [tvData, setTvData] = useState([]);
    
  function getTrendingTvData(type) {
  fetch(`https://api.themoviedb.org/3/trending/${type}/day?api_key=628ba816b2f179a6ae7056ffa26e98f9`)
  .then((res) => res.json())
  .then(data => {
    console.log(data);
    setTvData(data.results)
  })
  .catch(err => console.log(err))
}

useEffect(() => {
  getTrendingTvData("tv");
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
              <div class="images1">
                <img src={`https://image.tmdb.org/t/p/w400/${item.poster_path}`} alt='' />
                <div className="title">
                <span>Title:</span> {item.original_title ? item.original_title : item.original_name} <br />
                  <span>Language:</span> {item.original_language} <br /> 
                  {/* <span>Released Date:</span> {item.release_date} <br />  */}
                  <FaStar size={10} color="black" className="icon" /> 
                  <FaStar size={10} color="black" className="icon" /> 
                  <FaStar size={10} color="black" className="icon" /> {item.vote_average} <br /> 
                  <Link to='/login_form'><FaPlay size={20} color="red" className="icon play" /></Link>
                </div>
              </div>
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
                  {/* <span>Released Date:</span> {item.release_date} <br />  */}
                  <FaStar size={10} color="black" className="icon" /> 
                  <FaStar size={10} color="black" className="icon" /> 
                  <FaStar size={10} color="black" className="icon" /> {item.vote_average} <br /> 
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