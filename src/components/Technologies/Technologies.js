import React from 'react';
import { DiDocker, DiMongodb, DiReact } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';


// Additional Icons at React-icons
const Technologies = () =>  (

  <Section id="technologies">
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with front-end and back-end <br/>technologies in both Python and JavaScript 
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>
            Front-End
          </ListTitle>
          <ListParagraph>
            React.js | PyQT5 | Tkinter
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiMongodb size="3rem"/>
        <ListContainer>
          <ListTitle>
            Back-End
          </ListTitle>
          <ListParagraph>
            Node.js | Flask,<br/>
            MongoDB | PostgreSQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDocker size="3rem"/>
        <ListContainer>
          <ListTitle>
            Modern Technologies
          </ListTitle>
          <ListParagraph>
            Docker | PyTorch | TensorFlow
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  <SectionDivider/>
  <br/>
  </Section>
);

export default Technologies;
