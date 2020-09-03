import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

import { Container, makeStyles } from '@material-ui/core';
import YTContainer from 'components/atoms/YTContainer/YTContainer';
import RowSection from 'components/organisms/RowSection/RowSection';
import Promobar from 'components/organisms/Promobar/Promobar';

const useStyles = makeStyles(theme => ({
  promobar: {
    margin: theme.spacing(6, 0, -8),
    padding: theme.spacing(4, 0),
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(2),
    },
  },
}));

const AlexaSkill = () => {
  const content = useSelector(state => state.language.alexa);
  const classes = useStyles();

  const sectionsData = useMemo(
    () => [
      {
        img: 'https://img.fastcast4u.com/react/alexa/alexa-front',
        heading: content.sections[0].heading,
        content: content.sections[0].content,
      },
      {
        img: (
          <LazyLoadComponent>
            <YTContainer>
              <iframe
                title="alexa-movie"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/9EGLwIQ4CYI"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </YTContainer>
          </LazyLoadComponent>
        ),
        heading: content.sections[1].heading,
        content: content.sections[1].content,
      },
    ],
    [content],
  );

  return (
    <>
      <Container maxWidth="xl">
        {sectionsData.map((props, i) => (
          <RowSection key={i} long {...props} reverse={i % 2 === 0} />
        ))}
      </Container>
      <Promobar
        className={classes.promobar}
        primary="Lorem ipsum dolor sit amet"
        button={{
          label: 'Learn More',
          component: Link,
          to: '/alexa-skill',
        }}
      />
    </>
  );
};

export default AlexaSkill;
