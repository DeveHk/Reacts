import React from 'react'
import PropTypes from 'prop-types'

export default function Btns(props) {
  return (
    <button type="button" className={`btn btn-${props.type}`}>{props.text}</button>
  )
}
Btns.prototypes={
    type : PropTypes.string.isRequired,
    text : PropTypes.string.isRequired
}
Btns.defaultProps={
    type : "primary",
    text : "primary"
}
