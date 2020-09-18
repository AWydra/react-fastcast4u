import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

import { Container, makeStyles } from '@material-ui/core';
import Text from 'components/atoms/Text/Text';
import CTAButton from 'components/atoms/CTAButton/CTAButton';
import YTContainer from 'components/atoms/YTContainer/YTContainer';
import RowSection from 'components/organisms/RowSection/RowSection';

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(-8),
    overflowX: 'hidden',
  },
  button: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
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
      <Container className={classes.container} maxWidth="xl">
        {sectionsData.map((props, i) => (
          <RowSection key={i} long {...props} reverse={i % 2 === 0} />
        ))}
      </Container>
      <Text variant="h4" fontWeight={500} align="center" mt={2}>
        Create Your Own Alexa Radio Skill
      </Text>
      <CTAButton
        className={classes.button}
        component={Link}
        to="/alexa-skill"
        xlarge
        color="primary"
      >
        More
      </CTAButton>
    </>
  );
};

export default AlexaSkill;
