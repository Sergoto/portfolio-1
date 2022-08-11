import React, { useState } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/solid";

const GitLogo = require("../assets/logos/GithubLogo.png");
const LinkedinLogo = require("../assets/logos/LinkedInLogo.png");
const MailLogo = require("../assets/logos/GmailLogo.png");
const JSIcon = require("../assets/icons/JSIcon.png");
const JSXIcon = require("../assets/icons/JSXIcon.png");
const JSONIcon = require("../assets/icons/JSONIcon.png");
const PythonIcon = require("../assets/icons/PythonIcon.png");
const EJSIcon = require("../assets/icons/EJSIcon.png");

const LeftBar = () => {
  const [showWebList, SetShowWebList] = useState(true);
  const [showProjectsList, SetShowProjectsList] = useState(true);
  const [showPageList, SetShowPageList] = useState(true);

  const WebList = () => (
    <div>
      <a href="/">
        <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
          <img
            src={JSIcon}
            alt="JS Icon"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <a
            href="https://sergoto.github.io/Project-1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>IMDB Trivia GAME</p>
          </a>
          <br />
        </div>
      </a>
      <a href="/">
        <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
          <img
            src={EJSIcon}
            alt="EJS Icon"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <a
            href="https://murmuring-shelf-59524.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>TFT DB</p>
          </a>
        </div>
      </a>
      <a href="/">
        <div className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] focus:bg-slate-300 ml-12 w-60">
          <img
            src={JSXIcon}
            alt="JSX Icon"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <a
            href="https://symphonious-gumdrop-992391.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Mind Over Matter</p>
          </a>
        </div>
      </a>
      <a href="/">
        <div className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] ml-12 w-60">
          <img
            src={PythonIcon}
            alt="Python Icon"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <a
            href="https://splendorous-pegasus-bc7f12.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Animedia</p>
          </a>
        </div>
      </a>
    </div>
  );

  const PageList = () => (
    <div>
      <a href="/">
        <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
          <img
            src={GitLogo}
            alt="Git Logo"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <a
            href="https://github.com/Sergoto"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Github</p>
          </a>
        </div>
      </a>

      <a href="/">
        <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
          <img
            src={LinkedinLogo}
            alt="LinkedIn Logo"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <a
            href="https://www.linkedin.com/in/david-lin22/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>LinkedIn</p>
          </a>
        </div>
      </a>

      <a href="/">
        <div className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] focus:bg-slate-300 ml-12 w-60">
          <img
            src={MailLogo}
            alt="Mail Logo"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <a href="mailto:dklin22@gmail.com">
            <p>Mail</p>
          </a>
        </div>
      </a>

      <a href="/">
        <div className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] ml-12 w-60">
          <img
            src={JSONIcon}
            alt="JSON Icon"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <a
            href="https://docs.google.com/document/d/1zTzzdjFjO8g3guQVupjzKrdzr0NUY4PFCTBZuCg5ChY/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Resume</p>
          </a>
        </div>
      </a>
    </div>
  );

  return (
    <div className="text-[#a2aabc] text-lg mt-5 flex bg-[#262526] h-full">
      <div>
        <div
          className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
          onClick={() => SetShowProjectsList(!showProjectsList)}
        >
          {showProjectsList ? (
            <ChevronDownIcon className="w-7 mr-1" />
          ) : (
            <ChevronRightIcon className="w-7 mr-1" />
          )}
          <p>Portfolio</p>
        </div>

        {showProjectsList ? (
          <>
            <div
              className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
              onClick={() => SetShowWebList(!showWebList)}
            >
              {showWebList ? (
                <ChevronDownIcon className="w-7 mr-1  ml-5" />
              ) : (
                <ChevronRightIcon className="w-7 mr-1  ml-5" />
              )}

              <p>Projects</p>
            </div>
            {showWebList ? <WebList /> : null}
          </>
        ) : null}
        <div
          className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
          onClick={() => SetShowPageList(!showPageList)}
        >
          {showPageList ? (
            <ChevronDownIcon className="w-7 mr-1" />
          ) : (
            <ChevronRightIcon className="w-7 mr-1" />
          )}
          <p>Contact</p>
        </div>
        {showPageList ? (
          <>
            <div
              className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
              onClick={() => SetShowPageList(!showPageList)}
            >
              {showPageList ? (
                <ChevronDownIcon className="w-7 mr-1  ml-5" />
              ) : (
                <ChevronRightIcon className="w-7 mr-1  ml-5" />
              )}

              <p>Links</p>
            </div>
            {showPageList ? <PageList /> : null}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default LeftBar;
