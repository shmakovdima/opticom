import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router'
import { If, Then } from 'react-if'
import getDate from '../function/getDate'


class PressSmiItem extends Component {
  render () {

    let img = {backgroundImage: 'url(http://' + window.location.host + '/' + this.props.data.image + ')'}
    let link = this.props.data.link
    let title = this.props.data.title
    let where = this.props.data.where
    let date = getDate(this.props.data.date)

    var words = title.split(' ')

  
    return(
      <div className='press_news_item'>
        <div style={img} className='press_news_image pull-left'></div>
        <div className='pull-right press_news_block'>
          <span className='press_news_date'>{date}</span>
          <Link className='press_news_link' to={link} title={title}>

            {
                  words.map(function(item){
                    return (<span className='underlined'>{item + ' '}</span>)
                  })
            } 

          </Link>
          
        </div>
        <span className='press_news_where'>{where}</span>
      </div>
    )
  }
}

class PressSmi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadmore: true,
      Data: this.props.PressSmi.Data
    }
  }

  loadMore() {
    var newData = JSON.parse(JSON.stringify(this.props.PressSmi.loadMore.Data));
    var oldData = JSON.parse(JSON.stringify(this.state.Data));
    this.setState({
      Data: oldData.concat(newData)
    })
   
    if (this.props.PressSmi.loadMore.final == true) {
      this.setState({
        loadmore: false
    })
    }
  }

  render() {

    var Data = this.state.Data

    return (
      <div>
        <section className='profile_sets_header'>
            <div className='container'>
              <div className='row'>
                <div className='profile_sets_white'></div>
                <div className='col20-lg-9 col20-lg-offset-1 col20-md-9 col20-md-offset-1 col20-sm-9 '>
                  <h1>Преcc-центр</h1>
                </div>
              </div>
              <div className='row press_links'>
                <div className='col20-lg-19 col20-lg-offset-1 col20-md-19 col20-md-offset-1 col20-sm-20 '>
                  <Link to='/press/news' activeClassName='active'>Новости компании</Link>
                  <Link to='/press/projects' activeClassName='active'>Наши проекты</Link>
                  <Link to='/press/kit' activeClassName='active'>Пресс-кит</Link>
                  <Link to='/press/smi' activeClassName='active'>СМИ о нас</Link>
                  <Link to='/press/photo' activeClassName='active'>Фото-портфолио</Link>                               
                </div>
              </div>
            </div>
          </section>
          <section> 
            <div className='container'>
              <div className='row'>
                {
                  Data.map(function(item){

                    return(
                      <div className='col20-lg-9 col20-lg-offset-1 col-md-6 col-sm-6 col-xs-12'>
                        <PressSmiItem data={item}/>
                      </div>
                    )

                  })

                }

              </div>
            </div>        
          </section>
          <div className='container load_more'>
            <div className='row text-center'>
              <If condition={this.state.loadmore == true }>
                 <Then>
                   <button onClick={::this.loadMore} className='greenlighted'>Показать Еще 10</button>
                  </Then>
              </If>
            </div>
          </div>
        </div>
    )
  }
}


function mapStateToProps (state) {
  return {
    windowWidth: state.pageData.windowWidth,
    PressSmi: state.pageData.PressSmi
  }
}


export default connect(mapStateToProps)(PressSmi)