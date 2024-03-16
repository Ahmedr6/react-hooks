import React,{useState} from 'react'
import secList from './SecMovieList';
import MovieCard from './MovieCard'
import list from './MovieList'
function Mapping() {
  const [search, setSearch] = useState('');
  return (
    <div>
       <input placeholder='chose'onChange={(e)=>setSearch(e.target.value)} ></input>
       <div className="movie-list">
      {list.filter((movie)=>{return search.toLowerCase()===('')? movie: movie.title.toLocaleLowerCase().includes(search) ||movie.rating.toLocaleLowerCase().includes(search) }).map(movie => (
        <MovieCard
          key={movie.title} // Use a unique key for each MovieCard
          title={movie.title}
          description={movie.description}
          poster={movie.poster}
          rate={movie.rating}
        />
      ))}
      {secList.filter((movie)=>{return search.toLowerCase()===('')? movie: movie.title.toLocaleLowerCase().includes(search) ||movie.rating.toLocaleLowerCase().includes(search) }).map(movie => (
        <MovieCard
          key={movie.title} // Use a unique key for each MovieCard
          title={movie.title}
          description={movie.description}
          poster={movie.poster}
          rate={movie.rating}
        />
      ))}
    </div>
    </div>
  )
}

export default Mapping
