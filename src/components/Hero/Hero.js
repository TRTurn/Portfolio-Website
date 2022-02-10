import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
	<Section row nopadding>
		<LeftSection>
			<SectionTitle main center>
				Welcome to <br />
				My Portfolio
			</SectionTitle>
			<SectionText>My goal is to create novel applications and web products using the latest technologies available.</SectionText>
			<Button onClick={() => window.open("https://github.com/TRTurn")}>See My Code</Button>
		</LeftSection>
	</Section>
);

export default Hero;
