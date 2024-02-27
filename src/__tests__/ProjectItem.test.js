import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ProjectItem from "../components/ProjectItem";

const project = {
  name: "Reciplease",
  about: "A recipe tracking app",
  technologies: ["Rails", "Bootstrap CSS"],
};

test("renders a <span> for each technology passed in as a prop", () => {
  render(<ProjectItem project={project} />);

  for (const technology of project.technologies) {
    const span = screen.queryByText(technology);
    expect(span).toBeInTheDocument();
    expect(span.tagName).toBe("SPAN");
  }
});
