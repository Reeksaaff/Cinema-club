import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types'
import { PrimaryImageStyles } from '../styles/StyledPrimaryImage'

const PrimaryImage = ({ image, title, text }) => (
    <PrimaryImageStyles image={image}>
        <div className="heroimage-content">
            <div className="heroimage-text">
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
        </div>
    </PrimaryImageStyles>
)

PrimaryImage.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
}

export default PrimaryImage;