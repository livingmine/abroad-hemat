import React from "react";

import Layout from "../components/layout";
import Card from '../components/card'
import SEO from "../components/seo";
import HeroBackground from '../components/hero-background'
import Poster from "../components/poster";

import heroBackgroundImg from "../images/hero-background.jpg";
import taipei from '../images/poster-cards/taipei.jpg';
import maldives from '../images/poster-cards/maldives.jpeg';
import osaka from "../images/poster-cards/osaka.jpg";

function IndexPage() {

  const Cards = [
    { id:1, imgUrl: maldives },
    { id:2, imgUrl: osaka },
    { id:3, imgUrl: taipei },
    { id:4, imgUrl: maldives }
  ];

  const Posters = [
    { id: 1, imgUrl: osaka },
    { id: 2, imgUrl: osaka },
    { id: 3, imgUrl: osaka }
  ]

  return (
    <Layout>

      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      {/* <!-- Hero background --> */}
      <HeroBackground 
        heroBackgroundImg={heroBackgroundImg} 
        title='Introduction' 
        mainText='Clubmed Kani' 
        subMainText='on MaldivesHemat' 
        actionButton={true} 
      />

      {/* <!-- Cards section --> */}
      <div className="h-auto w-full mt-4">
        <div className="flex flex-wrap lg:flex-no-wrap justify-center lg:justify-evenly">
          {
            Cards.map(card => {
              return <Card
                key={card.id}
                imgUrl={card.imgUrl}
                cardTitle='Lorem Ipsum'
                cardText='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                isAction={true}
              />
            })
          }
        </div>
      </div>

      {/* <!-- Package posters section --> */}
      <div className="h-auto w-full mt-4">
        <div className="flex flex-wrap justify-center lg:justify-evenly">
          {
            Posters.map(poster => {
              return <Poster
                key={poster.id}
                imgUrl={poster.imgUrl}
                isTitle={true}
                title="Lorem Ipsum"
              />
            })
          }
        </div>
      </div>

      {/* <!-- Story cards --> */}
      <div className="h-auto w-full mt-4 pb-4 bg-black">
        <div className="ml-6 pt-4">
          <p className="text-white font-bold text-2xl tracking-wide">Our Story</p>
        </div>
        <div className="flex flex-wrap justify-center">
          {
            Cards.map(card => {
              return <Card
                key={card.id}
                imgUrl={card.imgUrl}
                cardTitle='Lorem Ipsum'
                cardText='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                isAction={true}
              />
            })
          }
        </div>
      </div>
      <div className="h-auto w-full">
        <div className="flex flex-wrap justify-center">
          {
            Cards.map(card => {
              return <Card
                key={card.id}
                imgUrl={card.imgUrl}
                cardTitle='Lorem Ipsum'
                cardText='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                isAction={true}
              />
            })
          }
        </div>
      </div>

    </Layout>
  );
}

export default IndexPage;
