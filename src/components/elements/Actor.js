import React from 'react';
import NoImage from '../images/no-image.png';
import { BaseImageUrl, PosterSize } from '../../config';
import { StyledActor } from '../styles/StyledActor';
import PropTypes from 'prop-types'

const Actor = ({ actor }) => (
    <StyledActor>
        <img alt="Actor" src={actor.profile_path ? `${BaseImageUrl}${PosterSize}${actor.profile_path}` : NoImage} />
        <span className="actorName">{actor.name}</span>
        <span className="actorCharacter">{actor.character}</span>
    </StyledActor>
);

Actor.propTypes = {
    actor: PropTypes.object
}

export default Actor;