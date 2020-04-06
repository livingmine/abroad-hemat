import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Poster from "../components/poster";
import ItinData from '../components/itin-data';
import Itinerary from '../components/itin-item';
import ItinerarySection from '../components/itin-section';

import osakaStory from "../images/osaka-story.jpg";
import taipei from '../images/poster-cards/taipei.jpg';
import maldives from '../images/poster-cards/maldives.jpeg';
import honeymoon from '../images/poster-cards/honeymoon.jpg';


function ItineraryPage() {

  const posters = [
    { id: 1, imgUrl: osakaStory },
    { id: 2, imgUrl: taipei },
    { id: 3, imgUrl: maldives },
    { id: 4, imgUrl: honeymoon },
  ]

  let subTitle = 'Open Trip Japan - Japan Package';
  let title = 'Tokyo Experience';

  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Itinerary"
      />
      <section>
        {/* <!-- Image cards --> */}
        <div className="flex flex-wrap xl:flex-no-wrap justify-center pt-12 align-middle px-4 mt-16 bg-black">
          {
            posters.map(poster => {
              return <Poster
                key={poster.id}
                imgUrl={poster.imgUrl}
                isTitle={false}
              />
            })
          }
        </div>

        {/* <!-- Title section --> */}
        <div className="w-full flex flex-col bg-black h-auto text-white px-6 pb-6 pt-4">
          <p className="text-xs sm:text-base lg:text-xl">{subTitle}</p>
          <p className="text-base sm:text-xl lg:text-3xl tracking-wide font-bold">{title}</p>
        </div>

        {/* <!-- offer section --> */}
        <ItinerarySection title='What We Offer' />

        {/* <!-- itinerary section --> */}
        <div className="w-full flex sm:flex-row flex-col flex-wrap h-auto p-4 bg-black">
          <div className="w-full justify-center flex sm:flex-col px-4 sm:w-2/6 xl:w-1/6 py-2 text-white">
            <p className="font-bold mr-1 text-xl lg:text-4xl">Itinerary</p>
          </div>
          <div className="w-full sm:w-4/6 xl:w-5/6 text-white">
            <hr className="border-2 border-white w-5/5 m-auto mb-4"></hr>
            {
              ItinData.map(itinerary => {
                return <Itinerary
                  key={itinerary.id}
                  day={itinerary.day}
                  itinTitle={itinerary.title}
                  itinContent={itinerary.content}
                />
              })
            }
          </div>
        </div>


        {/* <!-- included section --> */}
        <ItinerarySection title='What Is Included' />

        {/* <!-- not included section --> */}
        <ItinerarySection title='What Is Not Included' />


 
      </section>
    </Layout>
  );
}

export default ItineraryPage;