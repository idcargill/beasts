import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <>
        <h2 key={this.props.key}>{this.props.header}</h2>
      </>
    );
  }
}

export default Header;
