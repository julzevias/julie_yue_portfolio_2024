import { skills, experiences } from "@/constants/index.ts";
import { githubInverted, linkedin, instagram } from "@/assets/icons/index.ts";
import julieResume from "@/assets/julieResume.pdf";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section
      id="about"
      className="content-container relative flex flex-col gap-12 lg:gap-16 mb-8 lg:mb-16 pt-16"
    >
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <h1 className="title-text">
            Hey! I'm{" "}
            <span className="font-semibold text-secondary-accent">Julie</span>
          </h1>
          <div className="flex gap-5 lg:gap-10">
            <a href="https://github.com/jw-yue" target="_blank">
              <img
                src={githubInverted}
                className="h-7 w-7 object-contain icon-with-hover"
              />
            </a>

            <a href="https://www.linkedin.com/in/j-yue/" target="_blank">
              <img
                src={linkedin}
                className="h-7 w-7 object-contain icon-with-hover"
              />
            </a>

            <a href="https://www.instagram.com/julzevias/" target="_blank">
              <img
                src={instagram}
                className="h-7 w-7 object-contain icon-with-hover"
              />
            </a>
          </div>
        </div>

        <p className="text-lg font-light md:text-xl">
          I'm passionate about crafting user-friendly and scalable applications
          that seamlessly blend design and code. I hold a firm belief that a
          top-notch product should be both well-designed and well-developed, and
          aim to create applications that meet these standards. With my
          experience in collaborating with small businesses, I've developed
          products that effectively achieve business objectives.{" "}
          <a
            href={julieResume}
            target="_blank"
            className="font-semibold text-secondary-accent hover:text-fuchsia-300 hover:transition-all duration-200"
          >
            View Full Résumé
          </a>
        </p>
      </div>

      <div className="flex justify-evenly gap-2">
        {skills.map((skill) => (
          <div
            key={skill.name}
            title={skill.name}
            className="teardrop-border flex flex-col items-center bg-slate-200 shadow p-0.5 sm:p-1"
          >
            <img
              src={skill.imageUrl}
              alt={skill.name}
              className="h-10 w-10 object-contain"
            ></img>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3 lg:gap-6">
        <h2 className="subtitle-text">Work Experience</h2>
        <div>
          <VerticalTimeline lineColor=" rgb(148 163 184)">
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                contentStyle={{
                  color: "#FFF",
                  background: "rgb(100 116 139)",
                  borderStyle: "solid",
                  boxShadow: "none",
                  border: "1px solid  rgb(148 163 184)",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid rgb(100 116 139)",
                }}
                date={experience.date}
                icon={
                  <i className="fas fa-briefcase">
                    <img
                      src={experience.icon}
                      className="rounded-full object-contain"
                    ></img>
                  </i>
                }
              >
                <div>
                  <h3 className=" text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium text-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li key={`experience-point-${index}`} className="pl-1">
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default About;
