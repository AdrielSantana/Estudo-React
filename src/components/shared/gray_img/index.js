import React from 'react'
import './style.css'


const GrayImg = (props) =>{
    return (
        <img className={props.gray ? 'gray-img' : 'color-img'} alt='Planet' src={props.img_url}></img>
    )
}

export default GrayImg