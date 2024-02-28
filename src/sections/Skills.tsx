import { skills } from "@/constants/index.ts";

const Skills = () => {
  return (
    <div className="flex flex-col gap-3 lg:gap-6">
      {/* <h1 className="title-text">Skills</h1> */}
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
  );
};

export default Skills;
