import React from 'react';
import { Link } from '@reach/router';
// import styled from 'styled-components';
import MainLogo from '../images/MovieLogo.jpg';
import { BannerStyles, LogoStyles } from '../styles/StyledBanner';

const Banner = () => {
    return (
        <BannerStyles>
            <div className="bannerContent">
                <Link to="/">
                    <LogoStyles src={MainLogo} alt="" />
                    <h1 className="BannerTitleStyles">Cinema Club</h1>
                </Link>
            </div>
        </BannerStyles>
    )
}
export default Banner;