import { personalProjects, professionalProjects } from "@/constants/index.ts";
import { github } from "@/assets/icons/index.ts";

const Projects = () => {
  return (
    <section
      id="projects"
      className="content-container relative flex flex-col gap-12 lg:gap-16 mb-8 lg:mb-16 auto-cols-auto auto-rows-auto"
    >
      <div className="flex flex-col gap-3">
        <h1 className="title-text">
          My <span className="font-semibold ">Projects</span>
        </h1>

        <p className="text-lg font-light md:text-xl">
          I've developed applications for clients and built apps in my free
          time. Feel free to explore the applications and codebase!
        </p>
      </div>

      <div className="flex flex-col gap-3 lg:gap-6">
        <h2 className="subtitle-text">Client Project</h2>

        {professionalProjects.map((project) => (
          <div
            key={project.projectName}
            className="flex justify-around rounded-b-lg rounded-tl-lg border border-slate-400 bg-slate-600 shadow p-3 lg:p-4 min-h-0 gap-2"
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
          <h2 className="subtitle-text">Personal Projects</h2>
          <h3>Click on an image to see the live site!</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 xl:grid-cols-3 auto-cols-auto grid-flow-row">
          {personalProjects.map((project) => (
            <div
              key={project.name}
              className="flex flex-col space-y-4 border border-slate-500 rounded-b-lg rounded-tl-lg shadow p-3 lg:p-4"
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
                    className="h-64 w-64 object-cover rounded-lg shadow-lg hover:shadow-2xl transition-all duration-400 transform hover:scale-105"
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
                    <img src={github} className="h-5 w-5"></img>
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
