import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer, Hr } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle> Call</LinkTitle>
          <LinkItem href="tel:949-573-5659">949.573.5659</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:turnbaugh.tim.applications@gmail.com" target="_blank" rel="noreferrer noopener">Contact-Me</LinkItem>
        </LinkColumn>
      </LinkList>
      <Hr/>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>You don't drive with your eyes, you drive with your heart - Ricky Bobby, Philosopher</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/TRTurn" target="_blank" rel="noreferrer noopener">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/tim-turnbaugh/" target="_blank" rel="noreferrer noopener">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer noopener">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
