import React, { Component } from 'react'
import Footer from '../components/Footer'

import $ from 'jquery'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as pageActions from '../actions/setWindowWidth'
import * as pageActionTop from '../actions/setWindowTop'



class App extends Component {

  updateDimensions() {
    this.props.pageActions.setWindowWidth($('body').width())
  }

  updateTop(){
    this.props.pageActionTop.setWindowTop($('body').scrollTop())
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
    return (
      <div>
        {this.props.children}
        <Footer/>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
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
