import * as React from 'react';

import './scss/style.scss'

export interface BannerProps {
    name: string;
}

export interface BannerState {
    active?: false
}

export default class Banner extends React.Component<BannerProps, BannerState> {
  public render() {
    
    return (
      <div className="banner">
          <h1>Hello {this.props.name}</h1>
      </div>
    );
  }
}
