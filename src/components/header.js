// import { graphql, useStaticQuery, Link } from "gatsby";
// import React, { useState } from "react";
import React from "react";

function Header() {
  // const [isExpanded, toggleExpansion] = useState(false);
  // const { site } = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);

  return (
    <header>
      <nav className="flex flex-row items-center justify-between flex-wrap p-4 fixed w-full z-10 top-0 bg-white">
          <div className="flex items-center">
              <a href="#">
                  <img src="img/navbar-img.jpg" alt="" className="rounded-full w-12 h-12"></img>
              </a>
          </div>

          <div className="flex sm:w-2/3 lg:w-2/4 xl:w-7/12 xl:ml-12">
              <input type="text" className="w-full h-10 rounded-md px-2 border shadow-md appearance-none"
                  placeholder="Search..."></input>
          </div>

          <div className="flex block lg:hidden">
              <button id="nav-toggle"
                  className="flex items-center px-3 py-2 border rounded text-white border-black hover:text-black hover:border-black">
                  <svg className="fill-current h-3 w-3 text-black" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <title>Menu</title>
                      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                  </svg>
              </button>
          </div>

          <div className="w-full lg:w-2/5 xl:w-2/6 lg: lg:flex lg:items-center hidden lg:block pt-6 lg:pt-0"
              id="nav-content">
              <ul className="list-reset lg:flex xl:flex-1 justify-end items-center">
                  <li className="mr-3">
                      <a className="inline-block text-black no-underline font-bold py-2 px-4" href="#">Home</a>
                  </li>
                  <li className="mr-3">
                      <a className="inline-block py-2 px-4 text-gray-400 no-underline" href="#">Open Trip</a>
                  </li>
                  <li className="mr-3">
                      <a className="inline-block py-2 px-4 text-gray-400 no-underline" href="#">FAQ</a>
                  </li>
                  <li className="mr-3">
                      <a className="inline-block py-2 px-4 text-gray-400 no-underline" href="#">Why Us</a>
                  </li>
              </ul>
          </div>
      </nav>
    </header>
    // <header className="bg-teal-700">
    //   <div className="flex flex-wrap items-center justify-between max-w-4xl mx-auto p-4 md:p-8">
    //     <Link className="flex items-center no-underline text-white" to="/">
    //       <svg
    //         className="fill-current h-8 mr-2 w-8"
    //         height="54"
    //         viewBox="0 0 54 54"
    //         width="54"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
    //       </svg>
    //       <span className="font-bold text-xl tracking-tight">
    //         {site.siteMetadata.title}
    //       </span>
    //     </Link>

    //     <button
    //       className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-white"
    //       onClick={() => toggleExpansion(!isExpanded)}
    //     >
    //       <svg
    //         className="fill-current h-3 w-3"
    //         viewBox="0 0 20 20"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <title>Menu</title>
    //         <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    //       </svg>
    //     </button>

    //     <nav
    //       className={`${
    //         isExpanded ? `block` : `hidden`
    //       } md:block md:flex md:items-center w-full md:w-auto`}
    //     >
    //       {[
    //         {
    //           route: `/`,
    //           title: `Home`
    //         },
    //         {
    //           route: `/about`,
    //           title: `About`
    //         },
    //         {
    //           route: `/contact`,
    //           title: `Contact`
    //         }
    //       ].map(link => (
    //         <Link
    //           className="block md:inline-block mt-4 md:mt-0 md:ml-6 no-underline text-white"
    //           key={link.title}
    //           to={link.route}
    //         >
    //           {link.title}
    //         </Link>
    //       ))}
    //     </nav>
    //   </div>
    // </header>
  );
}

export default Header;
