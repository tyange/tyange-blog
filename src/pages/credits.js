import React from "react";

import Layout from "../components/layout/Layout";
import Seo from "../components/seo/seo";

import gatsbyLogo from "../images/logos/Gatsby-Logo.svg";
import tailwindCssLogo from "../images/logos/tailwindcss-logotype.svg";
import gcLogo from "../images/logos/Cloud.svg";
import fontawesomeLogo from "../images/logos/font-awesome-solid.svg"

const Credits = () => {
  return (
    <Layout isCredits="true">
      <Seo title="credits" />
      <div className="w-full h-full flex flex-col items-center justify-center font-sans font-light mb-12">
        <ul className="w-4/12 flex flex-col gap-10 justify-center">
          <li className="flex justify-center">
            <a className="w-fit h-fit" href="https://www.gatsbyjs.com/">
              <img className="w-60" src={gatsbyLogo} alt="Gatsby Logo" />
            </a>
          </li>
          <li className="flex justify-center">
            <a className="w-fit h-fit" href="https://tailwindcss.com/">
              <img
                className="w-60 h-20 sm:60"
                src={tailwindCssLogo}
                alt="Tailwind-css Logo"
              />
            </a>
          </li>
          <li className="flex justify-center">
            <a
              className="w-fit h-fit"
              href="https://www.gatsbyjs.com/products/cloud/"
            >
              <img
                className="w-20 h-15 sm:h-20 lg:w-28"
                src={gcLogo}
                alt="Gatsby Cloud Logo"
              />
            </a>
          </li>
          <li className="flex justify-center font-sans mb-5">
            <a
              className="w-fit h-fit"
              href="https://fonts.google.com/noto/specimen/Noto+Sans+KR"
            >
              <span className="text-xl sm:text-3xl">Noto Sans KR</span>
            </a>
          </li>
          <li className="flex justify-center">
            <a href="https://fontawesome.com/">
              <img className="w-12 md:w-16 sm:w-14" src={fontawesomeLogo} alt="fontawesome logo" />
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default Credits;
