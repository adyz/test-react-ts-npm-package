import * as React from 'react';

import './_banner.scss'

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
          <h1>Hello <span>{this.props.name}</span></h1>
      </div>
    );
  }
}
