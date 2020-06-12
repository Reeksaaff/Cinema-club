import React from 'react'
import NoImage from '../images/no-image.png'
import { BaseImageUrl, PosterSize } from '../../config'
import MoviePicture from './MoviePicture'
import { StyledMovieDetails } from '../styles/StyledMovieDetails'
import PropTypes from 'prop-types'


const MovieDetails = ({ movie }) => (
    <StyledMovieDetails backdrop={movie.backdrop_path}>
        <div className="movieDetails-content">
            <div className="movieDetails-picture">
                <MoviePicture image={
                    movie.poster_path ? `${BaseImageUrl}${PosterSize}${movie.poster_path}` : NoImage}
                    clickable={false}
                />
            </div>
            <div className="movieDetails-text">
                <h1>{movie.title}</h1>
                <h2>Scenario:</h2>
                <p>{movie.overview}</p>
                <div className="rating">
                    <div>
                        <h3>Rating:</h3>
                        <div className="score">{movie.vote_average}</div>
                    </div>
                    <div className="director">
                        <h3>Movie director:{movie.directors.length > 1 ? 'S' : ''}</h3>
                        {movie.directors.map(element => (
                            <p key={element.credit_id}>{element.name}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </StyledMovieDetails>
)

MovieDetails.propTypes = {
    movie: PropTypes.object,
    directors: PropTypes.func
}

export default MovieDetails;