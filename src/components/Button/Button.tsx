import * as React from 'react';

import './_button.scss'

export default class Banner extends React.Component {
  public render() {
    
    return (
      <button className="button">
          <span>Button </span> {this.props.children}
      </button>
    );
  }
}
