import * as React from 'react';

import './_button.scss'

export default class Button extends React.Component {
  public render() {
    const {children, ...rest} = this.props;
    return (
      <button {...rest} className="button">
          {children}
      </button>
    );
  }
}
