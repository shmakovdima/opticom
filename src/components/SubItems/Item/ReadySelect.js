import React, { Component } from 'react'
import {Link} from 'react-router'
import wordlenght from '../../function/wordlenght'
import wordend from '../../function/wordend'
//import $ from 'jquery'


export default class Ready extends Component  {
  constructor(props) {
    super(props);
    let link = this.props.data.link

    var classn = link.split('/')
    classn = classn[classn.length-1]
    classn = 'ready_' + classn 

    this.setState({id: classn})

    this.state = {
      height: 0,
      id: classn
    }
  }

  componentDidMount() {
    this.setState({
      height: document.querySelector('.' + this.state.id + ' a').clientHeight
    })
    //alert(document.getElementsByClassName().offsetHeight)
  }


  render() {
    let img = 'http://' + window.location.host + '/' + this.props.data.image
    let link = this.props.data.link
    let title = wordlenght(this.props.data.title, 50)
    let hoverimg = 'http://' + window.location.host + '/' + this.props.data.hoverimage
    let count = this.props.data.count + ' ' + wordend(this.props.data.count, ['товар','товара','товаров'])

    const Rubrics = (this.props.data.rubrics) ? this.props.data.rubrics : []



    let imageLeft = {
      left:  (this.props.data.hasOwnProperty('left') ?  this.props.data.left : 0)+'px'
    }

    let textLeft = {
      left:  (this.props.data.hasOwnProperty('textleft') ? 'calc(20% ' + this.props.data.textleft+'px)' : '20%')
    }

  


    var words = title.split(' ')


    return(
      <div className='ready readyselect'>
        <div className={this.state.id}>
          <div className='ready_block' style={imageLeft}>
            <img src={img} className='ready_image' alt={title}/>
            <img src={hoverimg} className='ready_hover' alt={title}/>
            
            
            <div className='ready_addons' style={textLeft}>
              <div className='ready_addons_block'></div>
              <Link to={link} title={title} className='ready_title'>
                {
                  words.map(function(item){
                    return (<span>{item+' '}</span>)
                  })
                }                
              </Link>
              <div className='ready_countselect'>{count}</div>
              <ul>
                {
                  Rubrics.map(function(item){
                    return(<li><span>● {item}</span></li>)
                  })

                }
              </ul>
            </div>


           
          </div>

        </div>
      </div>
    )
  }
}