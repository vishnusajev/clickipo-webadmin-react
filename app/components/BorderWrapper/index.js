import styled from 'styled-components';

const Border = styled.div`
  border-left: ${(props) => props.left};
  border-right: ${(props) => props.right};
  border-top: ${(props) => props.top};
  border-bottom: ${(props) => props.bottom};
  overflow: auto;
`;
export default Border;
