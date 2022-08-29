import React from 'react'
import './Card.css'

function Card(props) {
    const classes = 'card ' + props.className
    /*
    * When having a custom reusable wrapper it is necessary to tell it to support the children
    * classes and styles this is by adding the props.className to a classes variable
    * This concept of having an organized reusable components structures is what is called: COMPOSITION
    */
  return <div className={classes}>{props.children}</div>
}

export default Card