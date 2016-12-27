import '../../stylus/components/profile.styl';
import React, { Component } from 'react'
import {connect } from 'react-redux'
import { If, Then } from 'react-if';
import DatePicker from 'react-bootstrap-date-picker'
import Order from '../SubItems/Item/Order'
import {DropdownButton, MenuItem} from 'react-bootstrap'


class ProfileOrders extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loadmore: true,
      Data: this.props.myOrders.Orders,
      currentAddress: 'Все',
      minDate: 634867200000,
      maxDate: 1897171200000
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

  dataReset(){
    this.setState({
      currentAddress: 'Все',
      minDate: 634867200000,
      maxDate: 1897171200000
    })
  }

  setAddress(address){
    this.setState({
      currentAddress: address
    })
  }

  onChangeDate() {
    var self = this

    setTimeout(function(){

      var mindate = (document.getElementById('mindate').value!='') ? new Date(document.getElementById('mindate').value) : new Date('1990-02-13')
      var maxdate =  (document.getElementById('maxdate').value!='') ? new Date(document.getElementById('maxdate').value) : new Date('2030-02-13')

      mindate = mindate.getTime()
      maxdate = maxdate.getTime()

      self.setState({
        minDate: mindate,
        maxDate: maxdate
      })


    }, 100)


  }



  render(){



    var monthLabels = ['Январь','Февраль','Март','Апрель','Май','Июнь', 'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь']

    var dayLabels = ['ПН','ВТ','СР','ЧТ','ПТ','СБ','ВС']

    var dateFormat = 'DD.MM.YYYY'


    var Orders = this.state.Data

    
    var mindate = this.state.minDate
    var maxdate = this.state.maxDate

    var Active =[]
    var Ready = []
    var Adresses = []

    var dropdownAddress = this.state.currentAddress

    Orders.map(function(item){
      
      if (Adresses.indexOf(item.address) == -1) Adresses.push(item.address)


      var curDate = new Date(item.date)
      curDate = curDate.getTime()

      console.log(Math.max(mindate, maxdate) + ' ' + curDate + ' ' + Math.min(mindate, maxdate))

      if (!((Math.max(mindate, maxdate) > curDate) && (curDate > Math.min(mindate, maxdate)))) return false;


      if ((dropdownAddress!='Все') && (item.address!=dropdownAddress)) return false;

      
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

    
    mindate = (mindate != 634867200000) ? new Date(mindate).toISOString() : ''
    maxdate = (maxdate != 1897171200000) ? new Date(maxdate).toISOString() : ''

    var self = this

    return(
      <div>
        <section className='profile_sets_header'>
           <div className='container'>
            <div className='row'>
              <div className='col20-lg-9 col20-lg-offset-1 col20-md-14 col20-md-offset-1 col20-sm-20 '>
                <h1>Мои Заказы</h1>
              </div>
            </div>
          </div>
        </section>

        <section className='profile_orders'>
          <div className='container'>
            <div className='row'>
              <div className='col20-lg-14 col20-md-14'>
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
              <div className='col20-lg-5 col20-lg-offset-1 col20-md-5 col20-md-offset-1 hidden-sm hidden-xs'>
                <div className='profile_right profile_orders_top'>
                  <h3 className='profile_orders_title'>Адрес доставки</h3>
                    <div className='profile_orders_dropdown'>
                      <div className='profile_orders_dropdown_block'>
                       <DropdownButton title={dropdownAddress} id='bg-nested-dropdown'>
                          <MenuItem onClick={self.setAddress.bind(self, 'Все')} eventKey={0}>Все</MenuItem>
                          {
                            Adresses.map(function(item, key){
                              return(
                                <MenuItem onClick={self.setAddress.bind(self, item)} eventKey={key+1}>{item}</MenuItem>
                              )
                            })
                          }

            
                       </DropdownButton>
                      </div>
                    </div>

                   <div className='profile_orders_datepicker'>
                    <div className='profile_orders_datepicker_block'>
                      <span className='profile_orders_datepicker_span'>C</span>
                      <DatePicker value={mindate} onChange= {::self.onChangeDate} id = 'mindate' dateFormat={dateFormat} dayLabels={dayLabels} monthLabels={monthLabels}/>
                    </div>
                    <div className='profile_orders_datepicker_block'>
                      <span className='profile_orders_datepicker_span'>По</span>
                      <DatePicker value={maxdate} onChange= {::self.onChangeDate} id = 'maxdate' dateFormat={dateFormat} dayLabels={dayLabels} monthLabels={monthLabels}/>
                    </div>
                    <div className='profile_orders_datepicker_reset'>
                      <button onClick={::this.dataReset} className='greenborderbottom'>
                        <span>Сбросить фильтр</span>

                        </button>
                    </div>
                   </div>

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


