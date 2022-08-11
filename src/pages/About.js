import React from "react";
import { IdentificationIcon } from "@heroicons/react/solid";

const PythonLogo = require("../assets/logos/PythonLogo.png");
const ReactLogo = require("../assets/logos/ReactLogo.png");
const JsLogo = require("../assets/logos/JsLogo.png");
const TailwindLogo = require("../assets/logos/TailwindLogo.png");
const SqlLogo = require("../assets/logos/SqlLogo.png");
const MongoDBLogo = require("../assets/logos/MongoDBLogo.png");
const NodeJSLogo = require("../assets/logos/NodeJSLogo.png");
const HtmlLogo = require("../assets/logos/HtmlLogo.png");
const CssLogo = require("../assets/logos/CssLogo.png");
const GitLogo = require("../assets/logos/GitLogo.png");
const DjangoLogo = require("../assets/logos/DjangoLogoGreen.png");
const SASSLogo = require("../assets/icons/SassIcon.png")

const About = () => {
  return (
    <div
      id="About"
      className="mx-12 mt-60 lg:mx-60 items-center justify-center lg:w-1/2 text-justify"
    >
      <div>
        <div className="table">
          <IdentificationIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            About Me
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
        <div className="text-[#a2aabc] text-lg mt-5">
          <code>
            I'm a design first and user-focused software developer and I am
            driven by my family and my peers. I like to collaborate and work
            with others to solve problems. My many years of experience in the
            restaurant industry ranging from part-timer to manager has taught me
            patience, to consider the client, and insight into the
            importance of maintaining strong relationships with people and their
            experiences first. Transitioning to become a software developer has
            taught me to think about creating things that focus on intuitive and
            efficient functionality and design and to provide the best human experience.
          </code>
          <br />
          <br />
          <code>Here are some of the skills I've learned:</code>
          <div className="grid grid-cols-3 gap-2 text-sm mt-10 text-brown_vs">
            <div className="flex flex-row  mb-3">
              <img
                src={JsLogo}
                alt="Js Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>JavaScript (ES6+)</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={ReactLogo}
                alt="React Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>React</code>
            </div>
            <div className="flex flex-row  mb-3">
              <img
                src={TailwindLogo}
                alt="Tailwind Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>Tailwind CSS</code>
            </div>
            <div className="flex flex-row  mb-3">
              <img
                src={PythonLogo}
                alt="Python Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>Python</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={NodeJSLogo}
                alt="NodeJS Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>Nodejs</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={SqlLogo}
                alt="SQL Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>SQL</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={MongoDBLogo}
                alt="MongoDB Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>MongoDB</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={DjangoLogo}
                alt="Django Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>Django</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={HtmlLogo}
                alt="HTML Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>HTML</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={CssLogo}
                alt="CSS Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>CSS</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={SASSLogo}
                alt="SASS Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>SASS</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={GitLogo}
                alt="Git Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>GitHub</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
