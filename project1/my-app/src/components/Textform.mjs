import React from 'react'
import PropTypes from 'prop-types'
import Btns from './Btns.mjs'

export default function Textform(props) {
    return (
        <>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="textArea" rows="10"></textarea>
            </div>
            <Btns text="Convert to Upper Case"/>
        </>
    )
}
Textform.prototypes = {
    heading: PropTypes.string.isRequired
}
Textform.defaultProps = {
    heading: "Required Text"
}

