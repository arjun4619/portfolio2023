import React from "react";
import {
  DiFirebase,
  DiReact,
  DiZend,
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiJavascript1,
  DiAngularSimple,
  DiSass,
} from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with range of technologies in front-end
    </SectionText>
    <List>
      <ListItem>
        <DiHtml5 size="5rem" />
        <DiCss3 size="5rem" />
        <DiSass size="5rem" />
        <DiJavascript1 size="5rem" />
        <ListTitle>Typescript</ListTitle>
        <DiReact size="5rem" />
        <DiAngularSimple size="5rem" />
        <ListTitle>Nextjs</ListTitle>
        {/* <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br /> React.js
          </ListParagraph>
        </ListContainer> */}
      </ListItem>
      {/* <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br /> React.js
          </ListParagraph>
        </ListContainer>
      </ListItem> */}
      {/* <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br /> React.js
          </ListParagraph>
        </ListContainer>
      </ListItem> */}
    </List>
  </Section>
);

export default Technologies;
