import React from 'react'
import PropTypes from 'prop-types'

function StoryWrapper({ imgUrl, contentTitle, authorName, date, content }) {
    return (
        <div className="w-11/12 sm:w-8/12 h-auto bg-white my-4 mx-auto px-4 py-6 shadow-lg rounded-md border">

            <div className="w-full mb-8">
                <img src={imgUrl} alt="" className="border rounded-sm shadow-lg mx-auto"></img>
            </div>

            <div className="flex flex-wrap h-auto w-3/5 md:w-1/2 px-3">
                <p className="text-xl font-semibold">{contentTitle}</p>
            </div>

            <div className="flex w-full mt-2 px-3 justify-end items-center">
                <div className="flex flex-col w-full justify-start">
                    <p className="text-gray-700">{authorName}</p>
                    <p className="text-xs font-light text-gray-600">{date}</p>
                </div>
                <div className="bg-white flex items-center justify-end flex-row w-1/3">
                    <svg className="w-3 h-3 fill-current text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M15 13.442c-.633 0-1.204.246-1.637.642l-5.938-3.463c.046-.188.075-.384.075-.584s-.029-.395-.075-.583L13.3 6.025A2.48 2.48 0 0 0 15 6.7c1.379 0 2.5-1.121 2.5-2.5S16.379 1.7 15 1.7s-2.5 1.121-2.5 2.5c0 .2.029.396.075.583L6.7 8.212A2.485 2.485 0 0 0 5 7.537c-1.379 0-2.5 1.121-2.5 2.5s1.121 2.5 2.5 2.5a2.48 2.48 0 0 0 1.7-.675l5.938 3.463a2.339 2.339 0 0 0-.067.546A2.428 2.428 0 1 0 15 13.442z" />
                    </svg>
                    <p className="ml-1 text-gray-600 text-sm">Share</p>
                </div>
            </div>

            <div className="w-full mt-6 px-6 h-auto">
                <div>
                    <p className="text-sm text-gray-600 leading-relaxed my-3">
                        {content}
                    </p>
                </div>
            </div>

        </div>
    );
}

StoryWrapper.propTypes = {
    imgUrl: PropTypes.string,
    contentTitle: PropTypes.string.isRequired,
    authorName: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}

export default StoryWrapper