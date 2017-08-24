import styled from 'styled-components';

const Padding = styled.div`
  padding: ${(props) => props.value};
  display: block;
  &::after {
   content: " ";
   display: block;
   height: 0;
   clear: both;
  }
  width: 100%;
`;

export default Padding;
