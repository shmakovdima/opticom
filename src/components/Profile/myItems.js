

//import '../stylus/components/catalog.styl';
//import '../stylus/components/subcategory.styl';
import '../../stylus/components/profile.styl';

import '../function/getMonthName.js'

//import {Link} from 'react-router'
import React, { Component } from 'react'
//import HeaderLight from '../components/Headers/HeaderLight'
//import CategoryHeader from './SubItems/Category/CategoryHeader'
import {connect } from 'react-redux'
import Slider from 'react-slick'
import {Tabs, Tab, DropdownButton, MenuItem, Accordion, Panel} from 'react-bootstrap'
import Item from '../SubItems/Item/Item'
import { If, Then, Else } from 'react-if';
import sortArray from '../function/sortArray'
import ReactDOM from 'react-dom';

Date.prototype.getMonthName = function() {
    var month = ['Январт','Февраль','Март','Апрель','Май','Июнь',
    'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
    return month[this.getMonth()];
}


class ItemGor extends Component {
  render(){


    var item = this.props.item

    var search = this.props.search
    console.log('search' + search)

    return(
        <div>
        {

             item.map(function(curitem){

                console.log(curitem.title)

                if (curitem.title.indexOf(search) == -1) return false;

                return(
                  <div className=''>
                    <Item itemgor={true} item={curitem}/>
                  </div>
                )
              })


        }


        </div>

    )


  }

}

class ItemsSlider extends Component {

  render(){

    var windowWidth = this.props.windowWidth

    var slides =  (windowWidth > 768) ? 3 : 1

    var settings = {
      draggable: true,
      slidesToShow: 1,
      slidesToScroll: slides,
      autoplay: false,
      dots: false,
      infinite: false,
      speed: 500,
      variableWidth: true
    };

    var data = (this.props.data) ? this.props.data : []
    return(
      <div className='slider'>
        <Slider  {...settings}>
          <div className='padding_768'>
          </div>
          {
            data.map(function(item) {
              return (
                <div className='item_slide text-center'>
                  <Item item={item} />
                </div>)
            })
          }
        </Slider>
    </div>

    )
  }

}


class myItems extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: 'month', //category
      search: ''
    };
  }

  setMonth(){
    this.setState({
      mode: 'month'
    })
  }

  setCategory(){
    this.setState({
      mode: 'category'
    })
  }

  searchInput(){
    this.setState({
      search: ReactDOM.findDOMNode(this.refs.search).value

    })
  }


  render(){
    var Loved = (this.props.myItems.Loved) ? this.props.myItems.Loved : []
    var Ready = (this.props.myItems.Ready) ? this.props.myItems.Ready : []


    var windowWidth = this.props.windowWidth

    var dropdownmode = (this.state.mode == 'month') ? 'По месяцам' : 'По категориям'

    var mode = this.state.mode 




    var Buyed = (this.props.myItems.Buyed) ? this.props.myItems.Buyed : []
    Buyed = (this.state.mode == 'month') ? Buyed.sort(sortArray('date')) : Buyed.sort(sortArray('category'))

    console.log('Buyed.lenght' + Buyed.length)

    var ResultArray = []; 

    var ResultCategoryArray ={
      title: '',
      items: []
    };

    if (mode == 'month') {
      var startmonth = new Date(Buyed[0].date)
      startmonth = startmonth.getMonthName() + ' ' + startmonth.getFullYear()

      
      ResultCategoryArray.title = startmonth;

      Buyed.map(function(item){

        var curDate = new Date(item.date)
        curDate = curDate.getMonthName() + ' ' + curDate.getFullYear()

        if (curDate == startmonth) {
          ResultCategoryArray.items.push(item)

        }else{
          ResultArray.push(ResultCategoryArray);
          startmonth = curDate

          ResultCategoryArray ='';

          ResultCategoryArray = {
            title: startmonth,
            items: [item]
          }
        }

      })

      ResultArray.push(ResultCategoryArray);
      Buyed = ResultArray;

    }else{

    
      startmonth = Buyed[0].category

      ResultCategoryArray.title = startmonth;

      Buyed.map(function(item){

        var curDate = item.category

        if (curDate == startmonth) {
          ResultCategoryArray.items.push(item)

        }else{
          ResultArray.push(ResultCategoryArray);
          startmonth = curDate

          ResultCategoryArray ='';

          ResultCategoryArray = {
            title: startmonth,
            items: [item]
          }
        }

      })

      ResultArray.push(ResultCategoryArray);
      Buyed = ResultArray;



    }


    var search = this.state.search

    return(
      <div className='profile'>
        <section className='profile_sets_header'>
           <div className='container'>
            <div className='row'>
              <div className='col20-lg-9 col20-lg-offset-1 col20-md-9 col20-md-offset-1 col20-sm-9 '>
                <h1>Мои товары</h1>
              </div>
            </div>
          </div>
        </section>
        <section className='profile_items'>
          <div className='container'>
            <Tabs defaultActiveKey={1} id='uncontrolled-tab-example'>
              <Tab eventKey={1} title='Отложенные'>
                <div className='profile_items_tabs'>
                  <ItemsSlider windowWidth={windowWidth} data={Loved}/>
                </div>
              </Tab>
              <Tab eventKey={2} title='Купленные'>
                <div className='profile_items_buyed'>

                   <div className='profile_items_search'>
                      <input placeholder='ПОИСК ПО ПОКУПЛЕННЫМ' ref='search' type='text' onKeyUp={::this.searchInput}/>
                   </div>

                   <DropdownButton title={dropdownmode} id='bg-nested-dropdown'>
                     <div>
                      <MenuItem onClick={::this.setMonth} eventKey='1'>По месяцам</MenuItem>
                      <MenuItem onClick={::this.setCategory} eventKey='2'>По категориям</MenuItem>
                    </div>
                   </DropdownButton>


                  </div>
                  <div className='profile_items_tabs'>
                    <If condition={search==''}>
                      <Then>
                        <Accordion>
                          {
                            Buyed.map(function(item,key){
                              return(
                                <Panel header={item.title} eventKey={key}>
                                  <div className='profile_items_panel'>
                                    <ItemGor search={search} item={item.items}/>
                                  </div>

                                  
                                </Panel>  
                              )

                            })

                          }                                                   
                        </Accordion>
                      </Then>
                      <Else>
                        <Then>
                          <div className='profile_items_panel'>
                          {
                            Buyed.map(function(item){
                              return(
                                <ItemGor search={search} item={item.items}/>
                              )

                            })

                          } 
                          </div>
                        </Then>
                      </Else>
                    </If>

             
                  </div>
              </Tab>
              <Tab eventKey={3} title='Заключен договор'>
                <div className='profile_items_tabs'>
                  <ItemsSlider windowWidth={windowWidth}  data={Ready}/>
                </div>
              </Tab>
            </Tabs>
          </div>
        </section>

      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    myItems: state.user.myItems,
    windowWidth: state.pageData.windowWidth
  }
}



export default connect(mapStateToProps)(myItems)


