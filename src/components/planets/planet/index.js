import React, { useState, useEffect } from 'react'
import GrayImg from '../../shared/gray_img'
import DescriptionWithLink from '../../shared/DescriptionWithLink'
import SattelitesForm from '../satellites_form'

async function getSattelites(id) {
    let response = await fetch(`http://localhost:3000/api/${id}.json`)
    let data = await response.json()
    return data
}

const Planet = (props) => {
    const [sattelites, setSattelites] = useState([])

    useEffect(() => {
        getSattelites(props.id).then(data => {
            setSattelites(data['satellites'])
        })
    }, [])

    const addSattelite = (new_satellite) =>{
        setSattelites([...sattelites, new_satellite])
    }

    let title

    if (props.title_with_underline) {
        title = <h4><u>{props.name}</u></h4>
    } else {
        title = <h4>{props.name}</h4>
    }

    return (
        <div>
            {title}
            <div>
                <DescriptionWithLink
                    description={props.description}
                    url={props.url}
                />
            </div>

            <GrayImg
                img_url={props.img_url}
                name={props.name}
                gray={props.gray}
            />

            <h4>Satélites</h4>
            <SattelitesForm
                addSattelite = {addSattelite}
                />
            <ul>
                {sattelites.map((sattelite, index) => {
                    return <li key={index}>{sattelite.name}</li>
                })}
            </ul>
            <hr />
        </div>
    )
}


export default Planet