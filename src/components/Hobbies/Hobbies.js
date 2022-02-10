import React from 'react';

import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './HobbiesStyles';
import { hobbies } from '../../constants/constants';

const Hobbies = () => (
  <Section>
    <SectionTitle>Hobbies</SectionTitle>
    <Boxes>
      {hobbies.map((card, index) => (
        <Box key={index}>
          <BoxNum>
            {card.name}
          </BoxNum>
          <BoxText>{card.description}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Hobbies;
