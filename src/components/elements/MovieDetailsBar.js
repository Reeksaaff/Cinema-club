import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Time, convertBudget } from '../../converters';
import { StyledMovieDetailsBar } from '../styles/StyledMovieDetailsBar';
import PropTypes from 'prop-types'

const MovieDetailsBar = ({ time, movieBudget, revenue }) => (
    <StyledMovieDetailsBar>
        <div className="movieDetailsBarContent">
            <div className="movieDetailsBarColumnContent">
                <FontAwesome className="fa-time" name="hourglass-start" size="2x" />
                <span className="movieDetailsBarInfo">
                    Time: {Time(time)}
                </span>
            </div>
            <div className="movieDetailsBarColumnContent">
                <FontAwesome className="fa-budget" name="usd" size="2x" />
                <span className="movieDetailsBarInfo">
                    Budget: {convertBudget(movieBudget)}
                </span>
            </div>
            <div className="movieDetailsBarColumnContent">
                <FontAwesome className="fa-revenue" name="eye" size="2x" />
                <span className="movieDetailsBarInfo">
                    Revenue: {convertBudget(revenue)}
                </span>
            </div>
        </div>
    </StyledMovieDetailsBar>
)

MovieDetailsBar.propTypes = {
    time: PropTypes.number,
    movieBudget: PropTypes.number,
    revenue: PropTypes.number,
}

export default MovieDetailsBar;