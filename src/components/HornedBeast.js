import React from 'react';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <h2>{this.props.title}</h2>
        <img src={this.props.image} alt={this.props.alt} />
        <p>{this.props.description}</p>
      </>
    );
  }
}

export default HornedBeast;
