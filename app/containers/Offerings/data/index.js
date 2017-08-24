import React from 'react';
import MenuItem from 'material-ui/MenuItem';

const statusOptions = [
  <MenuItem key={1} value={'all'} primaryText="All" />,
  <MenuItem key={2} value={'active'} primaryText="Active" />,
  <MenuItem key={3} value={'closed'} primaryText="Closed" />,
];

export {
  statusOptions,
};
