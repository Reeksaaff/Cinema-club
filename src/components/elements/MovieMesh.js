import React from 'react';
import PropTypes from 'prop-types'
import { Mesh, MeshContent } from '../styles/StyledMovieMesh'

const MovieMesh = ({ header, children }) => (
    <Mesh>
        <h1>{header}</h1>
        <MeshContent>{children}</MeshContent>
    </Mesh>
)

MovieMesh.propTypes = {
    header: PropTypes.string
}

export default MovieMesh;