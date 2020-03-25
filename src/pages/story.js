import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import osakaStory from "../images/osaka-story.jpg";
import openTrip from "../images/poster-cards/opentrip.jpeg";

function StoryPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />
      <section>
        {/* <!-- Hero background --> */}
        <div className="w-full py-48 px-6 lg:px-16 bg-black bg-cover bg-no-repeat relative"
          style={{ backgroundImage: `url(${osakaStory})` }}>
        </div>

        {/* <!-- Main content wrapper --> */}
        <div className="w-11/12 h-auto bg-white my-4 mx-auto py-6 shadow-lg rounded-md border">
          {/* <!-- top content --> */}
          <div className="h-8 flex justify-between w-full px-4 md:px-8 pt-4">
            <div>
              <p className="text-xs lg:text-base text-gray-800">14 February 2020</p>
            </div>
            <div>
              <p className="flex items-center text-gray-800 text-xs lg:text-base">
                <svg className="w-2 lg:w-4 h-2 lg:h-4 mr-1 text-gray-800" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20">
                  <path
                    d="M9 13h2V4h2l-3-4-3 4h2v9zm8-6h-3v2h2v9H4V9h2V7H3a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z" />
                </svg>
                    Share
                </p>
            </div>
          </div>

          {/* <!-- main content --> */}
          <div className="h-auto w-11/12 my-4 mx-auto">
            {/* <!-- title wrapper --> */}
            <div className="flex flex-wrap px-2 w-2/3 md:w-1/2 lg:w-1/3">
              <p className="font-bold text-base md:text-2xl xl:text-3xl">The Majestic Castle of Kansai, Osaka Jo</p>
            </div>

            <div className="w-5/6 m-auto mt-4">
              <p className="text-sm lg:text-lg text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt ipsum fermentum fringilla
                dictum. Aenean id
                mattis diam, vitae tristique tellus. Aenean semper massa ut lorem imperdiet, in tempor arcu
                pulvinar. In vulputate
                metus
                nunc, ut ullamcorper mi condimentum sed. Nulla dictum, nunc id varius laoreet, odio neque mollis
                erat, sit amet
                elementum erat dolor at urna. Ut tincidunt nisi arcu, sit amet viverra nulla aliquam sed. Nunc erat
                erat, lacinia at
                consequat vitae, auctor ut nisi. Maecenas cursus massa eu felis sollicitudin, et lobortis mauris
                luctus. Proin
                condimentum, nulla quis scelerisque consectetur, urna neque mollis erat, eu sodales felis justo vel
                mi. Ut turpis
                ante,
                finibus vel lacinia vel, pulvinar iaculis sem. Nam at leo vel purus elementum elementum id vel enim.
                Sed mollis
                blandit
                dolor vel molestie. Donec pharetra leo neque, id gravida quam pellentesque id. Vivamus ut urna leo.
                Phasellus a enim eget sapien gravida commodo eu tempus mi. Proin ornare semper facilisis. Integer
                congue nulla eu
                euismod condimentum. Etiam sed elementum magna, consectetur aliquam sapien. Sed tempus tellus et
                nisl facilisis, nec
                condimentum orci laoreet. Ut non sem malesuada, accumsan nunc id, dapibus neque. Cras sit amet metus
                nec turpis
                ullamcorper mattis id sed augue.
                </p>
            </div>

            <div className="flex w-4/5 sm:w-5/6 mx-auto justify-center my-2 sm:px-16">
              <img src={osakaStory} alt="" className="border rounded-sm shadow-2xl"></img>
            </div>

            <div className="w-5/6 m-auto mt-4">
              <p className="text-sm lg:text-lg text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt ipsum fermentum fringilla
                dictum. Aenean
                id
                mattis diam, vitae tristique tellus. Aenean semper massa ut lorem imperdiet, in tempor arcu
                pulvinar. In
                vulputate
                metus
                nunc, ut ullamcorper mi condimentum sed. Nulla dictum, nunc id varius laoreet, odio neque mollis
                erat, sit amet
                elementum erat dolor at urna. Ut tincidunt nisi arcu, sit amet viverra nulla aliquam sed. Nunc erat
                erat,
                lacinia at
                consequat vitae, auctor ut nisi. Maecenas cursus massa eu felis sollicitudin, et lobortis mauris
                luctus. Proin
                condimentum, nulla quis scelerisque consectetur, urna neque mollis erat, eu sodales felis justo vel
                mi. Ut
                turpis
                ante,
                finibus vel lacinia vel, pulvinar iaculis sem. Nam at leo vel purus elementum elementum id vel enim.
                Sed mollis
                blandit
                dolor vel molestie. Donec pharetra leo neque, id gravida quam pellentesque id. Vivamus ut urna leo.
                Phasellus a enim eget sapien gravida commodo eu tempus mi. Proin ornare semper facilisis. Integer
                congue nulla
                eu
                euismod condimentum. Etiam sed elementum magna, consectetur aliquam sapien. Sed tempus tellus et
                nisl facilisis,
                nec
                condimentum orci laoreet. Ut non sem malesuada, accumsan nunc id, dapibus neque. Cras sit amet metus
                nec turpis
                ullamcorper mattis id sed augue.
                </p>
            </div>

            <div className="flex w-4/5 sm:w-5/6 mx-auto justify-center my-2 sm:px-16">
              <img src={osakaStory} alt="" className="border rounded-sm shadow-2xl"></img>
            </div>

            <div className="w-5/6 m-auto mt-4">
              <p className="text-sm lg:text-lg text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt ipsum fermentum fringilla
                dictum. Aenean
                id
                mattis diam, vitae tristique tellus. Aenean semper massa ut lorem imperdiet, in tempor arcu
                pulvinar. In
                vulputate
                metus
                nunc, ut ullamcorper mi condimentum sed. Nulla dictum, nunc id varius laoreet, odio neque mollis
                erat, sit amet
                elementum erat dolor at urna. Ut tincidunt nisi arcu, sit amet viverra nulla aliquam sed. Nunc erat
                erat,
                lacinia at
                consequat vitae, auctor ut nisi. Maecenas cursus massa eu felis sollicitudin, et lobortis mauris
                luctus. Proin
                condimentum, nulla quis scelerisque consectetur, urna neque mollis erat, eu sodales felis justo vel
                mi. Ut
                turpis
                ante,
                finibus vel lacinia vel, pulvinar iaculis sem. Nam at leo vel purus elementum elementum id vel enim.
                Sed mollis
                blandit
                dolor vel molestie. Donec pharetra leo neque, id gravida quam pellentesque id. Vivamus ut urna leo.
                Phasellus a enim eget sapien gravida commodo eu tempus mi. Proin ornare semper facilisis. Integer
                congue nulla
                eu
                euismod condimentum. Etiam sed elementum magna, consectetur aliquam sapien. Sed tempus tellus et
                nisl facilisis,
                nec
                condimentum orci laoreet. Ut non sem malesuada, accumsan nunc id, dapibus neque. Cras sit amet metus
                nec turpis
                ullamcorper mattis id sed augue.
                </p>
            </div>
          </div>
        </div>

        {/* <!-- Our story section --> */}
        <div className="w-full h-auto bg-black">
          <p className="text-center text-white pt-4 tracking-wide text-xl font-bold">More story from us</p>
          <hr className="bg-white m-auto mt-2 border-2 border-white w-32"></hr>

          <div className="flex flex-wrap justify-center mt-4">
            <div className="w-3/5 sm:w-2/5 lg:w-1/5 mx-2 my-2 h-auto bg-white rounded">
              <div className="flex-1 rounded-t rounded-b-none overflow-hidden">
                <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                  <img src={openTrip} alt="" className="h-56 w-full rounded-t object-cover"></img>
                  <div className="py-4 px-6">
                    <p className="w-full font-bold text-xl">Title</p>
                    <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                </a>
              </div>
              <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden bg-white">
                <div className="flex justify-center items-center p-2">
                  <a href="#" className="text-gray-600 text-sm">More Story</a>
                </div>
              </div>
            </div>
            <div className="w-3/5 sm:w-2/5 lg:w-1/5 mx-2 my-2 h-auto bg-white rounded">
              <div className="flex-1 rounded-t rounded-b-none overflow-hidden">
                <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                  <img src={openTrip} alt="" className="h-56 w-full rounded-t object-cover"></img>
                  <div className="py-4 px-6">
                    <p className="w-full font-bold text-xl">Title</p>
                    <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                </a>
              </div>
              <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden bg-white">
                <div className="flex justify-center items-center p-2">
                  <a href="#" className="text-gray-600 text-sm">More Story</a>
                </div>
              </div>
            </div>
            <div className="w-3/5 sm:w-2/5 lg:w-1/5 mx-2 my-2 h-auto bg-white rounded">
              <div className="flex-1 rounded-t rounded-b-none overflow-hidden">
                <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                  <img src={openTrip} alt="" className="h-56 w-full rounded-t object-cover"></img>
                  <div className="py-4 px-6">
                    <p className="w-full font-bold text-xl">Title</p>
                    <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                </a>
              </div>
              <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden bg-white">
                <div className="flex justify-center items-center p-2">
                  <a href="#" className="text-gray-600 text-sm">More Story</a>
                </div>
              </div>
            </div>
            <div className="w-3/5 sm:w-2/5 lg:w-1/5 mx-2 my-2 h-auto bg-white rounded">
              <div className="flex-1 rounded-t rounded-b-none overflow-hidden">
                <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                  <img src={openTrip} alt="" className="h-56 w-full rounded-t object-cover"></img>
                  <div className="py-4 px-6">
                    <p className="w-full font-bold text-xl">Title</p>
                    <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                </a>
              </div>
              <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden bg-white">
                <div className="flex justify-center items-center p-2">
                  <a href="#" className="text-gray-600 text-sm">More Story</a>
                </div>
              </div>
            </div>
          </div>
        </div>



      </section>
    </Layout>
  );
}

export default StoryPage;