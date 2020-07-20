import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  makeStyles,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Text from 'components/atoms/Text/Text';

const StyledExpansionPanel = styled(ExpansionPanel)`
  ${({ theme }) =>
    css`
      ${theme.palette.type !== 'dark' &&
        `
    border: solid 1px ${theme.palette.grey[300]};
    border-bottom: none;
    box-shadow: ${theme.shadows[4]}
  `}
    `}
`;

const useStyles = makeStyles(theme => ({
  content: {
    '& a': {
      color: theme.palette.primary.main,
    },
    '& img': {
      width: 'auto !important',
      maxWidth: '100%',
      height: 'auto !important',
      maxHeight: 400,
      display: 'block',
      [theme.breakpoints.up('md')]: {
        maxHeight: 550,
      },
    },
    '& .iframe-container': {
      width: '100%',
      position: 'relative',
      paddingTop: '56.0714%',

      '& iframe': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      },
    },
  },
}));

const Accordion = ({ data, summaryProps, injectHTML, start }) => {
  const [expanded, setExpanded] = useState(start);
  const classes = useStyles();

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => setExpanded(start), [data, start]);

  return data.map(({ heading, content }, i) => (
    <StyledExpansionPanel key={i} expanded={expanded === i} onChange={handleChange(i)}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel${i + 1}bh-content`}
      >
        {React.isValidElement(heading) ? (
          heading
        ) : (
          <Text
            variant="h5"
            {...(injectHTML
              ? { dangerouslySetInnerHTML: { __html: heading } }
              : { children: heading })}
            {...summaryProps}
          />
        )}
      </ExpansionPanelSummary>
      <ExpansionPanelDetails style={{ display: 'flex', flexDirection: 'column' }}>
        {React.isValidElement(content) ? (
          content
        ) : (
          <Text
            className={injectHTML && classes.content}
            {...(injectHTML
              ? { dangerouslySetInnerHTML: { __html: content } }
              : { children: content })}
          />
        )}
      </ExpansionPanelDetails>
    </StyledExpansionPanel>
  ));
};

Accordion.defaultProps = {
  summaryProps: {},
  start: 0,
};

Accordion.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
      content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    }),
  ).isRequired,
  summaryProps: PropTypes.object,
};

export default Accordion;
