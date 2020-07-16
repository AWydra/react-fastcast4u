import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Button, Container } from '@material-ui/core';
import Text from 'components/atoms/Text/Text';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const sampleResponse = `<p>Starting your first Reseller buisiness with Internet Radio Stations and don't know how to manage your own and your customer's accounts in Centova Cast? Watch this video guide to learn what do all those buttons and icons mean.<br /><br /><iframe src="//www.youtube.com/embed/grdY5okNqOg" width="560" height="314" allowfullscreen="allowfullscreen"></iframe></p>`;

const Article = styled.div`
  ${({ theme }) => css`
    & * {
      ${theme.typography.body1}
    }

    & a {
      color: ${theme.palette.primary.main};
      text-decoration: none;
      font-weight: inherit;
    }

    & blockquote {
      padding: ${theme.spacing(1.5, 2.5)};
      border-left: 5px solid;
      border-left-color: ${theme.palette.grey[300]};
    }

    & img {
      width: 100%;
      max-width: 700px;
      height: auto;
      display: block;
    }

    & .iframe-container {
      width: 100%;
      position: relative;
      padding-top: 56.0714%;

      & iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  `}
`;

const HelpArticle = () => {
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
  }, []);

  return (
    <Container maxWidth="xl">
      <Text compnent="h1" variant="h4" fontWeight={500} mt={6} mb={4}>
        HOW TO CREATE YOUR MOBILE APP
      </Text>
      <Article dangerouslySetInnerHTML={{ __html: sampleResponse }} />
      <Button
        startIcon={<ArrowBackIcon />}
        component={Link}
        to="/help"
        variant="contained"
        color="primary"
      >
        Back to help
      </Button>
    </Container>
  );
};

export default HelpArticle;
