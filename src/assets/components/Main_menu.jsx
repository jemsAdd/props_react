import React, { Component } from 'react'
import Menu from './Menu-Card/MEnu'
import MyMenu from '../../resources/data'
export default class Main_menu extends Component {
  render() {
    return (
      <>
      <div className="all-container">
      <header className="title">
        <h1>Evangadi Menu</h1>
        <div></div>
      </header>
      <div className="foods-container">
{
MyMenu.map(({img,title,price,desc,link},i) =>{
    return(
    <Menu
    key ={i}
    img={img}
    title ={title}
    price ={price}
    desc ={desc}
    link = {link}
    />
    )
})
}
      </div>
      </div>
      </>
    )
  }
}
