import React, { useRef } from "react";

import {
  ExperienceCard,
  CompanyContainer,
  TitleText,
  SubText,
  Description,
} from "./TimeLineStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { TimeLineData } from "../../constants/constants";

const Timeline = () => {
  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        Hey there, I am a Frontend developer who loves and creates beautifull
        designs come to life by building them that too with all the
        functionalities. With more than 1.5 years of experience I have learned
        how to build aesthetic and modern websites with full responsiveness.{" "}
        <br />
        When I am not coding I am usually found working out at the Gym or
        playing with my pet doggo &quot; SHIRO &quot;
      </SectionText>
      <ExperienceCard>
        <CompanyContainer>
          <TitleText>Previously worked at: SPARKLIN</TitleText>
          <SubText>(Nov 2021 - Mar 2023)</SubText>
          <Description>
            Worked on a project of a major Indian bank by building a banking
            website using Angular and Typescript later started Sparklin&apos;s
            own inhouse product which was built using Nextjs and Typescript{" "}
          </Description>
        </CompanyContainer>
      </ExperienceCard>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;
