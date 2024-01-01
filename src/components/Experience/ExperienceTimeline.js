import React from "react";

import { Timeline, Typography } from "@material-tailwind/react";
import Experience from "./Experience.js";
import ExperienceDescription from "./ExperieneDescription.js";

const ExperienceTimeline = ({ experiences }) => {
  return (
    <>
      <Timeline className="max-w-[45rem]">
        <Experience
          title="Junior Software Developer"
          company="NearForm"
          dates="Mar 2023 - Dec 2023"
          url="https://www.nearform.com">
          <ExperienceDescription title="Responsibilities and Expectations">
            <Typography>
              <li>
                Develop production-ready code and work on technical tasks
                individually and in a team.
              </li>
              <li>Optimize performance in applications.</li>
              <li>
                Use the debugging process and apply this to resolve issues.
              </li>
              <li>
                Interact and communicate with the project team, taking part in
                any technical discussions.
              </li>
              <li>Develop for open source.</li>
              <li>Understand and call out non-functional requirements.</li>
              <li>Create technical documentation.</li>
              <li>
                Actively expand knowledge of new technologies and share it with
                colleagues.
              </li>
              <li>Participate in code reviews.</li>
            </Typography>

            <div className="mt-10">
              <Typography variant="paragraph">
                <span className="font-bold text-md">Skills: </span>
                Agile Methodologies · HTML5 · REST APIs · SQL · Cascading Style
                Sheets (CSS) · Git · Cypress · Jest · TypeScript · Next.js ·
                Server Side JavaScript · Fastify · Node.js · React.js · Scss ·
                Amazon Web Services (AWS) · Google Cloud Platform (GCP) ·
                GraphQL · React Native
              </Typography>
            </div>
          </ExperienceDescription>
        </Experience>
        <Experience
          title="Junior Software Engineer"
          company="Sigma Labs"
          dates="Feb 2023 - Present"
          url="https://www.sigmalabs.co.uk">
          <ExperienceDescription
            title="High-performance technology consultants across software, data,
                and platform engineering.">
            <Typography>
              <li className="italic font-bold">
                Full Stack Software Engineering:
              </li>
              <div className="ml-6">
                <li>
                  Backend: Python, Fastify, MySQL, PostgreSQL, RESTful API
                  development, Security fundamentals;
                </li>
                <li>
                  Frontend: JavaScript, React, Next.js, CSS, Semantic HTML, CSS,
                  Jest/React Testing Library;
                </li>
              </div>
              <li className="italic font-bold">Cloud Fundamentals:</li>
              <div className="ml-6">
                <p> AWS, EC2, IAM, S3, Lambda;</p>
              </div>
              <li className="italic font-bold">
                Industry Best Practices & Delivery Methodologies:
              </li>
              <div className="ml-6">
                Agile, Test Driven Development (TDD), Pair Programming, Git,
                OOP, Clean Code, DevOps;
              </div>
              <li className="italic font-bold">
                Professional High-Performance Delivery:
              </li>
              <ul>
                <li>
                  Problem solving & decision-making frameworks, business
                  fundamentals & effective communication;
                </li>
              </ul>
            </Typography>

            <div className="mt-10">
              <Typography variant="paragraph">
                <span className="font-bold text-md">Skills: </span>
                Agile Methodologies · HTML5 · REST APIs · SQL · Cascading Style
                Sheets (CSS) · Git · Cypress · Jest · TypeScript · Next.js ·
                Server Side JavaScript · Fastify · Node.js · React.js · Scss ·
                Amazon Web Services (AWS) · Google Cloud Platform (GCP) ·
                GraphQL · React Native
              </Typography>
            </div>
          </ExperienceDescription>
        </Experience>
        <Experience
          title="Trainee Data & Software Engineer"
          company="Sigma Labs"
          dates="Oct 2022 - Feb 2023"
          url="https://www.sigmalabs.co.uk"
          endOfTimeline={true}>
          <ExperienceDescription
            title="High-performance technology consultants across software, data,
                and platform engineering.">
            <Typography>
              <li className="italic font-bold">Technical Excellence:</li>
              <div className="ml-6">
                <li>
                  Problem solving, systems thinking, technical communication,
                  effective & clean code;
                </li>
              </div>
              <li className="italic font-bold">
                Professional High-Performance Delivery:
              </li>
              <ul>
                <li>
                  Developing fundamental transferrable skills and knowledge,
                  across communication, behaviour, business basics & problem
                  solving;
                </li>
              </ul>
            </Typography>

            <div className="mt-10">
              <Typography variant="paragraph">
                <span className="font-bold text-md">Skills: </span>
                Agile Methodologies · HTML5 · REST APIs · SQL · Cascading Style
                Sheets (CSS) · Git · Cypress · Jest · TypeScript · Next.js ·
                Server Side JavaScript · Fastify · Node.js · React.js · Scss ·
                Amazon Web Services (AWS) · Google Cloud Platform (GCP) ·
                GraphQL · React Native
              </Typography>
            </div>
          </ExperienceDescription>
        </Experience>
      </Timeline>
    </>
  );
};

export default ExperienceTimeline;
