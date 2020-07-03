import React from 'react'

function Log(props) {
    const divstyle={
        border: '2px solid',
        width: 'auto',
        display: 'inline-block',
        padding:'10px',
        margin: '10px',

    }
    const listyle={
        listStyleType:'none',
        wordWrap:'anywhere',
        margin:'2px'
    }
    const submitstyle={
        borderRadius: '2px',
        backgroundColor:'lightslategrey',
        color:'white',
        padding:'2px',

    }
    return (
        <div style={divstyle} >
            <li style={listyle} >{props.entryy}</li>
            <li style={listyle} >  {props.datee},  {props.timee}</li>
            <button onClick={props.clickk} style={submitstyle} >Delete Entry</button>
        </div>
    )
}

export default Log;
