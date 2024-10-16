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
          I am MERN developer I have completed B.tech from IKG punjab technical
          university Jalandhar deparment electronics and communication !
        </p>
        <br />
        <p className="text-xl"></p>Completed Higher secondary school (UP board)
        with aggregate marks (72%) at Govt. jubilee intermediate college.
        <br />
        Completed Secondary School (CBSE board) with aggregate marks (9.6 cgpa)
        at Nav Jeevan Mission School.
        <br />
        👉I AM ABLE TO HANDLE MULTIPLE TASKS ON DAILY BASIS. <br />
        👉I USE A CREATIVE APPROACH TO SOLVE THE PROBLEMS.
        <br />
        Aspiring to be a Web Developer and Passionate about Coding and learning
        new technologies in development
      </div>
    </div>
  );
};

export default About;
