import React, { Component } from 'react'
import HeaderDark from '../components/Headers/HeaderDark'
import {SectionsContainer, Section} from 'react-fullpage';
import Footer from './Footer'

export default class Today extends Component {

  render() {

    let options = {
      className: 'today',
      scrollBar:  false
    }

    return(
      <div>
        
        <SectionsContainer {...options}>
          <Section>
            <HeaderDark/>
            <div className='today_section'>

            </div>

          </Section>
          <Section>Page 2</Section>
          <Section><Footer/></Section>
        </SectionsContainer>

      </div>
    )
  }
}