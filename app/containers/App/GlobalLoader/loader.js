import React from 'react';
import styled from 'styled-components';
import Load from 'images/Gear.gif';

import VerticalCenter from 'components/VerticalCenter';

const LoaderDialog = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  background-color: rgba(0,0,0,0.5);
  z-index: 1000;
  display: ${(props) => props.open ? 'block' : 'none'};
`;

const Loader = (props) => (
  <LoaderDialog
    title=""
    open={props.visible}
  >
    <VerticalCenter width="100px" height="100px" borderRadius="50%" padding="0px">
      <img src={Load} alt="ClickIPO" />
    </VerticalCenter>
  </LoaderDialog>
);

Loader.propTypes = {
  visible: React.PropTypes.bool,
};

export default Loader;
