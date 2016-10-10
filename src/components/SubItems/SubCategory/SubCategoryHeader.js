import React, { Component } from 'react'
import EcoCheckbox from '../Catalog/EcoCheckbox'
import {Link} from 'react-router'
import {connect } from 'react-redux'
//import { bindActionCreators } from 'redux'



class CatalogHeader extends Component {
  render() {
    //const windowWidth = this.props.windowWidth

   // const {showMenu} = this.props.pageActions


   var breadcrumbs = []
   if (this.props.categoryData.breadcrumbs!=undefined) {
    breadcrumbs = this.props.categoryData.breadcrumbs
   }


   let title = this.props.categoryData.title

   var breadcrumb_link =  'http://' + window.location.host + '/'
    return(
    <div>
      <section className='category_header'>
        <div className='container'>
          <div className='row'>
              <div className='category_header_absolute'>
                <div className='col20-lg-offset-2 col20-md-offset-2 col20-sm-offset-2 col20-lg-16 col20-md-16 col20-sm-16'>
                <div className='hidden-xs category_header_white sub'>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
          

            <div className='col15-lg-9 col15-md-9 hidden-xs col15-sm-9 pull-right'>
              <div className='category_header_green'>
                <div className='hidden-xs'>
                  <EcoCheckbox />
                </div>
              </div>
            </div>

            <div className='category_breadcrumb col20-lg-offset-1 col15-lg-5  col15-md-6 col15-sm-6 '>
              <ol className='breadcrumb'>
                {
                  breadcrumbs.map(function(item) {

                    breadcrumb_link+=item.link+'/'
                    return(
                      <li className='breadcrumb-item'>
                        <Link to={breadcrumb_link} title={item.title}>{item.title}</Link>
                      </li>
                    )
                  })
                }

              </ol>
              <div className='hidden-lg hidden-md hidden-sm category_header_picture'></div>
              <h1 className='sub'>{title}</h1>
              
              <div>
                <span className='subcategory_header_consult'>Нужна консультация?</span>
                <Link className='subcategory_header_consult_link ' to='' title='Пригласить торгового представителя'>
                  <span className='green_underline'>Пригласить торгового</span>
                  <br/>
                  <span className='green_underline'>представителя</span>
                </Link>
              </div>
             
            </div>



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
    Categories: state.pageData.Categories,
    show_menu: state.user.show_menu
  }
}

export default connect(mapStateToProps)(CatalogHeader)

