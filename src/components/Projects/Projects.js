import React from 'react';

import {
	BlogCard,
	CardInfo,
	ExternalLinks,
	GridContainer,
	HeaderThree,
	Hr,
	Tag,
	TagList,
	TitleContent,
	UtilityList,
	Img,
} from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { hostedProjects, unhostedProjects } from '../../constants/constants';



const Projects = () => (
	<Section nopadding id="projects">
		<SectionDivider />
		<SectionTitle main>Hosted Projects</SectionTitle>
		<GridContainer>
			{hostedProjects.map(({id, image, title, description, tags, source, visit}) => (
				<BlogCard key = {id}>
					<Img src={image}/>
					<TitleContent>
						<HeaderThree title={title}>{title}</HeaderThree>
						<Hr/>
					</TitleContent>
					<CardInfo>{description}</CardInfo>
					<div>
						<TagList>
							<Tag>Using:</Tag>
							{tags.map((tag, i) => (
								<Tag key={i}>{tag}</Tag>
							))}
						</TagList>
					</div>
					<UtilityList>
						<ExternalLinks href={visit}>Code</ExternalLinks>
						<ExternalLinks href={source}>Source</ExternalLinks>
					</UtilityList>
				</BlogCard>
			))}
		</GridContainer>
		<SectionTitle main>Unhosted Projects</SectionTitle>
		<GridContainer>
		{unhostedProjects.map(({id, image, title, description, tags, source}) => (
			<BlogCard key = {id}>
				<Img src={image}/>
				<TitleContent>
					<HeaderThree title={title}>{title}</HeaderThree>
					<Hr/>
				</TitleContent>
				<CardInfo>{description}</CardInfo>
				<div>
					<TagList>
						<Tag>Using:</Tag>
						{tags.map((tag, i) => (
							<Tag key={i}>{tag}</Tag>
						))}
					</TagList>
				</div>
				<UtilityList>
					<ExternalLinks href={source}>Source</ExternalLinks>
				</UtilityList>
			</BlogCard>
		))}
	</GridContainer>
		<br/>
		<SectionDivider/>	
	</Section>
);

export default Projects;
