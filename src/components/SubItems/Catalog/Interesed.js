import React, { Component } from 'react'
import MobileSlider from '../MobileSlider'
import { connect } from 'react-redux'

import { If, Then, Else } from 'react-if';
import Item from '../Item/Item'

class Interesed extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loadmore: true,
      Data: this.props.Interesed
    }
  }

  loadMore() {
    var newData = JSON.parse(JSON.stringify(this.props.loadMore.Interesed));
    var oldData = JSON.parse(JSON.stringify(this.state.Data));
    this.setState({
      Data: oldData.concat(newData)
    })
   

    if (this.props.loadMore.final == true) {
      this.setState({
        loadmore: false
    })
    }
  }


  render() {

    let Interesedkey = 4000
    const Interesed = this.state.Data
    const windowWidth = this.props.windowWidth
    const only_eco = this.props.only_eco





    return(
      <section className='interesed'>
        <div className='container'>
          <div className='row'>
            <div className='Interesed_before'></div>
            <h2 className='col-xs-12 col20-lg-offset-1'>
              <span>Вас могут </span>
              <br/>
              <span>заинтересовать</span>
            </h2>
          </div>
        </div>
        <div className='container item_nopadding'>
          <div className='row'>


             <If condition={windowWidth<768 }>
                <Then>
                  <div className='col-xs-12'>
                    <MobileSlider data={Interesed} only_eco={only_eco} />
                  </div>
                </Then>
                <Else>
                  <Then>
                    <div>
                      {
                        Interesed.map(function(item) {
                          if ((only_eco == true) && (item.eco!=true)) return false;
                          return (
                            <div className='col20-lg-4 col20-md-5 col-sm-4'>
                              <Item item={item} key={++Interesedkey}/>
                          </div>)
                        })
                      }
                    </div>
                  </Then>
                </Else>
            </If>


            
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
    )
  }
}


function mapStateToProps (state) {
  return {
    windowWidth: state.pageData.windowWidth,
    Interesed: state.pageData.Interesed,
    only_eco: state.user.only_eco,
    loadMore: state.pageData.LoadMore
  }
}


export default connect(mapStateToProps)(Interesed)