import React from 'react';
import { Link } from '@reach/router'
import { StyledMoviePicture } from '../styles/StyledMoviePicture';
import PropTypes from 'prop-types'

const MoviePicture = ({ image, movieId, clickable }) => (
    <StyledMoviePicture>
        {clickable ? (
            <Link to={`/${movieId}`}>
                <img className="clickable" src={image} alt="" />
            </Link>
        ) : (<img src={image} alt="" />)}
    </StyledMoviePicture>
)

MoviePicture.propTypes = {
    image: PropTypes.string,
    movieId: PropTypes.number,
    clickable: PropTypes.bool
}

export default MoviePicture;