import React from 'react';
import MovieDetails from './elements/MovieDetails'
import MovieDetailsBar from './elements/MovieDetailsBar'
import Navigation from './elements/Navigation'
import Actor from './elements/Actor'
import MovieMesh from './elements/MovieMesh'
import SpinningWheel from './elements/SpinningWheel'
import { MovieDetailsFetch } from './hooks/MovieDetailsFetch'

const MovieDetailsPage = ({ movieId }) => {
    const [movie, loading, error] = MovieDetailsFetch(movieId)
    if (error) return <div>Something is wrong!</div>;
    if (loading) return <SpinningWheel />
    return (
        <>
            <Navigation movie={movie.original_title} />
            <MovieDetails movie={movie} />
            <MovieDetailsBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue} />
            <MovieMesh header="Actors">
                {movie.actors.map(actor => (
                    <Actor key={actor.credit_id} actor={actor} />
                ))}
            </MovieMesh>
        </>
    )
}

export default MovieDetailsPage;