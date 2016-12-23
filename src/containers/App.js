import React, { Component } from 'react'
import Footer from '../components/Footer'

import $ from 'jquery'
import Helmet from 'react-helmet'

import Menu from '../components/Menu'
import Login from '../components/Login'
import {If, Then} from 'react-if'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as pageActions from '../actions/setWindowWidth'
import * as pageActionTop from '../actions/setWindowTop'


class App extends Component {

  updateDimensions() {
    this.props.pageActions.setWindowWidth($('body').width())
  }

  updateTop(){
    this.props.pageActionTop.setWindowTop(window.scrollY || document.documentElement.scrollTop);
  }

  componentWillMount() {


    this.updateDimensions()
    this.updateTop()
  }

  componentDidMount() {
    this.updateTop()
    this.updateDimensions()
    window.addEventListener('resize', this.updateDimensions.bind(this))
    window.addEventListener('scroll', this.updateTop.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this))
    window.removeEventListener('scroll', this.updateTop.bind(this))
  }

  render() {
    
    const HeaderLinks = this.props.HeaderLinks

    var ctr = false

    return (
      
          <div>
            <If condition={ctr==false}>
              <Then>
                <div>
                  <Helmet title='Оптиком' defaultTitle='My Default Title'/>
                  {this.props.children}
                  <Footer/>
                  <Menu HeaderLinks={HeaderLinks}/>
                  <Login/>
                </div>
              </Then>
            </If>

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
