import React from 'react';
import styled from 'styled-components';

const Loader = styled.div`
  background-color: #F5F5F5;
  border-radius: 3px;
`;

const ImageWithAnimation = styled.img`

`;

class Image extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      imageLoading: true,
      imageLoadError: false,
    };
    this.defaultStyles = {
      backgroundColor: 'transparent',
    };
  }

  handleImageLoad = () => {
    this.setState({ imageLoading: false });
  }
  handleImageError = () => {
    this.setState({ imageLoadError: true });
  }
  render() {
    const { preloaderStyle, wrapperStyle, style, src, ...rest } = this.props;
    return (
      <div style={wrapperStyle}>
        <Loader style={Object.assign({}, style, preloaderStyle, { display: this.state.imageLoading || this.state.imageLoadError ? 'block' : 'none' })} />
        <ImageWithAnimation alt="" src={src} {...rest} style={Object.assign({}, style, { display: this.state.imageLoading || this.state.imageLoadError ? 'none' : 'block' })} onLoad={this.handleImageLoad} onError={this.handleImageError} />
      </div>
    );
  }
}

Image.propTypes = {
  src: React.PropTypes.string.isRequired,
  preloaderStyle: React.PropTypes.object,
  style: React.PropTypes.object,
  wrapperStyle: React.PropTypes.object,
};

Image.defaultProps = {
  style: {},
  preloaderStyle: {},
};

export default Image;
