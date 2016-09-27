import React, { Component } from 'react'
import {connect } from 'react-redux'
import '../stylus/components/menu.styl';
import {Link} from 'react-router'
import { bindActionCreators } from 'redux'
import * as pageActions from '../actions/showMenu'
import { If, Then } from 'react-if';
import $ from 'jquery'



class SubCat extends Component{


  hideMenu(){
    $('body').removeClass('overflow');
    this.props.setMenu.showMenu(false)
  }

  render(){

    var Cat = []

    var self = this

    if (this.props.data.childrens != undefined) {
      Cat = this.props.data.childrens
    } 
    console.log(Cat)

    return(
      <ul className='menu_ul'>
      {
        Cat.map(function(it){
           return(<li>
            <Link onClick={::self.hideMenu} to={'/'+it.link} title={it.title}>{it.title}</Link>
          </li>
          )
        })
      }
      </ul>     
    )
  }

}

class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      curcategory: 0
    }
  }

  hideMenu(){
    $('body').removeClass('overflow');
    this.props.pageActions.showMenu(!this.props.show_menu)
  }


  hideCat() {
    $('.menu_green').removeClass('active');
    $('.menu_block').removeClass('notactive')
  }

  setCat(id){

    $('.menu_green').addClass('active');

    $('.menu_block').addClass('notactive')

    this.setState({
      curcategory: id
    })
  }

  render() {

    const show_menu = this.props.show_menu
    const Categories = this.props.Categories

    var CutCategory = this.props.Categories[this.state.curcategory].childrens

    var curcat = this.state.curcategory
    var setCat = this.setCat
    var self = this

    var titleCur = this.props.Categories[this.state.curcategory].title

    const setMenu = this.props.pageActions
    
    return(
      <div>   
        <If condition = {show_menu==true}>
          <Then>
            <div className='menu'>   
              <div className='menu_overflow'>
                <div className='col20-lg-6 col20-md-8 col20-sm-8'>
                  <div className='menu_block'>
                    <h2>Каталог</h2>
                    <div>
                      {
                        Categories.map(function(item, key){
                          return(<button  onClick={setCat.bind(self, key)} className={'menu_mainlink text-left '+ (key == curcat ? 'active' : '') } to={item.link} title={item.title}>
                            {item.title}
                            <div></div>
                          </button>)
                        })
                      }

                    </div>
                  </div>
                </div>
                <div className='col20-lg-14 col20-md-12  col20-sm-12 menu_green'>
                  <div className='menu_links'>


                    <h3 className='hidden-lg col-xs-12 hidden-md hidden-sm'>{titleCur}
                      <button onClick={::this.hideCat} className='hidden-lg hidden-md hidden-sm menu_prev'></button>
                    </h3>
                    {
                      CutCategory.map(function(item){
                        return(
                          <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                            <div className='menu_subcategory'>
                              <Link onClick={::self.hideMenu} to={'/'+item.link} title={item.title}>{item.title}</Link>
                            </div>
                            <SubCat setMenu={setMenu} data={item} />
                          </div>
                          )
                        })
                    }

                  </div>

                </div>
                <button onClick={::this.hideMenu} className='menu_close'></button>
              </div>
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