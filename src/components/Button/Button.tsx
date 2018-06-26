import * as React from 'react';

import './_button.scss'

export default class Button extends React.Component {
  public render() {
    
    return (
      <button className="button">
          {this.props.children}
      </button>
    );
  }
}
