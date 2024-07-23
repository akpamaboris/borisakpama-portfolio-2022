import SmallCard from "./SmallCard";
import ProjectCard from "./ProjectCard";
import TagProjectCard from "./TagProjectCard";
import { pathSoftware, pathReact } from "../constants/pathsvg";

const Main = () => {
  return (
    <div style={{ backgroundColor: "rgb(247, 250, 252)" }}>
      <div
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="400"
        className="aos-init aos-animate"
        style={{ cursor: "auto" }}
      >
        <div className="max-w-4xl mx-auto mt-16" style={{ cursor: "auto" }}>
          <p
            className="text-2xl font-bold text-center md:text-4xl"
            style={{ cursor: "auto" }}
          >
            My Background
          </p>
          <p
            className="mt-4 text-base leading-relaxed text-left text-gray-600 md:text-center"
            style={{ cursor: "auto" }}
          >
            Passionate working developer since 2021.
          </p>
        </div>
        <div
          className="flex flex-col justify-center max-w-2xl mx-auto mt-8 sm:flex-row align-center"
          style={{ cursor: "auto" }}
        >
          <SmallCard text="Node.js" iconPath={pathSoftware} />
          <SmallCard text="React.js" iconPath={pathReact} />
        </div>
        <div style={{ cursor: "auto" }}>
          <h1
            className="mt-8 text-2xl font-extrabold text-center md:text-4xl"
            style={{ cursor: "auto" }}
          >
            My projects
          </h1>

          <ProjectCard
            projectName="TailwindCSS Button Maker"
            projectDescription="👨‍🎨 A Builder to make TailwindCSS Buttons"
            link="https://tailwind-button-generator.netlify.app/"
          >
            <TagProjectCard text="React" />
            <TagProjectCard text="Tailwind CSS" />
            <TagProjectCard text="Playground" />
          </ProjectCard>

          <ProjectCard
            projectName="TailwindCSS Playground"
            projectDescription="👨‍🎨 A Tailwind CSS Playground"
            link="https://tailwindcss-simplified.netlify.app/"
          >
            <TagProjectCard text="React" />
            <TagProjectCard text="Tailwind CSS" />
            <TagProjectCard text="Playground" />
          </ProjectCard>
          <ProjectCard
            projectName="TailwindCSS Builder"
            projectDescription="⚡ A tailwind CSS builder to help make webpages"
            link="https://tailwindcss-builder.netlify.app/"
          >
            <TagProjectCard text="React" />
            <TagProjectCard text="Tailwind CSS" />
            <TagProjectCard text="Builder" />
          </ProjectCard>
        </div>
        <div className="w-full mt-16 text-center" style={{ cursor: "auto" }}>
          <p className="mb-4 text-gray-600" style={{ cursor: "auto" }}>
            Made with
            <span role="img" aria-label="heart">
              💙
            </span>{" "}
            by
            <a
              className="text-blue-500 hover:underline"
              href="https://www.linkedin.com/in/borisakpama/"
              style={{ cursor: "auto" }}
            >
              Boris Akpama
            </a>
          </p>
          <span>
            <span></span>
          </span>
          &nbsp;&nbsp;
          <span>
            <span style={{ cursor: "auto" }}></span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Main;
