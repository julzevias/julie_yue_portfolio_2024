import { educations } from "@/constants/index.ts";

const Education = () => {
  return (
    <div className="flex flex-col gap-3 lg:gap-6">
      <hr className="m-0 p-0 border-slate-400"></hr>

      <div id="education" className="flex flex-col gap-3 mx-5 lg:mx-10">
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
  );
};

export default Education;
