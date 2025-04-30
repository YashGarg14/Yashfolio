import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen text-gray-800 py- px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-10 space-y-10">
        {/* Header */}
        <div className="text-center">
          <p className="text-lg">
            📧 yashgarg.co@gmail.com | 📱 +91-9368959004
          </p>
          <div className="flex justify-center items-center gap-6 mt-3">
            <a
              href="https://linkedin.com/in/yashgarg1466"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-800 text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/yashgarg14"
              target="_blank"
              rel="noreferrer"
              className="text-gray-700 hover:text-black text-2xl"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Education */}
        <section>
          <h2 className="text-2xl font-bold border-l-4 border-orange-500 pl-4 mb-4">
            🎓 Education
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left border-collapse">
              <thead>
                <tr className="bg-orange-100 text-gray-900">
                  <th className="px-4 py-2 border">Institution</th>
                  <th className="px-4 py-2 border">Course/Class</th>
                  <th className="px-4 py-2 border">Year</th>
                  <th className="px-4 py-2 border">Score</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-2 border">
                    KIET Group of Institutions
                  </td>
                  <td className="px-4 py-2 border">B.Tech CSE</td>
                  <td className="px-4 py-2 border">2021–2025</td>
                  <td className="px-4 py-2 border">8.5 SGPA</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-2 border">
                    The Doon Valley Public School
                  </td>
                  <td className="px-4 py-2 border">Class 12</td>
                  <td className="px-4 py-2 border">2021</td>
                  <td className="px-4 py-2 border">94.6%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-2 border">
                    Delhi Public School, Muzaffarnagar
                  </td>
                  <td className="px-4 py-2 border">Class 10</td>
                  <td className="px-4 py-2 border">2019</td>
                  <td className="px-4 py-2 border">95.6%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-2xl font-bold border-l-4 border-orange-500 pl-4 mb-4">
            💻 Skills
          </h2>
          <ul className="">
            <li>
              <strong>Languages:</strong> Java, Python, HTML, CSS, JavaScript,
              SQL
            </li>
            <li>
              <strong>Frameworks:</strong> Django, DRF, Bootstrap, React
              (Beginner)
            </li>
            <li>
              <strong>Tools:</strong> Git, GitHub, MySQL, VS Code, Postman
            </li>
          </ul>
        </section>

        {/* Internships */}
        <section>
          <h2 className="text-2xl font-bold border-l-4 border-orange-500 pl-4 mb-4">
            🧑‍💼 Internships
          </h2>
          <ul className="space-y-2 list-disc  ml-5">
            <li>
              <strong>EY Global & AICTE:</strong> Full-stack Dev Intern (Feb–Apr
              2024)
            </li>
            <li>
              <strong>IBM:</strong> Frontend Intern (June–July 2023)
            </li>
          </ul>
        </section>

        {/* Achievements */}
        <section>
          <h2 className="text-2xl font-bold border-l-4 border-orange-500 pl-4 mb-4">
            🏆 Achievements & Certifications
          </h2>
          <ul className="list-disc space-y-1 text-sm  ml-5">
            <li>2⭐ on CodeChef (1424)</li>
            <li>300+ problems solved on LeetCode & GFG</li>
            <li>200+ GitHub contributions and 37-day coding streak</li>
            <li>Udemy: Python Bootcamp | Coursera: Python Data Structures</li>
            <li>Programming Pathshala: DSA Course</li>
          </ul>
        </section>

        {/* Extra Curriculars */}
        <section>
          <h2 className="text-2xl font-bold border-l-4 border-orange-500 pl-4 mb-4">
            🎨 Extra-Curriculars
          </h2>
          <ul className="list-disc space-y-1 text-sm ml-5">
            <li>Hackathon participant (problem solving & teamwork)</li>
            <li>Photographer at “Impeccables” (1 year)</li>
            <li>Coordinator for college cultural fest</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
