import React, { Component } from 'react'
import { Link } from 'react-router'
import Footer from '../components/Footer'

var FooterLinks = [
  {
    title: 'Компания',
    href: 'company'
  }, {
    title: 'Сотрудничество',
    href: 'cooperation'
  }, {
    title: 'Производство',
    href: 'manufacturing'
  }, {
    title: 'Пресс-центр',
    href: 'press-room'
  }, {
    title: 'Блог',
    href: 'blog'
  }, {
    title: 'Отвественность',
    href: 'responsibility'
  }, {
    title: 'Экология',
    href: 'ecology'
  }
];


export default class App extends Component {
  render() {
    return (
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
        <Footer FooterLinks={FooterLinks}/>
      </div>

    )
  }
}
