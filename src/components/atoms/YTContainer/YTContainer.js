import styled from 'styled-components';

const YTContainer = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 */
  position: relative;
  & iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export default YTContainer;
