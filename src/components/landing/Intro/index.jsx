import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import jho from 'assets/illustrations/2jho.png';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h4>Hi , my name is</h4>
          <h1>James Jaeho Lee.</h1>
          <h1>Full Stack Developer</h1>
          <Button as={AnchorLink} href="#contact">
            Get In Touch
          </Button>
        </Details>
      </IntroWrapper>
    </Wrapper>
  );
};
