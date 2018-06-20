import * as React from 'react';

import './scss/style.scss'

export interface BannerProps {
}

export default class Banner extends React.Component<BannerProps, any> {
  render() {
    return (
      <div className="banner">
          <h1>Da</h1>
      </div>
    );
  }
}
