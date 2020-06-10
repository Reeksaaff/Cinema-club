import React from 'react';
// import { createGlobalStyle } from 'styled-components';
import { Router } from '@reach/router';
import Banner from './elements/Banner';
import HomePage from './HomePage';
import { ResetStyles } from './styles/ResetStyles';
import MovieDetailsPage from './MovieDetailsPage';
import NotFound from './NotFound';

const App = () => (
    <div>
        <Banner />
        <Router>
            <HomePage path="/" />
            <MovieDetailsPage path="/:movieId" />
            <NotFound default />
        </Router>
        <ResetStyles />
    </div>
)

export default App;
