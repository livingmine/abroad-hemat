import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import heroBackground from "../images/hero-background.jpg";
import taipei from '../images/poster-cards/taipei.jpg';
import maldives from '../images/poster-cards/maldives.jpeg';
import osaka from "../images/poster-cards/osaka.jpg";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      {/* <!-- Hero background --> */}
      <div className="w-full py-48 px-6 lg:px-16 bg-black bg-cover bg-no-repeat relative"
        style={{ backgroundImage: `url(${heroBackground})` }}>
        <div className="flex flex-col justify-center items-start text-white border-white border-l pl-4">
          <p className="font-light tracking-wider">Introduction</p>
          <p className="font-bold italic tracking-wide text-3xl lg:text-5xl">Clubmed Kani</p>
          <p className="font-light tracking-wider">on MaldivesHemat</p>
          <button
            className="mt-6 border-white border-2 rounded-md px-2 py-1 text-sm font-light tracking-wider bg-white text-black">See
                More</button>
        </div>
      </div>

      {/* <!-- Cards section --> */}
      <div className="h-auto w-full justify-center mt-4">
        <div className="flex flex-wrap justify-center">
          <div className="w-3/5 sm:w-2/5 lg:w-1/5 h-auto bg-white my-1 md:my-4 mx-4 flex-col">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
              <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                <img src={maldives} alt="" className="h-56 w-full pb-6"></img>
                <p className="w-full font-bold text-xl px-6 mb-2">Lorem Ipsum</p>
                <p className="text-base px-6 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </a>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg px-6 py-4">
              <div className="flex items-center justify-start">
                <button className="border px-4 py-2 rounded bg-white mt-2 text-sm">Visit</button>
              </div>
            </div>
          </div>
          <div className="w-3/5 sm:w-2/5 lg:w-1/5 h-auto bg-white my-1 md:my-4 mx-4 flex-col">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
              <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                <img src={maldives} alt="" className="h-56 w-full rounded-t pb-6"></img>
                <p className="w-full font-bold text-xl px-6 mb-2">Lorem Ipsum</p>
                <p className="text-base px-6 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </a>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg px-6 py-4">
              <div className="flex items-center justify-start">
                <button className="border px-4 py-2 rounded bg-white mt-2 text-sm">Visit</button>
              </div>
            </div>
          </div>
          <div className="w-3/5 sm:w-2/5 lg:w-1/5 h-auto bg-white my-1 md:my-4 mx-4 flex-col">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
              <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                <img src={maldives} alt="" className="h-56 w-full rounded-t pb-6"></img>
                <p className="w-full font-bold text-xl px-6 mb-2">Lorem Ipsum</p>
                <p className="text-base px-6 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </a>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg px-6 py-4">
              <div className="flex items-center justify-start">
                <button className="border px-4 py-2 rounded bg-white mt-2 text-sm">Visit</button>
              </div>
            </div>
          </div>
          <div className="w-3/5 sm:w-2/5 lg:w-1/5 h-auto bg-white my-1 md:my-4 mx-4 flex-col">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
              <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                <img src={maldives} alt="" className="h-56 w-full rounded-t pb-6"></img>
                <p className="w-full font-bold text-xl px-6 mb-2">Lorem Ipsum</p>
                <p className="text-base px-6 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </a>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg px-6 py-4">
              <div className="flex items-center justify-start">
                <button className="border px-4 py-2 rounded bg-white mt-2 text-sm">Visit</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Package posters section --> */}
      <div className="h-auto w-full mt-4">
        <div className="flex flex-wrap justify-center lg:justify-evenly">
          <div className="w-3/5 md:w-2/4 lg:w-1/4 h-auto my-3 md:mx-2">
            <div className="w-full flex-col justify-center text-center">
              <img src={osaka} alt="" className="w-full h-48 object-cover rounded-md shadow-lg"></img>
              <p className="text-xl tracking-wide font-bold mt-2">Lorem Ipsum</p>
            </div>
          </div>
          <div className="w-3/5 md:w-2/4 lg:w-1/4 h-auto my-3 md:mx-2">
            <div className="w-full flex-col justify-center text-center">
              <img src={osaka} alt="" className="w-full h-48 object-cover rounded-md shadow-lg"></img>
              <p className="text-xl tracking-wide font-bold mt-2">Lorem Ipsum</p>
            </div>
          </div>
          <div className="w-3/5 md:w-2/4 lg:w-1/4 h-auto my-3 md:mx-2">
            <div className="w-full flex-col justify-center text-center">
              <img src={osaka} alt="" className="w-full h-48 object-cover rounded-md shadow-lg"></img>
              <p className="text-xl tracking-wide font-bold mt-2">Lorem Ipsum</p>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Story cards --> */}
      <div className="h-auto w-full mt-4 pb-4 bg-black">
        <div className="ml-6 pt-4">
          <p className="text-white font-bold text-2xl tracking-wide">Our Story</p>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="h-auto rounded bg-white w-2/3 sm:w-2/5 sm:mx-2 lg:w-1/5 my-2">
            <div className="flex-1 bg-white rounded overflow-hidden shadow-lg">
              <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                <img src={taipei} alt="" className="h-48 w-full rounded-t object-cover"></img>
                <div className="py-4 px-6">
                  <p className="w-full font-bold text-xl">Title</p>
                  <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                </div>
              </a>
            </div>
          </div>
          <div className="h-auto rounded bg-white w-2/3 sm:w-2/5 sm:mx-2 lg:w-1/5 my-2">
            <div className="flex-1 bg-white rounded overflow-hidden shadow-lg">
              <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                <img src={taipei} alt="" className="h-48 w-full rounded-t object-cover"></img>
                <div className="py-4 px-6">
                  <p className="w-full font-bold text-xl">Title</p>
                  <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                </div>
              </a>
            </div>
          </div>
          <div className="h-auto rounded bg-white w-2/3 sm:w-2/5 sm:mx-2 lg:w-1/5 my-2">
            <div className="flex-1 bg-white rounded overflow-hidden shadow-lg">
              <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                <img src={taipei} alt="" className="h-48 w-full rounded-t object-cover"></img>
                <div className="py-4 px-6">
                  <p className="w-full font-bold text-xl">Title</p>
                  <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                </div>
              </a>
            </div>
          </div>
          <div className="h-auto rounded bg-white w-2/3 sm:w-2/5 sm:mx-2 lg:w-1/5 my-2">
            <div className="flex-1 bg-white rounded overflow-hidden shadow-lg">
              <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                <img src={taipei} alt="" className="h-48 w-full rounded-t object-cover"></img>
                <div className="py-4 px-6">
                  <p className="w-full font-bold text-xl">Title</p>
                  <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="h-auto w-full">
        <div className="flex flex-wrap justify-center">
          <div className="h-auto rounded bg-white w-2/3 sm:w-2/5 sm:mx-2 lg:w-1/5 my-2">
            <div className="flex-1 bg-white rounded overflow-hidden shadow-lg">
              <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                <img src={maldives} alt="" className="h-48 w-full rounded-t object-cover"></img>
                <div className="py-4 px-6">
                  <p className="w-full font-bold text-xl">Title</p>
                  <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                </div>
              </a>
            </div>
          </div>
          <div className="h-auto rounded bg-white w-2/3 sm:w-2/5 sm:mx-2 lg:w-1/5 my-2">
            <div className="flex-1 bg-white rounded overflow-hidden shadow-lg">
              <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                <img src={maldives} alt="" className="h-48 w-full rounded-t object-cover"></img>
                <div className="py-4 px-6">
                  <p className="w-full font-bold text-xl">Title</p>
                  <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                </div>
              </a>
            </div>
          </div>
          <div className="h-auto rounded bg-white w-2/3 sm:w-2/5 sm:mx-2 lg:w-1/5 my-2">
            <div className="flex-1 bg-white rounded overflow-hidden shadow-lg">
              <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                <img src={maldives} alt="" className="h-48 w-full rounded-t object-cover"></img>
                <div className="py-4 px-6">
                  <p className="w-full font-bold text-xl">Title</p>
                  <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                </div>
              </a>
            </div>
          </div>
          <div className="h-auto rounded bg-white w-2/3 sm:w-2/5 sm:mx-2 lg:w-1/5 my-2">
            <div className="flex-1 bg-white rounded overflow-hidden shadow-lg">
              <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                <img src={maldives} alt="" className="h-48 w-full rounded-t object-cover"></img>
                <div className="py-4 px-6">
                  <p className="w-full font-bold text-xl">Title</p>
                  <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  );
}

export default IndexPage;
