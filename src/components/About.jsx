import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        An independent and self-motivated B.E undergraduate in Information Science and Engineering . I believe in rapidly progressing with
the modern technology. My objective is to work for an organization which provides me an opportunity to improve my skill, knowledge
and grow along with the objective of the organization.

        </p>

        <br />

        <p className="text-xl">
        My academic background has equipped me with a strong foundation in various programming languages such as Java, Python, C, OOPS, HTML, CSS, JavaScript, React.JS, Blockchain, Data Structure, and Algorithm. Additionally, I have honed my development skills through various projects and courses.
Furthermore, I am passionate about competitive programming and am always eager to learn new skills and techniques that will help me become a better developer. I am eager to apply my knowledge to meaningful projects, work with experienced professionals, and gain hands-on experience that will help me develop my career further.
        </p>
      </div>
    </div>
  );
};

export default About;
