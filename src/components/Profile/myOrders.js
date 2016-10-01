
import '../../stylus/components/profile.styl';

//import {Link} from 'react-router'
import React, { Component } from 'react'
import {connect } from 'react-redux'
import { If, Then } from 'react-if';

import Order from '../SubItems/Item/Order'
import {DropdownButton, MenuItem} from 'react-bootstrap'


class ProfileOrders extends Component {


 

  constructor(props) {
    super(props);

    this.state = {
      loadmore: true,
      Data: this.props.myOrders.Orders,
      currentAddress: 'Все',
      minDate: 0,
      maxDate: 0
    }
  }


 loadMore(){
    var newData = JSON.parse(JSON.stringify(this.props.myOrders.OrdersMore.Data));
    var oldData = JSON.parse(JSON.stringify(this.state.Data));
  
    this.setState({
      Data: oldData.concat(newData)
    })
   

    if (this.props.myOrders.OrdersMore.final == true) {
      this.setState({
        loadmore: false
      })
    }
  }


  render(){

    var Orders = this.state.Data

    var maxdate,mindate = (Orders.length>0) ? new Date(Orders[0].date) : 0

    var Active =[]
    var Ready = []


    var Adresses = []

    Orders.map(function(item){
      var curDate = new Date(item.date)
      if (curDate<mindate) mindate = curDate
      if (curDate>maxdate) maxdate = curDate


      if (Adresses.indexOf(item.address) == -1) Adresses.push(item.address)

      switch(item.status) {
        case 'active':
          Active.push(item)
          break;
        case 'ready':
          Ready.push(item)
          break;
        default:
          return false;       
      }


    })

    var dropdownAddress = this.state.currentAddress

    console.log(Active)
    console.log(Ready)
    console.log(Adresses)

    return(
      <div>
        <section className='profile_sets_header'>
           <div className='container'>
            <div className='row'>
              <div className='col20-lg-9 col20-lg-offset-1 col20-md-9 col20-md-offset-1 col20-sm-9 '>
                <h1>Мои Заказы</h1>
              </div>
            </div>
          </div>
        </section>

        <section className='profile_orders'>
          <div className='container'>
            <div className='row'>
              <div className='col20-lg-14'>
                <If condition={Active.length>0}>
                  <Then>
                    <div className='profile_orders_block'>
                      <div className=''>
                        <h3 className='col-sm-offset-1'>Активные</h3>
                      </div>
                     
                     {
                        Active.map(function(item){
                          return(
                             <div>
                                <Order item={item}/>
                              </div>
                          )
                         
                        })


                      }

                    </div>
                  </Then>
                </If>


                <If condition={Ready.length>0}>
                  <Then>
                    <div className='profile_orders_block'>
                      <div className=''>
                        <h3 className='col-sm-offset-1'>Выполненные</h3>
                      </div>
                     {
                        Ready.map(function(item){
                          return(
                             <div>
                                <Order item={item}/>
                              </div>
                          )
                        })
                      }

                    </div>
                  </Then>
                </If>
               

              </div>
              <div className='col20-lg-5 col20-lg-offset-1'>
                <div className='profile_right'>
                  <h3>Адрес Доставки</h3>

                   <DropdownButton title={dropdownAddress} id='bg-nested-dropdown'>
                     <div>
                      <MenuItem  eventKey='1'>По месяцам</MenuItem>
                      <MenuItem  eventKey='2'>По категориям</MenuItem>
                    </div>
                   </DropdownButton>
                </div>
              </div>
            </div>
          </div>

          <div className='container load_more'>
            <div className='row text-center'>
              <If condition={this.state.loadmore == true }>
                 <Then>
                   <button onClick={::this.loadMore} className='greenlighted'>Показать Еще 20</button>
                  </Then>
              </If>
            </div>
          </div>
        </section>

      </div>

    )
  }
}

function mapStateToProps (state) {
  return {
    myOrders: state.user.myOrders
  }
}



export default connect(mapStateToProps)(ProfileOrders)


