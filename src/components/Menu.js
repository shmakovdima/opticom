import React, { Component } from 'react'
import {connect } from 'react-redux'
import '../stylus/components/menu.styl';
import {Link} from 'react-router'
import { bindActionCreators } from 'redux'
import * as pageActions from '../actions/showMenu'
import { If, Then } from 'react-if';

class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      curcategory: 0
    }
  }

  hideMenu(){
    this.props.pageActions.showMenu(!this.props.show_menu)
  }

  render() {
    const show_menu = this.props.show_menu
    const Categories = this.props.Categories
    return(
      <div>   
        <If condition = {show_menu==true}>
          <Then>
            <div className='menu'>   
              <div className='col20-lg-6'>
                <div className='menu_block'>
                  <h2>Каталог</h2>
                  <div>
                    {
                      Categories.map(function(item){
                        return(<Link className='menu_mainlink' to={item.link} title={item.title}>{item.title}</Link>)
                      })
                    }

                  </div>
                </div>
              </div>
              <div className='col20-lg-14 menu_green'>
              </div>
              <button onClick={::this.hideMenu} className='menu_close'></button>
            </div>
          </Then>
        </If>
      </div>
    )
  }

}


function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

function mapStateToProps (state) {
  return {
    Categories: state.pageData.Categories,
    show_menu: state.user.show_menu
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Menu)