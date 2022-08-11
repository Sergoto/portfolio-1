import React from "react";

function Header() {
  return (
    <div
      id="Header"
      className="mx-12 lg:mx-60 pt-60 items-center justify-center lg:w-1/2 text-justify"
    >
      <div className="flex flex-col mt-15 mb-5">
        <img className="object-scale-down h-40 w-40" src="https://i.imgur.com/XwhgNwI.jpg" alt="banner"/>
        <code className="text-blue_vs mt-5">Welcome, my name is</code>
        <code className="text-[#b7ceed] text-7xl mt-5">David Lin</code>
        <code className="text-blue_vs mt-2">
          Software Developer | Front End Developer
        </code>
      </div>
      <button className="border border-lightblue_vs text-lightblue_vs mt-10 mb-20 p-3 rounded hover:bg-opacity-10 hover:bg-lightblue_vs w-1/2">
        <a
          href="https://docs.google.com/document/d/1zTzzdjFjO8g3guQVupjzKrdzr0NUY4PFCTBZuCg5ChY"
          target="_blank"
          rel="noopener noreferrer"
        >
          <code>Here is my Resume.</code>
        </a>
      </button>
    </div>
  );
}

export default Header;
