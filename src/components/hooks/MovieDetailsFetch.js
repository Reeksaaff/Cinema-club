import { useState, useEffect, useCallback } from 'react';
import { ApiUrl, ApiKey } from '../../config';

export const MovieDetailsFetch = movieId => {
    const [state, setState] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const fetchData = useCallback(async () => {
        setError(false);
        setLoading(true);
        try {
            const MainEndpoint = `${ApiUrl}movie/${movieId}?api_key=${ApiKey}`;
            const output = await (await fetch(MainEndpoint)).json();
            const creditsEndpoint = `${ApiUrl}movie/${movieId}/credits?api_key=${ApiKey}`
            const creditsOutput = await (await fetch(creditsEndpoint)).json();
            const directors = creditsOutput.crew.filter(
                crewMember => crewMember.job === 'Director'
            );
            setState({
                ...output,
                actors: creditsOutput.cast,
                directors,
            })
        } catch (error) {
            setError(true);
        }
        setLoading(false);
    }, [movieId])

    //Local storage
    useEffect(() => {
        if (localStorage[movieId]) {
            setState(JSON.parse(localStorage[movieId]));
            setLoading(false)
        } else {
            fetchData();
        }
    }, [fetchData, movieId])

    useEffect(() => {
        localStorage.setItem(movieId, JSON.stringify(state));
    }, [movieId, state])

    return [state, loading, error];
}