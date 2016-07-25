import React, { Component } from 'react';
import Navigation from '../containers/navigation';
import Footer from '../containers/footer';

export default class App extends Component {
  render() {
    return (
      <div className='main'>
        <div className='page-wrap'>
          <Navigation />
          <div className='container'>
            { this.props.children }
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
