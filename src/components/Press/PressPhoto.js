import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router'


class Photo extends Component {
  
  render() {
    var Photos = this.props.Photos
    var category = this.props.key

    return(
      <div>
        {
            Photos.map(function(item){
              let img = 'http://' + window.location.host + '/' + item.image
              let title = item.title
              return(
                <div className='col-lg-3 col-md-4 col-sm-4 col-xs-12 press_photo_item'>
                  <a href={img} class='fancybox' rel={category} title={title}>
                    <img src={img} />
                  </a>
                  <span className='press_photo_title'>{title}</span>
                </div>

                )
            })


        }

      </div>


    )
                             
  }
}

class PhotosInit extends Component {
  componentDidMount() {
   
  } 
     
  render() {
    return(
      <div>
      </div>
    )
  }
}

class PressPhoto extends Component {

  render() {

    var Data = this.props.PressPhoto

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
              
                {
                  Data.map(function(item, key){

                    var Photos = item.Photos

                    return(
                      <div className='press_photo'>
                        <div className='row'>
                          <div className='col20-lg-19 col20-lg-offset-1 col20-md-19 col20-md-offset-1 col20-sm-20'>
                            <h2>{item.category}</h2>
                          </div>  
                        </div>
                        <div className='row'>
                          <Photo Photos = {Photos} key = {key}/>
                        </div>
                      </div>
                    )
                  })
                }

              
            </div> 
            <PhotosInit/>       
          </section>
        </div>
    )
  }
}


function mapStateToProps (state) {
  return {
    windowWidth: state.pageData.windowWidth,
    PressPhoto: state.pageData.PressPhoto
  }
}


export default connect(mapStateToProps)(PressPhoto)