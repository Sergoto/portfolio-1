import React from "react";
import { ClipboardListIcon } from "@heroicons/react/solid";

const Resume = () => {
  return (
    <div
      id="Resume"
      className="lg:w-1/2 mt-64 mb-4 text-justify mx-12 lg:mr-60 lg:ml-auto"
    >
      <div>
        <div className="table">
          <ClipboardListIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            Education|Projects
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
      </div>
      <div className="text-[#a2aabc] text-lg mt-5">
        <div className="flex flex-row">
          <div className="w-1/4">
            <code className="text-yellow_vs">Education</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">General Assembly</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Software Engineering Immeserive
            </code>
            <br />
            <code className="text-xs text-brown_vs">
              • Janurary 2022 - July 2022
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10 flex-wrap">
          <div className="w-1/4">
            <code className="text-yellow_vs">Projects</code>
          </div>
          <div className="w-3/4">
            <code className="text-sm">
              <a
                href="https://github.com/Sergoto/Team-Fight-Tactics-DB/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <br />• Team Fight Tactics DB
                <br />- A backend Database/compendium for the game Team Fight
                Tactics built with Node.js, Express and MongoDB, while using EJS
                to render.
                <br />
                <img src="https://i.imgur.com/t9IAslX.png" alt="" />| Click here
                to check out the GitHub Code |
              </a>
              <br />
              <br />
              <br/>
              <a
                href="https://github.com/Sergoto/front-end-newriders/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <br />• Mind Over Matter
                <br />- A mental health tracking app using a 100 day mood
                map/journal entry system. Built with MERN stack(Mongoose,
                Express, React and NodeJS)
                <br />
  
                <img src="https://i.imgur.com/7SOdE3m.png" alt="" />| Click here
                to check out the GitHub Code |
              </a>
              <br />
              <br/>
              <a
                href="https://github.com/Sergoto/animedia-frontend/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <br />• Animedia
                <br />- An Anime database for new and old anime fans to easily
                explore, learn and discover new Anime. Built with MERN
                stack(Mongoose, Express, React and NodeJS) Stack.
                <br />
                <img src="https://i.imgur.com/c2JOfyg.png" alt="" />| Click here
                to check out the GitHub Code |
              </a>
              <br/>
              <br />
              <br/>
              <a
                href="https://github.com/Sergoto/Project-1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                • IMDB Ratings Game
                <br />- An IMDB Ratings Trivia game built with HTML, CSS and
                JavaScript.
                <br />
                <img src="https://i.imgur.com/qf13vu3.png" alt="" />
                | Click here
                to check out the GitHub Code |
              </a>
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
