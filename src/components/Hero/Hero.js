import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, DownloadBtn } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Hello There <br />I am Arjun Shankar
      </SectionTitle>
      <SectionText>
        I am a Frontend Developer who loves making amazing UI designs come to
        life by building them.
      </SectionText>
      <DownloadBtn href="/ResumeOfArjunShankar.doc.pdf" download="resume">
        Download Resume
      </DownloadBtn>
    </LeftSection>
  </Section>
);

export default Hero;
