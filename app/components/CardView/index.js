import React from 'react';
import styled from 'styled-components';
import Link from 'react-router/lib/Link';
import connect from 'react-redux/lib/components/connect';
import { createStructuredSelector } from 'reselect';
import { offeringDetails } from 'containers/OfferingDetails/actions';

const CardContainer = styled.div`
   box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
   margin-bottom: 40px;
`;

const CardDivider = styled.div`
  font-size: 20px;
  background: linear-gradient(to right, #0a5074 0%, #299aa9 100%);
  color: #FFFFFF;
  padding: 1.3rem;
`;

const CardFooter = styled.div`
  font-size: 20px;
  background: rgb(141,199,63);
  color: rgba(0,0,0,0.87);
  padding: 1.3rem;
  &:active, &:focus, &:hover, &:visited {
    background-color: rgb(200,219,175);
  }
`;

const CardSection = styled.div`
  padding: 1.3rem;
`;

class Card extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  handleLinkClick = () => {
    this.props.dispatchData(this.props.data);
  }

  render() {
    const { heading, content, cardStyle, cardDividerStyle, cardSectionStyle, displayFooter, footerText, linkPath } = this.props;
    return (
      <CardContainer className="card" style={cardStyle}>
        <CardDivider className="card-divider" style={cardDividerStyle}>
          {heading}
        </CardDivider>
        <CardSection className="card-section" style={cardSectionStyle}>
          {content}
        </CardSection>
        {displayFooter &&
          <Link to={linkPath} onClick={this.handleLinkClick} >
            <CardFooter className="card-divider">
              {footerText}
            </CardFooter>
          </Link>
        }
      </CardContainer>
    );
  }
}

Card.propTypes = {
  heading: React.PropTypes.node,
  content: React.PropTypes.node,
  cardStyle: React.PropTypes.any,
  cardDividerStyle: React.PropTypes.any,
  cardSectionStyle: React.PropTypes.any,
  displayFooter: React.PropTypes.bool,
  linkPath: React.PropTypes.string,
  footerText: React.PropTypes.string,
  data: React.PropTypes.object,
  dispatchData: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatchData: (data) => { dispatch(offeringDetails(data)); },
  };
}

const mapStateToProps = createStructuredSelector({

});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
