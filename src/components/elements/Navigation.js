import React from 'react'
import { Link } from '@reach/router'
import { StyledNavigation } from '../styles/StyledNavigation'
import PropTypes from 'prop-types'

const Navigation = ({ movie }) => (
    <StyledNavigation>
        <div className="navigationContent">
            <Link to="/">
                <p>Home page</p>
            </Link>
            <p>></p>
            <p>{movie}</p>
        </div>
    </StyledNavigation>
)

Navigation.propTypes = {
    movie: PropTypes.string,
}

export default Navigation;