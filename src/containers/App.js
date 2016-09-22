import React, { Component } from 'react'
import Footer from '../components/Footer'




export default class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <Footer/>
      </div>
    )
  }
}

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