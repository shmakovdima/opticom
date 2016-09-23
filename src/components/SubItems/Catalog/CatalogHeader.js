import React, { Component } from 'react'
import EcoCheckbox from './EcoCheckbox'
import {Link} from 'react-router'

export default class CatalogHeader extends Component {
  render() {
    return(
      <section className='catalog_header'>
        <div className='container'>
          <div className='row'>
            <div className='col20-lg-9 col20-lg-offset-1 col20-md-9 col20-md-offset-1 col20-sm-9 '>
              <h1>Каталог</h1>
              <span className='catalog_header_leed'>Более 15 000 товаров в 24 категориях</span>
            </div>
            <div className='col20-lg-4 col20-lg-offset-1 col20-md-5 col20-sm-5'>
              <EcoCheckbox/>
            </div>
            <div className='col20-lg-4 col20-md-4 col20-sm-6'>
              <h3 className='catalog_header_consult'>Нужна консультация?</h3>
              <Link className='catalog_header_consult_link' to='/order' title='Пригласить торгового представителя'>
                <span className='green_underline opacity'>Пригласить торгового</span>
                <wbr/>
                <span className='green_underline opacity'>представителя</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
  }

}