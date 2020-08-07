import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import helpServices from 'services/help';
import styled, { css } from 'styled-components';
import { Button, Container, LinearProgress } from '@material-ui/core';
import Text from 'components/atoms/Text/Text';
import { useCurrentLanguage } from 'utils/customHooks';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

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
      width: auto !important;
      max-width: 100%;
      height: auto !important;
      max-height: 550px;
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
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(true);
  const lng = useCurrentLanguage();

  useEffect(() => {
    helpServices.getArticle(id).then(res => {
      setResponse(res);
      setLoading(false);
    });
  }, [id]);

  return (
    <Container maxWidth="xl">
      {loading ? (
        <LinearProgress style={{ marginTop: '2em' }} />
      ) : (
        <>
          <Text compnent="h1" variant="h4" fontWeight={500} mt={6} mb={4}>
            {response.raw_title}
          </Text>
          <Article dangerouslySetInnerHTML={{ __html: response.article }} />
          <Button
            startIcon={<ArrowBackIcon />}
            component={Link}
            to={`${lng}/help`}
            variant="contained"
            color="primary"
          >
            Back to help
          </Button>
        </>
      )}
    </Container>
  );
};

export default HelpArticle;
