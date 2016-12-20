import React, { Component } from 'react';
import Header from './Header';
import $ from 'jquery';
import { connect } from 'react-redux';

class HeaderHome extends Component {
  render() {

    var windowTop = this.props.windowTop;
    var windowWidth = this.props.windowWidth;

    var classed = 'header header_light fixed header_home'

    if (((windowWidth<=768) && (windowTop>(1200 + $(window).height()))) || ((windowWidth>768)&&(windowTop>(1000 + $(window).height())))) classed='header header_light fixed header_home active';


    return (
      <header className={classed}>
        <Header/>
      </header>
    )
  }
} 

function mapStateToProps (state) {
  return {
    windowTop: state.pageData.windowTop,
    windowWidth: state.pageData.windowWidth
  }
}

export default connect(mapStateToProps)(HeaderHome)