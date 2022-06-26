import React from 'react'
import PropTypes from 'prop-types'

export default function Btns(props) {
  return (
    <button type="button" onClick={props.onClick} className={`btn btn-${props.type}`}>{props.text}</button>
  )
}
Btns.prototypes={
    type : PropTypes.string.isRequired,
    text : PropTypes.string.isRequired,
    onClick: PropTypes.func
}
Btns.defaultProps={
    type : "primary",
    text : "primary",
    onClick: ()=>{console.log("clicked")}
}
