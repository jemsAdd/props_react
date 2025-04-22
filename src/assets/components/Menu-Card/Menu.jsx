import React, { Component } from 'react'
import './Menu.css'
export default class Menu extends Component {
  render() {
    let {img,title,price,desc, link} = this.props;
    return (
      <>
        <div className="single-food">
          <div className="img">
            <img src={img}/>
          </div>
          <div className="title-price">
            <h3>{title}</h3>
            <p>{price}</p>
          </div>
          <div className="food-desc">
            {desc}
            <div>
              {link && <p><a href="Learn more">{link}</a></p>}
            
            </div>
            
          </div>
        </div>    
      </>



    )
  }
}

{/* <div class="single-food">
<div class="img">
  <img
    src="https://www.willflyforfood.net/wp-content/uploads/2021/09/ethiopian-food-timatim-salata.jpg.webp"
  />
</div>
<div class="title-price">
  <h3>TIMATIM SELAXA (ቲማቲም ሰላጣ)</h3>
  <p>$5.99</p>
</div>
<div class="food-desc">
  Timatim Salata refers to a type of fresh Ethiopian tomato salad
  that’s also popular in Eritrea. It’s made with diced tomatoes,
  minced onions, and finely chopped peppers dressed with a mixture of
  berbere spices, olive oil, vinegar, and lemon juice.
</div>
</div> */}