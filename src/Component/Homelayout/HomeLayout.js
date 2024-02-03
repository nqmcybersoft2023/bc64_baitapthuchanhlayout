import React, { Component } from 'react'
import Header from './Header'
import Banner from './Banner'
import Footer from './Footer'
import Item from './Item'
export default class HomeLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='d-flex  justify-content-center' >
          <Banner />
        </div>
        <Item />
        <Footer />
      </div>



    )
  }
}
