import PropTypes from "prop-types";
import React from "react";

import Header from "./header";

function Layout({ children }) {
  return (
    <div className="flex flex-col font-gotham min-h-screen text-gray-900">
      <Header />

      {/* <main className="flex flex-col flex-1 md:justify-center max-w-4xl mx-auto px-4 py-8 md:p-8 w-full"> */}
      <main className="bg-gray-200 leading-normal tracking-normal">
        {children}
      </main>

      <footer>
        <div className="h-auto mt-4">
          <div className="flex flex-col md:flex-row justify-center">
            <div className="w-4/5 mx-auto md:pl-6">
              <p className="font-bold text-xl">Contact Us</p>
              <div className="flex flex-col p-2">
                <a href="#">
                  <p className="flex text-gray-800 tracking-wide text-sm items-center">
                    <svg className="h-4 w-4 mr-1 fill-current text-gray-800" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 18 18">
                      <path
                        d="M17.946 5.29a6.606 6.606 0 0 0-.418-2.185 4.412 4.412 0 0 0-1.039-1.594A4.412 4.412 0 0 0 14.895.472a6.606 6.606 0 0 0-2.184-.418C11.75.01 11.444 0 9 0S6.25.01 5.29.054a6.606 6.606 0 0 0-2.185.418A4.412 4.412 0 0 0 1.51 1.511 4.412 4.412 0 0 0 .472 3.105a6.606 6.606 0 0 0-.418 2.184C.01 6.25 0 6.556 0 9s.01 2.75.054 3.71a6.606 6.606 0 0 0 .418 2.185 4.412 4.412 0 0 0 1.039 1.594 4.411 4.411 0 0 0 1.594 1.039 6.606 6.606 0 0 0 2.184.418C6.25 17.99 6.556 18 9 18s2.75-.01 3.71-.054a6.606 6.606 0 0 0 2.185-.418 4.602 4.602 0 0 0 2.633-2.633 6.606 6.606 0 0 0 .418-2.184C17.99 11.75 18 11.444 18 9s-.01-2.75-.054-3.71zm-1.62 7.347a4.978 4.978 0 0 1-.31 1.67 2.98 2.98 0 0 1-1.708 1.709 4.979 4.979 0 0 1-1.671.31c-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052a4.979 4.979 0 0 1-1.67-.31 2.788 2.788 0 0 1-1.036-.673 2.788 2.788 0 0 1-.673-1.035 4.978 4.978 0 0 1-.31-1.671c-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637a4.979 4.979 0 0 1 .31-1.67 2.788 2.788 0 0 1 .673-1.036 2.788 2.788 0 0 1 1.035-.673 4.979 4.979 0 0 1 1.671-.31c.95-.043 1.234-.052 3.637-.052s2.688.009 3.637.052a4.979 4.979 0 0 1 1.67.31 2.788 2.788 0 0 1 1.036.673 2.788 2.788 0 0 1 .673 1.035 4.979 4.979 0 0 1 .31 1.671c.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637zM9 4.378A4.622 4.622 0 1 0 13.622 9 4.622 4.622 0 0 0 9 4.378zM9 12a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm5.884-7.804a1.08 1.08 0 1 1-1.08-1.08 1.08 1.08 0 0 1 1.08 1.08z" />
                    </svg>
                                Maldives Hemat
                            </p>
                </a>

                <a href="#">
                  <p className="flex text-gray-800 tracking-wide text-sm items-center">
                    <svg className="h-4 w-4 mr-1 fill-current text-gray-800" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20">
                      <path
                        d="M1.574 5.286l7.5 4.029c.252.135.578.199.906.199.328 0 .654-.064.906-.199l7.5-4.029c.489-.263.951-1.286.054-1.286H1.521c-.897 0-.435 1.023.053 1.286zm17.039 2.203l-7.727 4.027c-.34.178-.578.199-.906.199s-.566-.021-.906-.199-7.133-3.739-7.688-4.028C.996 7.284 1 7.523 1 7.707V15c0 .42.566 1 1 1h16c.434 0 1-.58 1-1V7.708c0-.184.004-.423-.387-.219z" />
                    </svg>
                                email@mail.com
                            </p>
                </a>

                <a href="#">
                  <p className="flex text-gray-800 tracking-wide text-sm items-center">
                    <svg className="h-4 w-4 mr-1 fill-current text-gray-800" xmlns="http://www.w3.org/2000/svg"
                      width="24" height="24" viewBox="0 0 24 24">
                      <path
                        d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                                +62-812-8888-3002
                            </p>
                </a>
              </div>
            </div>

            <div className="w-4/5 mx-auto mt-4 md:mt-0">
              <div className="flex flex-col">
                <p className="font-bold text-xl">Subscribe</p>
                <div
                  className="w-5/6 lg:w-3/5 flex flex-wrap justify-between flex-row bg-white h-auto border-black border-2 rounded-md mt-2">
                  <input type="text" name="" id="" className="w-2/4 py-1 rounded-tl-md rounded-bl-md"></input>
                  <button className="rounded-tr rounded-br bg-black text-white px-2">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-12 mt-4 py-2 text-center">
            <p className="font-hairline text-sm">&copy; erpriliano - 2020</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
