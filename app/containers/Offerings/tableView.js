import React from 'react';
import TextFieldWithDefaultIcon from 'components/TextFieldWithDefaultIcon';
import SearchIcon from 'material-ui/svg-icons/action/search';
import { reduxForm, Field } from 'redux-form/immutable';
import { parseDate, currency } from './Helpers';

class TableView extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { offeringTableView, searchOffering } = this.props;
    if (offeringTableView && offeringTableView.length > 0) {
      return (
        <div className="content_section2">
          <div className="list_content">
            <div className="list_top">
              <Field
                name="prepaid_mobile_number"
                component={TextFieldWithDefaultIcon}
                hintText="Search"
                floatingLabelText="Search"
                floatingLabelFixed
                floatingLabelStyle={{ fontSize: '14px' }}
                iconStyle={{ position: 'absolute', left: '265px', top: '40px' }}
                icon={<SearchIcon />}
                onChange={searchOffering}
              />
            </div>
            <div className="list_bottom_wrap">
              {
                offeringTableView.map((item, i) => (
                  <div className="list_bottom" key={i}>
                    <div className="list_bottom_sections inline">
                      <img src={item.logo_medium} alt="ClickIPO" style={{ maxHeight: '75px', width: 'auto' }} />
                    </div>
                    <div className="list_bottom_sections inline">
                      <div className="list_view_head">
                        {item.name}
                      </div>
                      <div className="det_list">Anticipated Price Rang</div>
                      <div className="det_cost">
                        {item.offering_date_attributes ?
                          currency(item.offering_price_attributes.min_price) - currency(item.offering_price_attributes.max_price) : '$0.00 - $0.00'
                        }
                      </div>
                    </div>
                    <div className="list_bottom_sections inline">
                      <div className="font_12">Anticipated to be Public: <span style={{ color: 'red' }}>{item.offering_date_attributes ? parseDate(item.offering_date_attributes.max_date) : 'Closed'}</span></div>
                      <div className="det_list">Customer Orders </div>
                      <div className="det_cost">500</div>
                    </div>
                    <div className="list_bottom_sections inline">
                      <div className="det_list extra_padding">Potential Investment Amount</div>
                      <div className="det_cost">$3.75MM ({item.offering_share_attributes ? item.offering_share_attributes.anticipated_shares.toLocaleString() : '0'} shares)</div>
                    </div>
                  </div>
              ))
              }
            </div>
          </div>
        </div>
      );
    } return (null);
  }
}

TableView.propTypes = {
  offeringTableView: React.PropTypes.any,
  searchOffering: React.PropTypes.func,
};

const TableViewSearchForm = reduxForm({
  form: 'TableViewSearchForm',
  destroyOnUnmount: false,
  touchOnBlur: false,
})(TableView);

export default TableViewSearchForm;
