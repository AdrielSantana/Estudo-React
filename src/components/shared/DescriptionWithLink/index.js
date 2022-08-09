import React, { Fragment } from 'react'
import './style.css'

const DescriptionWithLink = (props) => {
    if(!props.description){
        return null
    }

    if (props.url){
        return ( 
            <Fragment>
                <p>{props.description}</p>
                <a target="_blank" rel="noreferrer" href={props.url}>{props.url}</a>
            </Fragment>
        )
    } else {
        return ( 
            <Fragment>
                <p>{props.description}</p>
            </Fragment>
        )  
    }
}

export default DescriptionWithLink