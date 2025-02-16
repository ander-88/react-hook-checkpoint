import { useEffect, useState } from "react";
import movies from "./MovieListe";
import MovieCard from "./MovieCard";


function FilterMovie() {
  const [inputValue, setInputValue] = useState("");
  const [selectedRating, setSelectedRating] = useState(null);
  const [filteredMovies, setFilteredMovies] = useState(movies);

  useEffect(() => {
    let filtered = movies;

    if (inputValue.trim() !== "") {
      filtered = filtered.filter((movie) =>
        movie.Title.toLowerCase().includes(inputValue.toLowerCase())
      );
    }

    if (selectedRating !== null) {
      filtered = filtered.filter((movie) => movie.rating === selectedRating);
    }

    setFilteredMovies(filtered);
  }, [inputValue, selectedRating]);

  return (
    <div >
      <div style={{ display: 'flex', justifyContent: 'center', gap:'300px', alignItems: "center", flexWrap: 'wrap', padding:"20px" }}>

        <div>
          <span style={{ color: "white", fontWeight: '600', }}>Filter by movie name: </span>
          <input
            type="text"
            className="search"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search for a movie..."
            style={{ borderRadius: '8px', border: 'none', height: '30px', width: "250px", padding: '6px' }}

          />
        </div>

        <div className="rating-buttons">
          <span style={{ color: "white", fontWeight: '600' }}>Filter by Rating: </span>
          {[0, 1, 2, 3, 4, 5].map((rating) => (
            <button
              key={rating}
              onClick={() => setSelectedRating(rating)}
              style={{
                margin: "5px",
                padding: "8px",
                backgroundColor: selectedRating === rating ? "#ffba02" : "white",
                color: "black",
                border: "none",
                cursor: "pointer",
                fontWeight: '600',
                width:"30px",
                height:'30px',
                borderRadius: "8px",
              }}
            >
              {rating}
            </button>
          ))}
          <button
            onClick={() => setSelectedRating(null)}
            style={{
              margin: "5px",
              padding: "8px",
              backgroundColor: "#ffba02",
              borderRadius: "8px",
              color: "#1a1a1a",
              border: "none",
              cursor: "pointer",
              fontWeight: '600'
            }}
          >
            Clear
          </button>
        </div>
      </div>


      <div className="movie-list" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
        {filteredMovies.length > 0 ? (
          filteredMovies.map((film, index) => (
            <MovieCard
              key={index}
              Title={film.Title}
              Description={film.Description}
              posterURL={film.posterURL}
              rating={film.rating}
            />
          ))
        ) : (
          <h3 style={{ color: "white", fontWeight: '600', }}>No movies found</h3>
        )}
      </div>
    </div>
  );
}

export default FilterMovie;









