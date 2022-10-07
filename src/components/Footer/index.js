import React from "react";

const Footer = () => {
  return (
    <footer className="dark:bg-slate-800 bg-gray-100 w-full">
      <div className="max-w-8xl mx-auto p-4 sm:px-6 lg:p-6 flex flex-col flex-align-center flex-justify-center gap-2">
        <p className="text-center flex flex-row items-center justify-center author gap-1.5 flex-wrap text-lg">
          <i className="fa-solid fa-code"></i> by
          <a
            href="https://rishbitsnbytes.netlify.app/"
            target="_blank"
            className="text-sky-400 hover:scale-95 transition-all ease-in"
          >
            Rishabh Rathore
          </a>
        </p>
        <ul className="footer-navlinks flex flex-row items-center justify-center gap-4">
          <li className="list-item hover:translate-y-[-7px] transition-all ease-in hover:text-sky-500 text-sky-400 text-xl">
            <a
              href="https://twitter.com/rishbitsnbytes"
              target="_blank"
              className="btn btn-link"
            >
              <span className="icon">
                <i className="fa-brands fa-twitter"></i>
              </span>
            </a>
          </li>
          <li className="list-item hover:translate-y-[-7px] transition-all ease-in hover:text-sky-500 text-sky-400 text-xl">
            <a
              href="https://github.com/rishbitsnbytes"
              target="_blank"
              className="btn btn-link"
            >
              <span className="icon">
                <i className="fa-brands fa-github"></i>
              </span>
            </a>
          </li>
          <li className="list-item hover:translate-y-[-7px] transition-all ease-in hover:text-sky-500 text-sky-400 text-xl">
            <a
              href="https://www.linkedin.com/in/rishrathore/"
              className="btn btn-link"
              target="_blank"
            >
              <span className="icon">
                <i className="fa-brands fa-linkedin-in"></i>
              </span>
            </a>
          </li>
          <li className="list-item hover:translate-y-[-7px] transition-all ease-in hover:text-sky-500 text-sky-400 text-xl">
            <a
              href="mailto:rishrathore1613@gmail.com"
              className="btn btn-link"
              target="_blank"
            >
              <span className="icon">
                <i className="fa-solid fa-envelope"></i>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export { Footer };
