import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary } from '@material-ui/core';
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

const Accordion = ({ data, summaryProps }) => {
  const [expanded, setExpanded] = useState(0);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return data.map(({ heading, content }, i) => (
    <StyledExpansionPanel key={i} expanded={expanded === i} onChange={handleChange(i)}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel${i + 1}bh-content`}
      >
        {React.isValidElement(heading) ? (
          heading
        ) : (
          <Text variant="h5" {...summaryProps}>
            {heading}
          </Text>
        )}
      </ExpansionPanelSummary>
      <ExpansionPanelDetails style={{ display: 'flex', flexDirection: 'column' }}>
        {React.isValidElement(content) ? content : <Text>{content}</Text>}
      </ExpansionPanelDetails>
    </StyledExpansionPanel>
  ));
};

Accordion.defaultProps = {
  summaryProps: {},
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
