import React from 'react';
import PropTypes from 'prop-types';

function ItinItems({ day, itinTitle, itinContent }) {
    return (
        <ul>
            <li className="flex">
                <p className="mr-4 sm:mr-10 w-1/8 text-base sm:text-xl font-bold">Day {day}</p>
                <svg className="fill-current text-green-500 w-4 h-4 my-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20">
                    <path d="M9.999.8A9.2 9.2 0 00.8 10.001a9.2 9.2 0 0018.399 0A9.2 9.2 0 009.999.8zM10 13.001a3 3 0 110-6 3 3 0 010 6z" />
                </svg>
                <div className="flex flex-col w-2/3 ml-2 pr-4 pb-4">
                    <p className="text-base sm:text-xl font-bold">{itinTitle}</p>
                    <div className="border-l-2 -mx-4 pl-4 pt-3">
                        <p className="text-sm leading-relaxed">{itinContent}</p>
                        <div className="flex justify-end mr-2 mt-4">
                            <button className="flex justify-end bg-white text-black text-xs p-2 border rounded-lg">View more</button>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    );
}

ItinItems.propTypes = {
    day: PropTypes.number.isRequired,
    itinTitle: PropTypes.string.isRequired,
    itinContent: PropTypes.string.isRequired,
}

export default ItinItems