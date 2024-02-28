import {
  githubInverted,
  linkedinWhite,
  instagram,
} from "@/assets/icons/index.ts";
import { profilePic } from "@/assets/images/index.ts";
import julieResume from "@/assets/Julie_Yue_Resume.pdf";

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
              <img src={githubInverted} className="h-6 w-6 object-contain" />
            </a>

            <a
              href="https://www.linkedin.com/in/j-yue/"
              target="_blank"
              className="p-1.5 icon-with-hover"
            >
              <img src={linkedinWhite} className="h-6 w-6 object-contain" />
            </a>

            <a
              href="https://www.instagram.com/julzevias/"
              target="_blank"
              className="p-1.5 icon-with-hover"
            >
              <img src={instagram} className="h-6 w-6 object-contain" />
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
            className="font-semibold text-secondary-accent hover:text-fuchsia-300 hover:transition-all duration-500"
          >
            View Full Résumé
          </a>
        </p>
        <p className="text-lg font-light md:text-xl">
          When I'm not coding, I love to hang out with my two cats, Ginger and
          Garlic!
        </p>
      </div>

      <div
        id="career"
        className="subsection-container flex flex-col gap-3 lg:gap-6"
      ></div>
    </section>
  );
};

export default About;
