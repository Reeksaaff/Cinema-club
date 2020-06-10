import { useState, useEffect } from 'react';
import { DefaultUrl } from '../../config';

export const HomeFetch = searchedTitle => {
    const [state, setState] = useState({ movies: [] });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchMovies = async endpoint => {
        setError(false);
        setLoading(true);
        // const LoadMoreMovies = endpoint.search('page'); // return page minus one if it doesnt find any
        try {
            const LoadMoreTitles = endpoint.search('page');
            //Parsing data into JSON, first await fetch itself when got data  await goes again when it parsing into JSON - async
            const output = await (await fetch(endpoint)).json();
            //Preventing infinte loop rendering
            //spread all previous properties from previous state
            setState(prev => ({
                ...prev,
                movies: LoadMoreTitles !== -1 ? [...prev.movies, ...output.results] : [...output.results],
                heroImage: prev.heroImage || output.results[0],
                currentPage: output.page,
                totalPages: output.total_pages
            }));
        } catch (error) {
            setError(true);
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    //Session storage
    useEffect(() => {
        if (sessionStorage.homeState) {
            setState(JSON.parse(sessionStorage.homeState));
            setLoading(false);
        } else {
            fetchMovies(DefaultUrl);
        }
    }, []);


    useEffect(() => {
        if (!searchedTitle) {
            sessionStorage.setItem('homeState', JSON.stringify(state));
        }
    }, [searchedTitle, state])

    return [{ state, loading, error }, fetchMovies];
}
