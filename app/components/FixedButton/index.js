import styled from 'styled-components/dist/styled-components.min';

const FixedButton = styled.button`
  width: 100%;
  padding: 16px;
  border: none;
  position: ${(props) => props.position ? props.position : 'fixed'};
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-color: #E18156;
  text-align: center;
  color: #FFFFFF;
  text-transform: uppercase;
  font-size: 18px;
  outline: none;
  z-index: 100;
  border-radius: 0px;
  &:disabled {
    background-color: grey;
  }
`;

export default FixedButton;
