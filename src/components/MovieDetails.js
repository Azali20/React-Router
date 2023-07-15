import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MovieDetails = ({ movies }) => {
    const navigate = useNavigate();
    const { title } = useParams();

    const goBack = () => {
        navigate(-1);
    };

    // Retrieve the movie object based on the title from the URL parameter
    const movie = movies.find((movie) => movie.title === title);

        if (!movie) {
            return <div>Movie not found</div>;
    }

    // Extract the YouTube video ID from the trailerLink
    const videoId = getYouTubeVideoId(movie.trailerLink);

    return (
        <div>
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
        <div>
            <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="Movie Trailer"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            ></iframe>
        </div>
        <button onClick={goBack}>Home Page</button>
        </div>
    );
};

    // This will help function to extract the YouTube video ID
    const getYouTubeVideoId = (url) => {
        const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|v\/|embed\/|user\/(?:[\w#]+\/)+))([^&#?]+)/);
        return match && match[1];
};

export default MovieDetails;
