import { useState } from "react";
import { personalProjects, professionalProjects } from "@/constants/index.ts";
import githubInverted from "/icons/github-inverted.svg";
import { ArrowDown, ArrowUp } from "lucide-react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [numProjects, setNumProjects] = useState(3);

  const viewProjects = () => {
    if (showAllProjects === false && personalProjects.length > 3) {
      setNumProjects(3 + personalProjects.length);
      setShowAllProjects(true);
      return;
    } else if (showAllProjects === true) {
      setNumProjects(3);
      setShowAllProjects(false);
    } //Hello World
  };

  return (
    <section
      id="projects"
      className="content-container flex flex-col gap-7 py-8 lg:py-24 auto-cols-auto auto-rows-auto"
    >
      {/* <div className="flex flex-col gap-3">
        <p className="text-lg font-light md:text-xl">
          I've developed applications for clients and built apps in my free
          time. Feel free to explore the applications and codebase!
        </p>
      </div> */}
      <h2 className="subtitle-text">My Projects</h2>

      <div className="flex flex-col gap-24 lg:ap-48">
        <div className="flex flex-col gap-3 lg:gap-6">
          {professionalProjects.map((project) => (
            <div
              key={project.projectName}
              className="teardrop-border flex justify-around border border-slate-400 bg-slate-600 icon-with-hover shadow p-3 lg:p-4 min-h-0 gap-2"
            >
              <div className="flex flex-col justify-between gap-2 lg:gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-xl">
                    {project.projectName} for{" "}
                    <span className="font-semibold"> {project.client}</span>
                  </h3>

                  <p>{project.description}</p>
                </div>

                <div className="flex flex-col gap-4">
                  {" "}
                  <div className="flex flex-wrap">
                    {project.technologies.map((technology) => {
                      return (
                        <div key={technology} className="technology-bg">
                          <h6 className="p-0.5">{technology}</h6>
                        </div>
                      );
                    })}
                  </div>
                  {project.liveSite}
                </div>
              </div>

              <img
                src={project.image}
                alt={project.projectName}
                className="h-64 w-auto object-contain rounded-lg shadow-lg hidden md:block"
              ></img>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 lg:gap-6">
          <div>
            {/* <h2 className="subtitle-text">Personal Projects</h2> */}
            {/* <h3>Click on an image to see the live site!</h3> */}
          </div>

          <TransitionGroup className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 xl:grid-cols-3 auto-cols-auto grid-flow-row">
            {personalProjects.slice(0, numProjects).map((project) => (
              <CSSTransition key={project.name} timeout={500} classNames="item">
                <div
                  key={project.name}
                  className="teardrop-border flex flex-col space-y-4 border border-slate-500 shadow p-3 lg:p-4"
                >
                  <h3 className="font-semibold text-xl text-center">
                    {project.name}
                  </h3>

                  <div className="flex justify-center">
                    <a
                      href={project.liveSite}
                      title="View live site!"
                      className="duration-10 transform transition-all"
                      target="_blank"
                    >
                      <img
                        src={project.image}
                        alt={project.name}
                        className="h-64 w-64 object-cover rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
                      ></img>
                    </a>
                  </div>

                  <div className="flex flex-col justify-between h-full gap-4">
                    <p>{project.description}</p>

                    <div className="flex flex-col gap-4">
                      <div className="flex flex-wrap">
                        {project.technologies.map((technology) => (
                          <div key={technology} className="technology-bg">
                            <h6 className="p-0.5">{technology}</h6>
                          </div>
                        ))}
                      </div>

                      <a
                        href={project.github}
                        className="flex gap-2"
                        target="_blank"
                      >
                        <img
                          src={githubInverted}
                          className="h-5 w-5 filter"
                        ></img>
                        <p className="text-sm text-with-hover">View Code</p>
                      </a>
                    </div>
                  </div>
                </div>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
      {personalProjects.length > 3 && (
        <button
          className="flex justify-end text-lg gap-2"
          onClick={viewProjects}
        >
          {showAllProjects ? (
            <>
              Show Less
              <span>
                <ArrowUp />
              </span>
            </>
          ) : (
            <>
              Show More
              <span>
                <ArrowDown />
              </span>
            </>
          )}
        </button>
      )}
    </section>
  );
};

export default Projects;
