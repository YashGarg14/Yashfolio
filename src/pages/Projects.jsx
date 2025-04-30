import React from "react";

const projects = [
  {
    title: "Girnar Enterprises Website",
    description:
      "A business website for Girnar Enterprises showcasing services, contact info, and product catalog.",
    image: "/images/girnar.png",
    link: "https://girnars.in",
  },
  {
    title: "Plant Disease Prediction System",
    description:
      "A machine learning-based web app for identifying plant diseases using CNN integrated via Django.",
    image: "/images/plant-disease.png",
    link: "https://github.com/YashGarg14/Major-project",
  },
  {
    title: "Recipe Blog Website",
    description:
      "A user-authenticated recipe sharing blog built with Django and featuring image upload, CRUD features.",
    image: "/images/recipe-blog.png",
    link: "https://github.com/YashGarg14/FlavorFusion",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen py-4 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-orange-500 mb-10">
          🚀 My Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 sm:p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-white bg-orange-500 px-4 py-2 rounded-full text-sm font-medium hover:bg-orange-600 transition"
                >
                  View Project ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
