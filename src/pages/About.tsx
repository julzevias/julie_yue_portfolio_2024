import { skills, experiences, educations } from "@/constants/index.ts";
import {
  githubInverted,
  linkedinWhite,
  instagram,
} from "@/assets/icons/index.ts";
import { profilePic } from "@/assets/images/index.ts";
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
      className="content-container relative flex flex-col gap-12 lg:gap-16 pt-16"
    >
      <div className="flex flex-col gap-3">
        <div className="flex justify-between flex-wrap">
          <h1 className="flex title-text whitespace-nowrap">
            Hey! I'm
            <span className="font-semibold text-secondary-accent ml-1.5 lg:ml-2">
              Julie
            </span>
            <img
              src={profilePic}
              className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 object-cover ring-2 ring-slate-100 rounded-full ml-2 mr-2 lg:ml-3 lg:mr-3"
            />
          </h1>
          <div className="flex gap-5 lg:gap-10">
            <a
              href="https://github.com/jw-yue"
              target="_blank"
              className="p-1.5 icon-with-hover"
            >
              <img src={githubInverted} className="h-7 w-7 object-contain" />
            </a>

            <a
              href="https://www.linkedin.com/in/j-yue/"
              target="_blank"
              className="p-1.5 icon-with-hover"
            >
              <img src={linkedinWhite} className="h-7 w-7 object-contain" />
            </a>

            <a
              href="https://www.instagram.com/julzevias/"
              target="_blank"
              className="p-1.5 icon-with-hover"
            >
              <img src={instagram} className="h-7 w-7 object-contain" />
            </a>
          </div>
        </div>

        <p className="text-lg font-light md:text-xl">
          My passion lies in the intersection of design and engineering in
          software development — producing applications that are visually
          impressive and excellently built.{" "}
          <a
            href={julieResume}
            target="_blank"
            className="font-semibold text-secondary-accent hover:text-fuchsia-300 hover:transition-all duration-200"
          >
            View Full Résumé
          </a>
        </p>
        <p className="text-lg font-light md:text-xl">
          When I'm not coding, I love to hang out with my two cats, Ginger and
          Garlic!
        </p>
      </div>

      <div className="subsection-container flex flex-col gap-3 lg:gap-6">
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
      </div>

      <div className="subsection-container flex flex-col gap-3 lg:gap-6">
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
      <div className="subsection-container flex flex-col gap-3 lg:gap-6">
        <hr className="m-0 p-0 border-slate-400"></hr>

        <div className="flex flex-col gap-3 mx-5 lg:mx-10">
          {educations.map((education) => (
            <div key={education.school} className={education.school}>
              <div className="flex justify-between">
                <h3 className="font-semibold text-xl">{education.school}</h3>

                <p>{education.location}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-black-500 font-medium text-base">
                  {education.degree}
                </p>
                <p className="text-slate-300">{education.dates}</p>
              </div>
            </div>
          ))}
        </div>

        <hr className="m-0 p-0 border-slate-400"></hr>
      </div>
    </section>
  );
};

export default About;
