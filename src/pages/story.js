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
        <div className="w-11/12 sm:w-8/12 h-auto bg-white my-4 mx-auto px-4 py-6 shadow-lg rounded-md border">

          <div className="w-full mb-8">
            <img src={openTrip} alt="" className="border rounded-sm shadow-lg mx-auto"></img>
          </div>

          <div className="flex flex-wrap h-auto w-3/5 md:w-1/2 px-3">
            <p className="text-xl font-semibold">Lorem Ipsum Dolor Sit Amet</p>
          </div>

          <div className="flex w-full mt-2 px-3 justify-end items-center">
            <div className="flex flex-col w-full justify-start">
              <p className="text-gray-700">Mr. John Doe</p>
              <p className="text-xs font-light text-gray-600">26 March 2020</p>
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
                luctus.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed my-3">
                Proin
                condimentum, nulla quis scelerisque consectetur, urna neque mollis erat, eu sodales felis justo vel
                mi. Ut turpis
                ante,
                finibus vel lacinia vel, pulvinar iaculis sem. Nam at leo vel purus elementum elementum id vel enim.
                Sed mollis
                blandit
                dolor vel molestie.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed my-3">
                Donec pharetra leo neque, id gravida quam pellentesque id. Vivamus ut urna leo.
                Phasellus a enim eget sapien gravida commodo eu tempus mi. Proin ornare semper facilisis. Integer
                congue nulla eu
                euismod condimentum. Etiam sed elementum magna, consectetur aliquam sapien. Sed tempus tellus et
                nisl facilisis, nec
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