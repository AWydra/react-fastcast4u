import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Text from 'components/atoms/Text/Text';
import theme from 'theme/mainTheme';

const StyledExpansionPanel = styled(ExpansionPanel)`
  ${theme.palette.type !== 'dark' &&
    `
    border: solid 1px ${theme.palette.grey[300]};
    border-bottom: none;
    box-shadow: ${theme.shadows[4]}
  `}
`;

const Accordion = ({ data }) => {
  const [expanded, setExpanded] = React.useState(0);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return data.map(({ heading, content }, i) => (
    <StyledExpansionPanel key={i} expanded={expanded === i} onChange={handleChange(i)}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel${i + 1}bh-content`}
      >
        <Text variant="h5">{heading}</Text>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Text>{content}</Text>
      </ExpansionPanelDetails>
    </StyledExpansionPanel>
  ));
};

Accordion.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
      content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    }),
  ).isRequired,
};

export default Accordion;
