import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router'
import { If, Then, Else } from 'react-if'
import '../stylus/components/ecology.styl';
import HeaderLight from '../components/Headers/HeaderLight'

class EcologyItem extends Component {
  render(){

    var img = (this.props.data.image) ? {backgroundImage: 'url(http://' + window.location.host + '/' + this.props.data.image + ')'} : false
    let link = this.props.data.link
    let text = this.props.data.text
    let title = this.props.data.title
    var category = this.props.data.type.join(', ')
    return(

            <div className='ecology_item'>
              <If condition={img!=false}>
                <Then >
                  <div style={img} className='ecology_item_image'>
                  </div>
                </Then>
                <Else>
                  <div className='ecology_block_addon'>
                  </div>
                </Else>
              </If>
              <div className='ecology_block'>
                <span>{category}</span>
                <Link to={link} title={title}>{title}</Link>
                <p>{text}</p>

              </div>
              
            </div>
    )
  }
}


class Ecology extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadmore: true,
      Data: this.props.Ecology.Data
    }
  }

  loadMore() {
    var newData = JSON.parse(JSON.stringify(this.props.Ecology.loadMore.Data));
    var oldData = JSON.parse(JSON.stringify(this.state.Data));
    this.setState({
      Data: oldData.concat(newData)
    })
   
    if (this.props.Ecology.loadMore.final == true) {
      this.setState({
        loadmore: false
    })
    }
  }

  render() {

    var Data = this.state.Data

    return (
      <div>
        <HeaderLight/>
        <section className='profile_sets_header ecology'>
            <div className='container'>
              <div className='row'>
               
                <div className='col20-lg-19 col20-lg-offset-1 col20-md-19 col20-md-offset-1 col20-sm-9 '>
                  <h1>База эко знаний</h1>
                </div>
              </div>
              <div className='row'>
                <div className='col20-lg-15 col20-md-15 col-sm-10 col-xs-12'>

                  <div className='col20-lg-18 col20-lg-offset-2 col20-md-18 col20-md-offset-2 col20-sm-9 '>
                    <p className='ecology_heading'>
                      Группа компаний «ОптиКом» — лидирующий оператор российского рынка оптовых поставок упаковочных и расходных материалов, товаров хозяйственно-бытового назначения.
                    </p>
                  </div>

                {
                  Data.map(function(item){

                    return(
                      
                        <EcologyItem data={item}/>
    
                    )

                  })

                }
                </div>
                <div className='col20-lg-4 col20-lg-offset-1 col20-md-5 col20-md-offset-1 '>
                  <div className='ecology_category'>
                    <span className='active greenlighted_left'>Все</span>
                    <a className='greenlighted_left'>Статьи</a>
                    <a className='greenlighted_left'>Уроки</a>
                    <a className='greenlighted_left'>Новости</a>
                    <a className='greenlighted_left'>Категория 1</a>
                  </div>
                  <div className='ecology_tegs'>
                    <h3>Теги</h3>
                    <div>
                      <a className='green_underline'>Экология</a>
                      <a className='green_underline'>Уборка</a>
                      <a className='green_underline'>HoReCa</a>
                      <a className='green_underline'>Отели</a>
                      <a className='green_underline'>Офис</a>
                      <a className='green_underline'>Награды</a>


                                         
                    </div>
                  </div>
                </div>
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
    Ecology: state.pageData.Ecology
  }
}


export default connect(mapStateToProps)(Ecology)