import React, { Component } from 'react'
import Footer from '../components/Footer'

import $ from 'jquery'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as pageActions from '../actions/setWindowWidth'



class App extends Component {

  updateDimensions() {
    this.props.pageActions.setWindowWidth($('body').width())
  }

  componentWillMount() {
    this.updateDimensions()
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this))
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
    windowWidth: state.pageData.windowWidth
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)


    {/*
      <div>
        <div>
          <h1>
            <Link to='/'>App</Link>
          </h1>
          <ul>
            <li><Link to='/admin'>Admin</Link></li>
            <li><Link to='/list'>List</Link></li>
          </ul>
          {this.props.children}
        </div>
        <Footer/>
      </div>
        */}