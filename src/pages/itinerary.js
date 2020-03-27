import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import osakaStory from "../images/osaka-story.jpg";
import taipei from '../images/poster-cards/taipei.jpg';
import maldives from '../images/poster-cards/maldives.jpeg';
import honeymoon from '../images/poster-cards/honeymoon.jpg';

function ItineraryPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />
      <section>
        {/* <!-- Image cards --> */}
        <div className="flex flex-wrap xl:flex-no-wrap justify-center pt-12 align-middle mt-16 bg-black">
          <div className="w-4/5 sm:w-2/5 lg:w-1/5 my-2 mx-2">
            <img src={osakaStory} alt="" className="object-cover w-full h-48 rounded-lg"></img>
          </div>

          <div className="w-4/5 sm:w-2/5 lg:w-1/5 my-2 mx-2">
            <img src={taipei} alt="" className="object-cover w-full h-48 rounded-lg"></img>
          </div>

          <div className="w-4/5 sm:w-2/5 lg:w-1/5 my-2 mx-2">
            <img src={maldives} alt="" className="object-cover w-full h-48 rounded-lg"></img>
          </div>

          <div className="w-4/5 sm:w-2/5 lg:w-1/5 my-2 mx-2">
            <img src={honeymoon} alt="" className="object-cover w-full h-48 rounded-lg"></img>
          </div>
        </div>

        {/* <!-- Title section --> */}
        <div className="w-full flex flex-col bg-black h-auto text-white px-6 pb-6 pt-4">
          <p className="text-xs sm:text-base lg:text-xl">Open Trip Japan - Japan Package</p>
          <p className="text-base sm:text-xl lg:text-3xl tracking-wide font-bold">Tokyo Experience</p>
        </div>

        {/* <!-- offer section --> */}
        <div className="w-full flex sm:flex-row flex-col flex-wrap h-auto p-4 bg-white">
          <div className="w-full justify-center flex sm:flex-col px-8 sm:w-2/6 xl:w-1/6 py-2">
            <p className="font-bold mr-1 text-xl lg:text-4xl">What</p>
            <p className="font-bold mr-1 text-xl lg:text-4xl">We</p>
            <p className="font-bold mr-1 text-xl lg:text-4xl">Offer</p>
          </div>
          <div className="w-full sm:w-4/6 xl:w-5/6">
            <hr className="border-2 border-black w-5/5 m-auto mb-4"></hr>
            <p className="text-sm text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt ipsum fermentum fringilla
              dictum.
              Aenean id
              mattis diam, vitae tristique tellus. Aenean semper massa ut lorem imperdiet, in tempor arcu pulvinar. In
              vulputate metus
              nunc, ut ullamcorper mi condimentum sed. Nulla dictum, nunc id varius laoreet, odio neque mollis erat,
              sit
              amet
              elementum erat dolor at urna. Ut tincidunt nisi arcu, sit amet viverra nulla aliquam sed. Nunc erat
              erat,
              lacinia at
              consequat vitae, auctor ut nisi. Maecenas cursus massa eu felis sollicitudin, et lobortis mauris luctus.
              Proin
              condimentum, nulla quis scelerisque consectetur, urna neque mollis erat, eu sodales felis justo vel mi.
              Ut
              turpis ante,
              finibus vel lacinia vel, pulvinar iaculis sem. Nam at leo vel purus elementum elementum id vel enim. Sed
              mollis blandit
              dolor vel molestie. Donec pharetra leo neque, id gravida quam pellentesque id. Vivamus ut urna leo.
                </p>
          </div>
        </div>

        {/* <!-- itinerary section --> */}
        <div className="w-full flex sm:flex-row flex-col flex-wrap h-auto p-4 bg-black">
          <div className="w-full justify-center flex sm:flex-col px-8 sm:w-2/6 xl:w-1/6 py-2 text-white">
            <p className="font-bold mr-1 text-2xl lg:text-4xl">Itinerary</p>
          </div>
          <div className="w-full sm:w-4/6 xl:w-5/6 text-white">
            <hr className="border-2 border-white w-5/5 m-auto mb-4"></hr>

            <ul>
              <li className="flex">
                <p className="mr-4 sm:mr-10 w-1/8 text-base sm:text-xl font-bold">Day 1</p>
                <svg className="fill-current text-green-500 w-4 h-4 my-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20">
                  <path d="M9.999.8A9.2 9.2 0 00.8 10.001a9.2 9.2 0 0018.399 0A9.2 9.2 0 009.999.8zM10 13.001a3 3 0 110-6 3 3 0 010 6z" />
                </svg>
                <div className="flex flex-col w-2/3 ml-2 pr-4">
                  <p className="text-base sm:text-xl font-bold">Arrived in Tokyo</p>
                  <div className="border-l-2 -mx-4 pl-4 pt-3">
                    <p className="text-sm leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis tincidunt
                    ipsum fermentum fringilla dictum. Aenean id
                    mattis diam, vitae tristique tellus. Aenean semper massa ut lorem imperdiet, in tempor
                    arcu
                    pulvinar. In vulputate
                    metus
                    nunc, ut ullamcorper mi condimentum sed.
                                </p>
                    <div className="flex justify-end mr-2 mt-4">
                      <button className="flex justify-end bg-white text-black text-xs p-2 border rounded-lg">View
                                        more</button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            <ul>
              <li className="flex">
                <p className="mr-4 sm:mr-10 w-1/8 text-base sm:text-xl font-bold">Day 2</p>
                <svg className="fill-current text-green-500 w-4 h-4 my-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20">
                  <path d="M9.999.8A9.2 9.2 0 00.8 10.001a9.2 9.2 0 0018.399 0A9.2 9.2 0 009.999.8zM10 13.001a3 3 0 110-6 3 3 0 010 6z" />
                </svg>
                <div className="flex flex-col w-2/3 ml-2 pr-4">
                  <p className="text-base sm:text-xl font-bold">Arrived in Tokyo</p>
                  <div className="border-l-2 -mx-4 pl-4 pt-3">
                    <p className="text-sm leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis tincidunt
                    ipsum fermentum fringilla dictum. Aenean id
                    mattis diam, vitae tristique tellus. Aenean semper massa ut lorem imperdiet, in tempor
                    arcu
                    pulvinar. In vulputate
                    metus
                    nunc, ut ullamcorper mi condimentum sed.
                                </p>
                    <div className="flex justify-end mr-2 mt-4">
                      <button className="flex justify-end bg-white text-black text-xs p-2 border rounded-lg">View
                                        more</button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            <ul>
              <li className="flex">
                <p className="mr-4 sm:mr-10 w-1/8 text-base sm:text-xl font-bold">Day 3</p>
                <svg className="fill-current text-green-500 w-4 h-4 my-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20">
                  <path d="M9.999.8A9.2 9.2 0 00.8 10.001a9.2 9.2 0 0018.399 0A9.2 9.2 0 009.999.8zM10 13.001a3 3 0 110-6 3 3 0 010 6z" />
                </svg>
                <div className="flex flex-col w-2/3 ml-2 pr-4">
                  <p className="text-base sm:text-xl font-bold">Arrived in Tokyo</p>
                  <div className="border-l-2 -mx-4 pl-4 pt-3">
                    <p className="text-sm leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis tincidunt
                    ipsum fermentum fringilla dictum. Aenean id
                    mattis diam, vitae tristique tellus. Aenean semper massa ut lorem imperdiet, in tempor
                    arcu
                    pulvinar. In vulputate
                    metus
                    nunc, ut ullamcorper mi condimentum sed.
                                </p>
                    <div className="flex justify-end mr-2 mt-4">
                      <button className="flex justify-end bg-white text-black text-xs p-2 border rounded-lg">View
                                        more</button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            <ul>
              <li className="flex">
                <p className="mr-4 sm:mr-10 w-1/8 text-base sm:text-xl font-bold">Day 4</p>
                <svg className="fill-current text-green-500 w-4 h-4 my-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20">
                  <path d="M9.999.8A9.2 9.2 0 00.8 10.001a9.2 9.2 0 0018.399 0A9.2 9.2 0 009.999.8zM10 13.001a3 3 0 110-6 3 3 0 010 6z" />
                </svg>
                <div className="flex flex-col w-2/3 ml-2 pr-4">
                  <p className="text-base sm:text-xl font-bold">Arrived in Tokyo</p>
                  <div className="border-l-2 -mx-4 pl-4 pt-3">
                    <p className="text-sm leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis tincidunt
                    ipsum fermentum fringilla dictum. Aenean id
                    mattis diam, vitae tristique tellus. Aenean semper massa ut lorem imperdiet, in tempor
                    arcu
                    pulvinar. In vulputate
                    metus
                    nunc, ut ullamcorper mi condimentum sed.
                                </p>
                    <div className="flex justify-end mr-2 mt-4">
                      <button className="flex justify-end bg-white text-black text-xs p-2 border rounded-lg">View
                                        more</button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            <ul>
              <li className="flex">
                <p className="mr-4 sm:mr-10 w-1/8 text-base sm:text-xl font-bold">Day 5</p>
                <svg className="fill-current text-green-500 w-4 h-4 my-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20">
                  <path d="M9.999.8A9.2 9.2 0 00.8 10.001a9.2 9.2 0 0018.399 0A9.2 9.2 0 009.999.8zM10 13.001a3 3 0 110-6 3 3 0 010 6z" />
                </svg>
                <div className="flex flex-col w-2/3 ml-2 pr-4">
                  <p className="text-base sm:text-xl font-bold">Arrived in Tokyo</p>
                  <div className="border-l-2 -mx-4 pl-4 pt-3">
                    <p className="text-sm leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis tincidunt
                    ipsum fermentum fringilla dictum. Aenean id
                    mattis diam, vitae tristique tellus. Aenean semper massa ut lorem imperdiet, in tempor
                    arcu
                    pulvinar. In vulputate
                    metus
                    nunc, ut ullamcorper mi condimentum sed.
                                </p>
                    <div className="flex justify-end mr-2 mt-4">
                      <button className="flex justify-end bg-white text-black text-xs p-2 border rounded-lg">View
                                        more</button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>


        {/* <!-- included section --> */}
        <div className="w-full flex sm:flex-row flex-col flex-wrap h-auto p-4 bg-white">
          <div className="w-full justify-center flex sm:flex-col px-8 sm:w-2/6 xl:w-1/6 py-2">
            <p className="font-bold mr-1 text-xl lg:text-4xl">What is</p>
            <p className="font-bold mr-1 text-xl lg:text-4xl">Included</p>
          </div>
          <div className="w-full sm:w-4/6 xl:w-5/6">
            <hr className="border-2 border-black w-5/5 m-auto mb-4"></hr>
            <p className="text-sm text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt ipsum fermentum fringilla
              dictum.
              Aenean id
              mattis diam, vitae tristique tellus. Aenean semper massa ut lorem imperdiet, in tempor arcu pulvinar. In
              vulputate metus
              nunc, ut ullamcorper mi condimentum sed. Nulla dictum, nunc id varius laoreet, odio neque mollis erat,
              sit
              amet
              elementum erat dolor at urna. Ut tincidunt nisi arcu, sit amet viverra nulla aliquam sed. Nunc erat
              erat,
              lacinia at
              consequat vitae, auctor ut nisi. Maecenas cursus massa eu felis sollicitudin, et lobortis mauris luctus.
                </p>
          </div>
        </div>

        {/* <!-- not included section --> */}
        <div className="w-full flex sm:flex-row flex-col flex-wrap h-auto p-4 bg-white">
          <div className="w-full justify-center flex sm:flex-col px-4 sm:w-2/6 xl:w-1/6 py-2">
            <p className="font-bold mr-1 text-xl lg:text-4xl">What is</p>
            <p className="font-bold mr-1 text-xl lg:text-4xl">Not</p>
            <p className="font-bold mr-1 text-xl lg:text-4xl">Included</p>
          </div>
          <div className="w-full sm:w-4/6 xl:w-5/6">
            <hr className="border-2 border-black w-5/5 m-auto mb-4"></hr>
            <p className="text-sm text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt ipsum fermentum fringilla
              dictum.
              Aenean id
              mattis diam, vitae tristique tellus. Aenean semper massa ut lorem imperdiet, in tempor arcu pulvinar. In
              vulputate metus
              nunc, ut ullamcorper mi condimentum sed. Nulla dictum, nunc id varius laoreet, odio neque mollis erat,
              sit
              amet
              elementum erat dolor at urna. Ut tincidunt nisi arcu, sit amet viverra nulla aliquam sed. Nunc erat
              erat,
              lacinia at
              consequat vitae, auctor ut nisi. Maecenas cursus massa eu felis sollicitudin, et lobortis mauris luctus.
              Proin
              condimentum, nulla quis scelerisque consectetur, urna neque mollis erat, eu sodales felis justo vel mi.
              Ut
              turpis ante,
              finibus vel lacinia vel, pulvinar iaculis sem. Nam at leo vel purus elementum elementum id vel enim. Sed
              mollis blandit
              dolor vel molestie. Donec pharetra leo neque, id gravida quam pellentesque id. Vivamus ut urna leo.
                </p>
          </div>
        </div>


 
      </section>
    </Layout>
  );
}

export default ItineraryPage;