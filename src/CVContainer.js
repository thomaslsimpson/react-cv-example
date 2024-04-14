import React, { Component } from 'react';
import './CVContainer.css';


class CVContainer extends Component {
  render () {
    return (
      <div className="CVContainer">
        <div className='CVTitle'>{this.props.title}</div>
        {this.props.children}
        <p>Container</p>
      </div>
    );
  }
}

export default CVContainer;
