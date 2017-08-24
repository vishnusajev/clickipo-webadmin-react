import React from 'react';
import ViewWrapper from 'components/ViewWrapper';
import SelectField from 'material-ui/SelectField';
import TableViewIcon from 'material-ui/svg-icons/action/view-list';
import GridViewIcon from 'material-ui/svg-icons/action/view-module';
import AddOffering from 'material-ui/svg-icons/content/add';
import { statusOptions } from './data';

class Header extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { handleChange, gridView, statusValue, toggleView } = this.props;
    return (
      <ViewWrapper marginTop="88px" padding="0px">
        <div className="mid_bar row" style={{ backgroundColor: '#FAFAFA', width: '100%', maxWidth: '100%' }}>
          <div className="small-2 columns float-left">
            <h5 style={{ paddingTop: '27px' }}>Offerings</h5>
          </div>
          <div className="small-3 columns" style={{ float: 'left' }}>
            <SelectField
              style={{ width: '140px', padding: '0px', marginTop: '-10px' }}
              floatingLabelText="Filter By Status"
              floatingLabelStyle={{ fontSize: '14px' }}
              value={statusValue}
              onChange={handleChange}
            >
              {statusOptions}
            </SelectField>
          </div>
          <div className="small-3 columns" style={{ float: 'right', paddingTop: '27px', paddingRight: '30px' }}>
            <TableViewIcon color={gridView ? '#757575' : '#8DC73F'} style={{ float: 'right', cursor: 'pointer' }} onTouchTap={() => toggleView('table')} />
            <GridViewIcon color={gridView ? '#8DC73F' : '#757575'} style={{ float: 'right', marginRight: '20px', cursor: 'pointer' }} onTouchTap={() => toggleView('grid')} />
            <AddOffering color="#757575" style={{ float: 'right', marginRight: '20px', cursor: 'pointer' }} />
          </div>
        </div>
      </ViewWrapper>
    );
  }
}

Header.propTypes = {
  gridView: React.PropTypes.bool,
  handleChange: React.PropTypes.func,
  statusValue: React.PropTypes.any,
  toggleView: React.PropTypes.func,
};

export default Header;
