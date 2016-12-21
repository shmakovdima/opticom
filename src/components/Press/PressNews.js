import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router'
import { If, Then } from 'react-if'
import '../../stylus/components/set.styl';
import wordlenght from '../function/wordlenght'
import getDate from '../function/getDate'

class PressNewsItem extends Component {
  render () {

    let img = 'http://' + window.location.host + '/' + this.props.data.image
    let link = this.props.data.link
    let title = wordlenght(this.props.data.title, 50)
    let hoverimg = 'http://' + window.location.host + '/' + this.props.data.imagehover
    let date = getDate(this.props.data.date)

    return(
      <div className='ready ready_pressnews_item'>
        <div className='ready_block'>
          <img src={img} className='ready_image' alt={title}/>
          <img src={hoverimg} className='ready_hover' alt={title}/>
          <div className='ready_addons ready_pressnews'>
              <span className='ready_date'>{date}</span>
              <Link to={link} title={title} className='ready_title'>
                {title}              
              </Link>
              <div className='ready_pressnews_bg'></div>
            </div>
        </div>
      </div>
    )
  }
}

class PressNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadmore: true,
      Data: this.props.PressNews.Data
    }
  }

  loadMore() {
    var newData = JSON.parse(JSON.stringify(this.props.PressNews.loadMore.Data));
    var oldData = JSON.parse(JSON.stringify(this.state.Data));
    this.setState({
      Data: oldData.concat(newData)
    })
   
    if (this.props.PressNews.loadMore.final == true) {
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
                <div className='col20-lg-9 col20-lg-offset-1 col20-md-9 col20-md-offset-1 col20-sm-20 '>
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
                      <div className='col-lg-4 col-md-4 col-sm-6 col-xs-12'>
                        <PressNewsItem data={item}/>
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
    PressNews: state.pageData.PressNews
  }
}


export default connect(mapStateToProps)(PressNews)