import { skills, experiences } from "../constants/index.ts";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <>
      <section className="flex flex-col items-center">
        <h1 className="text-4xl">
          Hey! I'm <span className="font-semibold">Julie</span>
        </h1>

        <div>
          Frontend Developer based in Austin, Texas with a proficiency in
          building scalable and user-friendly web applications.
        </div>
      </section>

      <div className="flex flex-col">
        <h3 className="font-semibold">My Skills</h3>

        <div className="flex justify-center flex-wrap gap-10">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center">
              <div className="">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-full h-20 aspect-ratio: 16 / 9 object-cover"
                ></img>
              </div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col">
        <div className="font-semibold">Work Experience</div>
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
    </>
  );
};

export default About;
