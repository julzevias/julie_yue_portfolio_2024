import githubInverted from "/icons/github-inverted.svg";
import linkedinWhite from "/icons/linkedin-white.svg";
import instagram from "/icons/instagram.png";
import profilePic from "/images/profile-pic.jpg";
import julieResume from "/Julie_Yue_Resume.pdf";

const About = () => {
  return (
    <section
      id="about"
      className="content-container relative flex flex-col lg:flex-row-reverse items-start justify-around gap-12 lg:gap-16 pt-20"
    >
      <div>
        <img
          src={profilePic}
          className="flex items-center object-contain w-full h-full max-w-96 lg:max-w-full rounded-b-lg rounded-tl-lg transform transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="flex flex-col lg:pt-20 gap-7">
        <h1 className="flex title-text whitespace-nowrap">
          Hey! I'm
          <span className="font-semibold text-secondary-accent ml-1.5 lg:ml-2">
            <span className="font-arbutus text-4xl lg:text-5xl">J</span>ulie,
          </span>
        </h1>
        <p className="text-lg font-light md:text-xl pr-2">
          a frontend developer passionate about creating visually impressive and
          well-constructed applications. Since earning my Computer Science
          degree in 2021, I've contributed to feature development for various
          companies. My goal is to continue blending design and engineering in
          my future work!{" "}
          <a
            href={julieResume}
            target="_blank"
            className="font-semibold text-secondary-accent hover:text-fuchsia-300 hover:transition-all duration-500 whitespace-nowrap"
          >
            View Full Résumé
          </a>
        </p>
        <p className="text-lg font-light md:text-xl">
          When I'm not coding, I love to cook, play games, and hang out with my
          two cats, Ginger and Garlic.{" "}
          <span className="whitespace-nowrap">😸🎮🍜</span>
        </p>

        <div className="flex gap-5 lg:gap-10">
          <a
            href="https://github.com/jw-yue"
            target="_blank"
            className="p-1.5 icon-with-hover"
          >
            <img src={githubInverted} className="h-8 w-8 object-contain" />
          </a>

          <a
            href="https://www.linkedin.com/in/j-yue/"
            target="_blank"
            className="p-1.5 icon-with-hover"
          >
            <img src={linkedinWhite} className="h-8 w-8 object-contain" />
          </a>

          <a
            href="https://www.instagram.com/julzevias/"
            target="_blank"
            className="p-1.5 icon-with-hover"
          >
            <img src={instagram} className="h-8 w-8 object-contain" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
