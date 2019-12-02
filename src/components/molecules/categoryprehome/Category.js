import React from 'react';
import './category.module.css';

const Category = (props) => (
  <div className="category" onClick={props.handleClick}>
    <div className="category__image">
      <img className="image" src={props.img} />
    </div>
    <p className="category__text">{props.text}</p>
  </div>
)

export default Category;