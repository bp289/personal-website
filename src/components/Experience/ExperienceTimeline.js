import React from "react";

import { Timeline, Typography } from "@material-tailwind/react";
import Experience from "./Experience.js";
import ExperienceDescription from "./ExperieneDescription.js";
import { TransitionSide } from "@/components/Experience/Transitions/transitions.js";

const ExperienceTimeline = ({ experiences }) => {
  return (
    <>
      <Timeline className="max-w-[45rem]">
        <TransitionSide delay={0.4}>
          <Experience
            title="Junior Software Developer"
            company="NearForm"
            dates="Mar 2023 - Dec 2023"
            url="https://www.nearform.com">
            <ExperienceDescription title="Responsibilities and Expectations">
              <li>
                <Typography>
                  Develop production-ready code and work on technical tasks
                  individually and in a team.
                </Typography>
              </li>
              <li>
                {" "}
                <Typography>Optimize performance in applications. </Typography>
              </li>
              <li>
                <Typography>
                  Use the debugging process and apply this to resolve issues.
                </Typography>
              </li>
              <li>
                <Typography>
                  Interact and communicate with the project team, taking part in
                  any technical discussions.
                </Typography>
              </li>
              <li>
                <Typography>Develop for open source.</Typography>
              </li>
              <li>
                <Typography>
                  Understand and call out non-functional requirements.
                </Typography>
              </li>
              <li>
                <Typography>Create technical documentation.</Typography>
              </li>
              <li>
                <Typography>
                  Actively expand knowledge of new technologies and share it
                  with colleagues.
                </Typography>
              </li>
              <li>
                <Typography>Participate in code reviews.</Typography>
              </li>

              <div className="mt-10">
                <Typography variant="paragraph">
                  <span className="font-bold text-md">Skills: </span>
                  Agile Methodologies · HTML5 · REST APIs · SQL · Cascading
                  Style Sheets (CSS) · Git · Cypress · Jest · TypeScript ·
                  Next.js · Server Side JavaScript · Fastify · Node.js ·
                  React.js · Scss · Amazon Web Services (AWS) · Google Cloud
                  Platform (GCP) · GraphQL · React Native
                </Typography>
              </div>
            </ExperienceDescription>
          </Experience>
        </TransitionSide>
        <TransitionSide delay={0.5}>
          <Experience
            title="Junior Software Engineer"
            company="Sigma Labs"
            dates="Feb 2023 - Present"
            url="https://www.sigmalabs.co.uk">
            <ExperienceDescription
              title="High-performance technology consultants across software, data,
                and platform engineering.">
              <li className="italic font-bold">
                <Typography>Full Stack Software Engineering:</Typography>
              </li>
              <div className="ml-6">
                <li>
                  <Typography>
                    Backend: Python, Fastify, MySQL, PostgreSQL, RESTful API
                    development, Security fundamentals;
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Frontend: JavaScript, React, Next.js, CSS, Semantic HTML,
                    CSS, Jest/React Testing Library;
                  </Typography>
                </li>
              </div>
              <li className="italic font-bold">
                <Typography>Cloud Fundamentals: </Typography>
              </li>
              <div className="ml-6">
                <Typography> AWS, EC2, IAM, S3, Lambda; </Typography>
              </div>
              <li className="italic font-bold">
                <Typography>
                  Industry Best Practices & Delivery Methodologies:
                </Typography>
              </li>
              <div className="ml-6">
                Agile, Test Driven Development (TDD), Pair Programming, Git,
                OOP, Clean Code, DevOps;
              </div>
              <li className="italic font-bold">
                <Typography>Professional High-Performance Delivery:</Typography>
              </li>
              <ul>
                <li>
                  <Typography>
                    Problem solving & decision-making frameworks, business
                    fundamentals & effective communication;
                  </Typography>
                </li>
              </ul>

              <div className="mt-10">
                <Typography variant="paragraph">
                  <span className="font-bold text-md">Skills: </span>
                  Agile Methodologies · HTML5 · REST APIs · SQL · Cascading
                  Style Sheets (CSS) · Git · Cypress · Jest · TypeScript ·
                  Next.js · Server Side JavaScript · Fastify · Node.js ·
                  React.js · Scss · Amazon Web Services (AWS) · Google Cloud
                  Platform (GCP) · GraphQL · React Native
                </Typography>
              </div>
            </ExperienceDescription>
          </Experience>
        </TransitionSide>
        <TransitionSide delay={0.6}>
          <Experience
            title="Trainee Data & Software Engineer"
            company="Sigma Labs"
            dates="Oct 2022 - Feb 2023"
            url="https://www.sigmalabs.co.uk"
            endOfTimeline={true}>
            <ExperienceDescription
              title="High-performance technology consultants across software, data,
                and platform engineering.">
              <li className="italic font-bold">
                {" "}
                <Typography>Technical Excellence:</Typography>
              </li>
              <div className="ml-6">
                <li>
                  <Typography>
                    Problem solving, systems thinking, technical communication,
                    effective & clean code;
                  </Typography>
                </li>
              </div>
              <li className="italic font-bold">
                <Typography>Professional High-Performance Delivery:</Typography>
              </li>
              <ul>
                <li>
                  <Typography>
                    Developing fundamental transferrable skills and knowledge,
                    across communication, behaviour, business basics & problem
                    solving;
                  </Typography>
                </li>
              </ul>

              <div className="mt-10">
                <Typography variant="paragraph">
                  <span className="font-bold text-md">Skills: </span>
                  Agile Methodologies · HTML5 · REST APIs · SQL · Cascading
                  Style Sheets (CSS) · Git · Cypress · Jest · TypeScript ·
                  Next.js · Server Side JavaScript · Fastify · Node.js ·
                  React.js · Scss · Amazon Web Services (AWS) · Google Cloud
                  Platform (GCP) · GraphQL · React Native
                </Typography>
              </div>
            </ExperienceDescription>
          </Experience>
        </TransitionSide>
      </Timeline>
    </>
  );
};

export default ExperienceTimeline;
