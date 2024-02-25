import { skills, experiences } from "@/constants/index.ts";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section
      id="about"
      className="content-container relative flex flex-col gap-12 lg:gap-16 mb-8 lg:mb-16"
    >
      <div className="flex flex-col gap-3">
        <h1 className="title-text">
          Hey! I'm{" "}
          <span className="font-semibold text-secondary-accent">Julie</span>
        </h1>

        <p className="text-lg font-light md:text-xl">
          I'm passionate about crafting user-friendly and scalable applications
          that seamlessly blend design and code. I hold a firm belief that a
          top-notch product should be both well-designed and well-developed, and
          aim to create applications that meet these standards. With my
          experience in collaborating with small businesses, I've developed
          products that effectively achieve business objectives.
        </p>
      </div>

      <div className="flex justify-evenly gap-2">
        {skills.map((skill) => (
          <div
            key={skill.name}
            title={skill.name}
            className="flex flex-col items-center rounded-b-lg rounded-tl-lg bg-slate-200 shadow p-0.5 sm:p-1"
          >
            <img
              src={skill.imageUrl}
              alt={skill.name}
              className="h-5 w-5 object-contain transition-all duration-400 transform hover:scale-110"
            ></img>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3 lg:gap-6">
        <h2 className="subtitle-text">Work Experience</h2>
        <div>
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                className="vertical-timeline-element--work"
                contentStyle={{ background: "#fff", color: "#000" }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                date={experience.date}
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={
                  <i className="fas fa-briefcase">
                    <img src={experience.icon}></img>
                  </i>
                }
              >
                <h3 className="vertical-timeline-element-title">
                  {experience.company_name}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {experience.title}
                </h4>
                <ul className="list-disc">
                  {experience.points.map((point) => (
                    <li key={point}>{point}</li>
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
