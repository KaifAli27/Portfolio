import React from "react";
import { DiDatabase, DiReact, DiGit } from "react-icons/di";
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
  <div>
    <Section id="tech">
      <SectionDivider />
      <br />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I've worked with a wide range of technologies in the web development
        world from Back-end to Front-end.
      </SectionText>
      <List>
        <ListItem>
          <DiReact size="3rem" />
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              JavaScript
              <br />
              React.js
              <br />
              HTML
              <br />
              CSS
              <br /> Bootstrap
              <br /> jQuery
              <br /> Next.js
              <br /> NPM
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiDatabase size="3rem" />
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Java
              <br /> Node.js <br /> Python
              <br /> C
              <br /> MySQL <br /> Spring Boot <br /> Linux
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiGit size="3rem" />
          <ListContainer>
            <ListTitle>Tools</ListTitle>
            <ListParagraph>
              Git/GitLab
              <br />
              OpenAPI
              <br /> Maven
              <br /> Jira
              <br /> Confluence
              <br /> Figma
              <br /> AWS
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </Section>
  </div>
);

export default Technologies;
