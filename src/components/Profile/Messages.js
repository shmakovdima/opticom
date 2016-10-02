import React, { Component } from 'react'
import {connect } from 'react-redux'
import '../../stylus/components/profile.styl'



class ProfileMessages extends Component {


  setRead(){
    
  }

  render() {

    return (
      <div className='profile'>
        <section className='profile_sets_header'>
           <div className='container'>
            <div className='row'>
              <div className='col20-lg-9 col20-lg-offset-1 col20-md-9 col20-md-offset-1 col20-sm-9 '>
                <h1>Сообщения</h1>
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
    Messages: state.user.Messages,
    windowWidth: state.pageData.windowWidth
  }
}



export default connect(mapStateToProps)(ProfileMessages)









