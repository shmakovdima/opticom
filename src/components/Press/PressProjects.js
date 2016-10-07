import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router'
import { If, Then } from 'react-if'


class PressProjectsItem extends Component {
  render() {

    let img = 'http://' + window.location.host + '/' + this.props.data.image
    let link = this.props.data.link
    let title = this.props.data.title
    let text = this.props.data.text
    var key = this.props.key
    var words = title.split(' ')

    return(
      <div className='press_projects_item'>
        <div className='press_projects_overflow'>
          <Link to={link} title={title}>
            <img alt={title} src={img}/>
            
             {
                  words.map(function(item){
                    return (<span className='underlined'>{item +' '}</span>)
                  })
            } 
          </Link>
          <p>{text}</p>
          <div>
            <If condition={key>1}>
              <Then>
                <div className='press_projects_white'></div>
              </Then>
            </If>
          </div>
        </div>
      </div>

    )
  }


}

class PressProjects extends Component {

  render() {

    var Data = this.props.PressProjects

    return (
      <div className='press_projects'>
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
                  Data.map(function(item, key){

                    return(
                      <div className='col20-lg-9 col20-lg-offset-1 col-md-6 col-sm-6 col-xs-12'>
                        <PressProjectsItem data={item} key={key}/>

                      </div>
                    )

                  })

                }

              </div>
            </div>        
          </section>
        </div>
    )
  }
}


function mapStateToProps (state) {
  return {
    windowWidth: state.pageData.windowWidth,
    PressProjects: state.pageData.PressProjects
  }
}


export default connect(mapStateToProps)(PressProjects)