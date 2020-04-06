import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import Footer from './footer';

function Layout({ children }) {
  return (
    <div className="flex flex-col font-gotham min-h-screen text-gray-900">
      <Header />

      {/* <main className="flex flex-col flex-1 md:justify-center max-w-4xl mx-auto px-4 py-8 md:p-8 w-full"> */}
      <main className="bg-gray-200 leading-normal tracking-normal">
        {children}
      </main>

      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
