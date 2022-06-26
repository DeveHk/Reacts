import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Btns from './Btns.mjs'


export default function Textform(props) {
    const [text,uptext]=useState("Enter Text To Manupilate");
    const [olds,addOlds]=useState([text]);
    
    const handleUpText=()=>{
        addOlds((olds.join("$")+'$'+text).split("$"))
        uptext(text.toUpperCase())
    }
    const handleLowText=()=>{
        addOlds((olds.join("$")+'$'+text).split("$"))
        uptext(text.toLowerCase())
    }
    const handleResText=()=>{
        addOlds((olds.join("$")+'$'+text).split("$"))
        uptext("")
    }
    const handleEmailText=()=>{
        addOlds((olds.join("$")+'$'+text).split("$"))
        text.split(" ").filter(word=>(word.split("").includes('@')))
        uptext(text.split(" ").filter(word=>(word.split("").includes('@'))).filter(word=>(word.split("").includes('.'))).join(", "))
    }
    const handleUndoText=()=>{
        if(olds.length>1){
       uptext(olds[olds.length-1])
       addOlds(olds.join("$#").split("#").filter(sen=>(sen.split('').includes('$'))).map(w=>(w.substring(0, w.length-1))))
        }
    }
    const handleCopyText=()=>{
        navigator.clipboard.writeText(text)
    }
    const txtchange=(e)=>{
        //at instance value of target changes
        uptext(e.target.value)
    }
    
    return (
        <>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text}  onChange={txtchange} id="textArea" rows="10"></textarea>
            </div>
            <Btns text="Reset Text" onClick={handleResText} type="primary mx-2 my-1"/>
            <Btns text="Convert to Upper Case" onClick={handleUpText} type="primary mx-2 my-1"/>
            <Btns text="Convert to Lower Case" onClick={handleLowText} type="primary mx-2 my-1"/>
            <Btns text="Extract Emails" onClick={handleEmailText} type="primary mx-2 my-1"/>
            <Btns text="Undo" onClick={handleUndoText} type="primary mx-2 my-1"/>
            <Btns text="Copy Text" onClick={handleCopyText} type="primary mx-2 my-1"/>
            <h6 className='my-2'>Summary:</h6>
            <p>{text.split(" ").length} Words, {text.length} Characters, {(text.split(" ").length*0.009)} min Reading</p>
            <h5 className='my-4'>Preview</h5>
            <p className='container'>{text}</p>
        </>
    )
}
Textform.prototypes = {
    heading: PropTypes.string.isRequired
}
Textform.defaultProps = {
    heading: "Required Text"
}

