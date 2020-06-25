import styled from 'styled-components';

const Cite = styled.blockquote`
  margin: 0;
  display: block;
  font-family: monospace;
  font-size: 16px;
  letter-spacing: -1px;
  font-style: italic;
  ${({ theme }) => theme.breakpoints.up('md')} {
    font-size: 20px;
  }

  &::before,
  &::after {
    content: '"';
  }
`;

export default Cite;
