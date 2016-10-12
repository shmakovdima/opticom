import React, { Component } from 'react'
import Footer from '../components/Footer'
import browser from 'detect-browser'
import $ from 'jquery'


import Menu from '../components/Menu'
import Login from '../components/Login'


import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as pageActions from '../actions/setWindowWidth'
import * as pageActionTop from '../actions/setWindowTop'


class App extends Component {

  updateDimensions() {
    this.props.pageActions.setWindowWidth($('body').width())
  }

  updateTop(){

    if (browser.name=='firefox') {
      this.props.pageActionTop.setWindowTop($('html').scrollTop());
    }else{
      this.props.pageActionTop.setWindowTop($('body').scrollTop());
    }
  }

  componentWillMount() {
    this.updateDimensions()
    this.updateTop()
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions.bind(this))
    window.addEventListener('scroll', this.updateTop.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this))
    window.removeEventListener('scroll', this.updateTop.bind(this))
  }

  render() {
    const HeaderLinks = this.props.HeaderLinks
    return (
      <div>
        {this.props.children}
        <Footer/>
        <Menu HeaderLinks={HeaderLinks}/>
        <Login/>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    HeaderLinks: state.pageData.HeaderLinks,
    windowWidth: state.pageData.windowWidth,
    windowTop: state.pageData.windowTop
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch),
    pageActionTop: bindActionCreators(pageActionTop, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
