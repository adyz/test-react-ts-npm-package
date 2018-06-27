import * as React from 'react';

import './_select.scss'

export default class Select extends React.Component {
  public render() {
    
    return (
      <select className="button">
          <option>Test 1</option>
          <option>Test 2</option>
          <option>Test 3</option>
      </select>
    );
  }
}
