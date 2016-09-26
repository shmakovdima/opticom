require('!style!css!slick-carousel/slick/slick.css'); 
require('!style!css!slick-carousel/slick/slick-theme.css');

import '../stylus/components/slick.styl';
import '../stylus/components/category.styl';


import React, { Component } from 'react'
import HeaderLight from '../components/Headers/HeaderLight'
import CategoryHeader from './SubItems/Category/CategoryHeader'
import Interesed from './SubItems/Category/Interested'

import { Accordion, Panel } from 'react-bootstrap'


export default class Catalog extends Component {
  render() {
    return (
      <div>
        <HeaderLight/>
        <CategoryHeader/>
          <Accordion>
            <Panel header="Collapsible Group Item #1" eventKey="1">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </Panel>
            <Panel header="Collapsible Group Item #2" eventKey="2">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </Panel>
            <Panel header="Collapsible Group Item #3" eventKey="3">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </Panel>
          </Accordion>


        <Interesed/>
      </div>
    )
  }
}


