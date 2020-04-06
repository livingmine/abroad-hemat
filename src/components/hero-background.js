import React from 'react';
import PropTypes from 'prop-types';

function HeroBackground ({ heroBackgroundImg, title, mainText, subMainText, actionButton })  {
    return (
        <div className="w-full py-48 px-6 lg:px-16 bg-black bg-cover bg-no-repeat relative"
            style={{ backgroundImage: `url(${heroBackgroundImg})` }}>
            <div className="flex flex-col justify-center items-start text-white border-white border-l pl-4">
                <p className="font-light tracking-wider">{title}</p>
                <p className="font-bold italic tracking-wide text-3xl lg:text-5xl">{mainText}</p>
                <p className="font-light tracking-wider">{subMainText}</p>
                {actionButton === true ? <button className="mt-6 border-white border-2 rounded-md p-1 text-sm font-light tracking-wider bg-white text-black">See More</button> : null}
            </div>
        </div>
    );
}

HeroBackground.propTypes = {
    heroBackgroundImg: PropTypes.string,
    title: PropTypes.string,
    mainText: PropTypes.string,
    subMainText: PropTypes.string,
    actionButton: PropTypes.bool
}

export default HeroBackground;