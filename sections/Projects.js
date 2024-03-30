import ProjectCard from "@/components/ProjectCard";
import { Title, TitleSm } from "@/components/common/Title";
import React from "react";

const Blog = () => {
  return (
    <>
      <section className="agency bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="OUR PROJECTS" /> <br />
            <br />
            <Title title="Our views on marketing, design & technology" />
          </div>
          <ProjectCard />
        </div>
      </section>
    </>
  );
};

export default Blog;
