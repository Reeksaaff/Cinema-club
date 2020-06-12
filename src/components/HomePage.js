import React, { useState } from 'react';
import { DefaultUrl, SearchingBaseUrl, BaseImageUrl, BackdropSize, PosterSize } from '../config';

// Components
import PrimaryImage from './elements/PrimaryImage';
import MovieMesh from './elements/MovieMesh';
import SearchInput from './elements/SearchInput';
import SpinningWheel from './elements/SpinningWheel';
import MoviePicture from './elements/MoviePicture';
import LoadMoreBtn from './elements/LoadMoreBtn';
//Hooks
import { HomeFetch } from './hooks/HomeFetch'
//Images
import NoImage from './images/no-image.png';


const HomePage = () => {
    const [searchedTitle, setSearchedMovie] = useState('');
    const [
        {
            state: { movies, currentPage, heroImage },
            loading,
            error,
        },
        fetchMovies,
    ] = HomeFetch(searchedTitle);

    // Search Input
    const SearchForMovies = search => {
        const endpoint = search ? SearchingBaseUrl + search : DefaultUrl;

        setSearchedMovie(search);
        fetchMovies(endpoint);
        console.log(fetchMovies)
    };

    // Loading new titles
    const loadMore = () => {
        const searchingEndpoint = `${SearchingBaseUrl}${searchedTitle}&page=${currentPage + 1}`;
        const defaultMovieEndpoint = `${DefaultUrl}&page=${currentPage + 1}`;
        const Finalendpoint = searchedTitle ? searchingEndpoint : defaultMovieEndpoint;
        fetchMovies(Finalendpoint);
    }
    // Core
    if (error) return <div>Something went wrong ...</div>;
    if (!movies[0]) return <SpinningWheel />;
    return (
        <>
            <SearchInput callback={SearchForMovies} />
            {!searchedTitle && (
                <PrimaryImage
                    image={`${BaseImageUrl}${BackdropSize}${heroImage.backdrop_path}`}
                    title={heroImage.original_title}
                    text={heroImage.overview}
                />
            )}
            <MovieMesh header={searchedTitle ? 'Results' : 'Highest popularity'}>
                {movies.map(movie => (
                    <MoviePicture
                        key={movie.id}
                        clickable
                        image={
                            movie.poster_path
                                ? `${BaseImageUrl}${PosterSize}${movie.poster_path}`
                                : NoImage
                        }
                        movieId={movie.id}
                        movieName={movie.original_title}
                    />
                ))}
            </MovieMesh>
            {loading && <SpinningWheel />}
            <LoadMoreBtn text="I want more!" callback={loadMore} />
        </>
    );
};

export default HomePage;









































// const HomePage = () => {
//     const [{ movies, totalPages, currentPage, state, loading, error }, fetchMovies] = useHomeFetch();
//     const [searchedMovie, setSearchedMovie] = useState('');

//     const loadMore = () => {
//         const searchEndpoint = `${ApiUrl}search/movie?api_key=${ApiKey}&query=${searchedMovie}&page=${currentPage + 1}`;
//         const defaultMovieEndpoint = `${ApiUrl}movie/popular?api_key=${ApiKey}&page=${currentPage + 1}`;

//         const endpoint = searchedMovie ? searchEndpoint : defaultMovieEndpoint
//         fetchMovies(endpoint);
//     }


//     if (error) return <div>Something went wrong!</div>;
//     // Check if movies are loaded
//     if (!state.movies[0]) return <SpinningWheel />;

//     return (
//         <React.Fragment>
//             <PrimaryImage
//                 // backdrop path - path from api
//                 image={`${BaseImageUrl}${BackdropSize}${state.heroImage.backdrop_path}`}
//                 title={state.heroImage.original_title}
//                 text={state.heroImage.overview}
//             />
//             <SearchBar />
//             <MovieMesh header={searchedMovie ? 'Search result' : 'Popular movies'}>
//                 {state.movies.map(movie => (
//                     <MoviePicture
//                         key={movie.id}
//                         clickable
//                         image={movie.poster_path ? `${BaseImageUrl}${PosterSize}${movie.poster_path}` : NoImage}
//                         movieID={movie.id}
//                         movieName={movie.original_title}
//                     />
//                 ))

//                 }
//             </MovieMesh>
//             {loading && <SpinningWheel />}
//             <LoadMoreBtn text="Load more" callback={loadMore} />
//         </React.Fragment>
//     )
// }

// export default HomePage;