import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Fast X',
        description: 'Tenth and final installment of the Fast and Furious franchise.',
        posterURL: 'https://www.fboxtv.com/movie/watch-fast-and-furious-10-fbox-8846',
        rating: 4.5,
    },

    {
      title: 'John Wick: Chapter 4',
      description: 'With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.',
      posterURL: 'https://www.fboxtv.com/movie/watch-john-wick-chapter-4-fbox-90163',
      rating: 4.8,
    },

    {
      title: 'Avatar: The Way of Water',
      description: 'Set more than a decade after the events of the first film, “Avatar: The Way of Water” begins to tell the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.',
      posterURL: 'https://www.fboxtv.com/movie/watch-avatar-the-way-of-water-fbox-79936',
      rating: 4.0,
    },

      {
        title: 'Extraction 2',
        description: 'Tasked with extracting a family who is at the mercy of a Georgian gangster, Tyler Rake infiltrates one of the world deadliest prisons in order to save them. But when the extraction gets hot, and the gangster dies in the heat of battle, his equally ruthless brother tracks down Rake and his team to Sydney, in order to get revenge.',
        posterURL: 'https://www.fboxtv.com/movie/watch-extraction-2-fbox-97549',
        rating: 5.0,
          },

    // Add more movies as needed
  ]);

  const [filteredMovies, setFilteredMovies] = useState([]);

  const handleFilter = ({ title, rating }) => {
    // Filter the movies based on title and rating
    const filtered = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        movie.rating >= parseFloat(rating)
    );
    setFilteredMovies(filtered);
  };

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    setFilteredMovies([...filteredMovies, newMovie]);
  };

  return (
    <div className="app">
      <Filter onFilter={handleFilter} />
      <MovieList movies={filteredMovies} />
      <AddMovieForm onAddMovie={handleAddMovie} />
    </div>
  );
};

const AddMovieForm = ({ onAddMovie }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMovie = {
      title,
      description,
      posterURL,
      rating: parseFloat(rating),
    };

    onAddMovie(newMovie);

    setTitle('');
    setDescription('');
    setPosterURL('');
    setRating('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Poster URL"
        value={posterURL}
        onChange={(e) => setPosterURL(e.target.value)}
      />
      <input
        type="text"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default App;
