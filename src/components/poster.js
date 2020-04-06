import React from 'react'
import PropTypes from "prop-types";

function Poster({ imgUrl, isTitle, title }) {
    return(
        <div className="w-3/5 md:w-2/4 lg:w-1/4 h-auto my-3 md:mx-2">
            <div className="w-full flex-col justify-center text-center">
                <img src={imgUrl} alt="" className="w-full h-48 object-cover rounded-md shadow-lg"></img>
                {
                    isTitle === true ? <p className="text-xl tracking-wide font-bold mt-2">{title}</p> : null
                }
            </div>
        </div>
    );
}

Poster.propTypes = {
    imgUrl: PropTypes.string,
    isTitle: PropTypes.bool,
    title: PropTypes.string
}

export default Poster;