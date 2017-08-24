/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import ViewWrapper from 'components/ViewWrapper';
import Card from 'components/CardView';
import SortableTable from 'components/SortableTable';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <ViewWrapper marginTop={'88px'}>
        <div className="">
          <div className="small-3 columns">
            <Card
              heading="Offerings" content={
                <div className="sidebar_bottom">
                  <div className="sidebar_content">
                    <div className="content_side_left">
                      <img src="http://clickipodev.s3.amazonaws.com/companies/logos/1c1/232/8a-/small/1501178783-apple-macbook-2016-13.jpg?1501178783" />
                    </div>
                    <div className="sidebar_right">
                      <div className="name">Company1</div>
                      <div className="name_head">(store1)</div>
                      <div className="share_det">2 shares $2 - 20</div>
                      <div className="date_det">Anticipated week of Jul 28, 2017</div>
                    </div>
                  </div>
                  <div className="sidebar_content">
                    <div className="content_side_left">
                      <img src="http://clickipodev.s3.amazonaws.com/companies/logos/1c1/232/8a-/small/1501178783-apple-macbook-2016-13.jpg?1501178783" />
                    </div>
                    <div className="sidebar_right">
                      <div className="name">Company1</div>
                      <div className="name_head">(store1)</div>
                      <div className="share_det">2 shares $2 - 20</div>
                      <div className="date_det">Anticipated week of Jul 28, 2017</div>
                    </div>
                  </div>
                </div>
            }
            />
          </div>

          <div className="small-9 columns">
            <Card
              heading="Stats" content={
                <table>
                  <tbody>
                    <tr className="row">
                      <td className="small-5 td-title">Offerings:<div className="td-data" style={{ marginBottom: '30px' }}>12</div></td>
                      <td className="small-4 td-title">Broker Dealers:<div className="td-data" style={{ marginBottom: '30px' }}>12</div></td>
                      <td className="small-3 td-title small-offset-2">Investors:<br /><div className="td-data" style={{ marginBottom: '30px' }}>2,237</div></td>
                    </tr>

                    <tr className="row">
                      <td className="small-4 td-title">Dollar Amount in Offerings:<div className="td-data">$20MM</div></td>
                      <td className="small-4 td-title">Shares Ordered:<div className="td-data">400MM</div></td>
                      <td className="small-4 td-title">Shares Allocated:<div className="td-data">300MM</div></td>
                    </tr>
                  </tbody>
                </table>
            }
            />
          </div>

          <div className="small-9 columns" style={{ float: 'left' }}>
            <Card
              heading="Stats" content={
                <SortableTable />
              }
            />
          </div>
        </div>
      </ViewWrapper>
    );
  }
}
