import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import HeroBackground from "../components/hero-background";
import Card from "../components/card";
import StoryWrapper from "../components/story-wrapper";

import osakaStory from "../images/osaka-story.jpg";
import openTrip from "../images/poster-cards/opentrip.jpeg";


function StoryPage() {

  const Cards = [
    {id: 1, imgUrl: openTrip},    
    {id: 2, imgUrl: openTrip},    
    {id: 3, imgUrl: openTrip},    
    {id: 4, imgUrl: openTrip},    
  ]

  let content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies urna ligula, vitae semper urna lacinia vitae. Praesent risus felis, convallis at purus et, aliquet eleifend metus. Mauris dictum ligula at lacus varius ultrices. Etiam rutrum est scelerisque turpis pretium, in porta ligula molestie. In accumsan eu arcu id ultricies. Integer felis nunc, efficitur vitae ante a, finibus dictum nisi. Vivamus ornare lectus nec nunc blandit suscipit. Ut et odio rutrum, luctus tellus nec, consectetur justo. Phasellus lobortis consectetur nisi, non tempus urna cursus et. Vestibulum tincidunt lectus eros, id consectetur mauris pharetra sit amet. Sed id turpis arcu. Vestibulum aliquam dolor augue, eu vehicula est convallis in. Cras ac libero sapien.Nam et urna euismod, scelerisque ligula et, semper urna.Sed interdum lacinia odio, ut egestas erat mattis id.Pellentesque bibendum et nisl et elementum.Morbi malesuada tellus lacinia eros consectetur, eleifend tempor nibh ultricies.In quis massa a urna faucibus mollis.Donec lobortis pretium suscipit.Phasellus eu nunc sed diam vehicula mattis et sed lorem.Nullam et orci lobortis lectus elementum lobortis.Nulla odio eros, dictum eu nibh euismod, sollicitudin placerat nisl.Nulla efficitur rutrum diam eu lacinia.Aliquam et pellentesque tellus.";

  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Story"
      />
      <section>
        {/* <!-- Hero background --> */}
        <HeroBackground
          heroBackgroundImg={osakaStory}
        />

        {/* <!-- Main content wrapper --> */}
        <StoryWrapper
          imgUrl={osakaStory}
          authorName='Mr. Joe'
          contentTitle='Lorem Ipsum Dolor sit Amet'
          content={content}
          date='03 April 2020'
        />

        {/* <!-- Our story section --> */}
        <div className="w-full h-auto bg-black">
          <p className="text-center text-white pt-4 tracking-wide text-xl font-bold">More story from us</p>
          <hr className="bg-white m-auto mt-2 border-2 border-white w-32"></hr>

          <div className="flex flex-wrap justify-center mt-4">
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



      </section>
    </Layout>
  );
}

export default StoryPage;