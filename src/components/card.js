import React from 'react';
import PropTypes from "prop-types";

function Card ({ imgUrl, cardTitle, cardText, isAction }) {
    return (
        <div className="w-2/3 sm:w-2/5 sm:mx-2 lg:w-1/4 xl:w-1/5 h-auto my-2 mx-2 flex-col">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                    <img src={imgUrl} alt="" className="h-56 w-full rounded-t object-cover"></img>
                    <div className="py-4 px-6">
                        <p className="w-full font-bold text-xl">{cardTitle}</p>
                        <p className="text-sm mt-2">{cardText}</p>
                    </div>
                </a>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden bg-white">
                {
                    isAction === true ? 
                        <div className="flex justify-center items-center p-2">
                            <a href="#" className="text-gray-600 text-sm">More Story</a>
                        </div> :
                        null
                }
            </div>
        </div>
    );
}

Card.propTypes = {
    imgUrl: PropTypes.string,
    cardTitle: PropTypes.string,
    cardText: PropTypes.string,
    isAction: PropTypes.bool.isRequired,
}

export default Card;