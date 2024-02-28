import { experiences } from "@/constants/index.ts";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const WorkTimeline = () => {
  return (
    <div>
      {/* <h1 className="title-text">Work Experience</h1> */}
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
  );
};

export default WorkTimeline;
