import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import TypewriterComponent from "typewriter-effect";
import { LeftSection, DownloadBtn } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Arjun Shankar <br />
        <TypewriterComponent
          options={{
            autoStart: true,
            loop: true,
            delay: 40,
            strings: [
              "I am a Developer",
              "I am a programmer",
              "I am a Human???",
              "I am 06-04-1999",
              "I love Dogs",
              `I love Food`,
            ],
          }}
        />
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
