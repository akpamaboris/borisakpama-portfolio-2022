interface ProjectCardProps {
  projectName: string;
  projectDescription: string;
  link: string;
  children?: React.ReactNode;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectName,
  projectDescription,
  link,
  children,
}) => {
  return (
    <div
      className="w-full p-6 m-4 mx-auto border-2 border-gray-300 group sm:w-1/2 rounded-xl"
      style={{ cursor: "auto" }}
    >
      <a href={link}>
        <h1
          className="text-xl font-bold text-center"
          style={{ cursor: "auto" }}
        >
          {projectName}
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            className="inline align-baseline"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path>
          </svg>
        </h1>
      </a>
      <hr className="my-4" />
      <p>{projectDescription}</p>
      <div
        className="flex flex-wrap items-center justify-center gap-2 mt-4 mb-8"
        style={{ cursor: "auto" }}
      >
        {children}
      </div>
      <div className="w-full text-center" style={{ cursor: "auto" }}>
        <span>
          <span></span>
        </span>
        <span>
          <span></span>
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
