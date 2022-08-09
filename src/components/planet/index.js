import React, { useState, useEffect } from 'react'
import GrayImg from '../shared/gray_img'
import DescriptionWithLink from '../shared/DescriptionWithLink'
import SattelitesForm from '../planet/form'
import { useParams, useNavigate, Navigate} from 'react-router-dom'

async function getPlanet(id) {
    let response = await fetch(`http://localhost:3000/api/${id}.json`)
    let data = await response.json()
    return data
}

const Planet = () => {
    const [sattelites, setSattelites] = useState([])
    const [planet, setPlanet] = useState({})
    const [navigateState, setNavigate] = useState(false)

    let { id } = useParams()

    const navigate = useNavigate();

    useEffect(() => {
        getPlanet(id).then(data => {
            setSattelites(data['satellites'])
            setPlanet(data['data'])
        }, error => {
            setNavigate(true)
        })
    }, [])

    const goToPlanets = () =>{
        navigate('/')
    }

    const addSattelite = (new_satellite) => {
        setSattelites([...sattelites, new_satellite])
    }

    let title

    if (true) {
        title = <h4><u>{planet.name}</u></h4>
    } else {
        title = <h4>{planet.name}</h4>
    }

    if(navigateState){
        return navigate('/')
    }

    return (
        <div>
            {title}
            <div>
                <DescriptionWithLink
                    description={planet.description}
                    url={planet.url}
                />
            </div>

            <GrayImg
                img_url={planet.img_url}
                name={planet.name}
                gray={false}
            />

            <h4>Satélites</h4>
            <SattelitesForm
                addSattelite={addSattelite}
            />
            <ul>
                {sattelites.map((sattelite, index) => {
                    return <li key={index}>{sattelite.name}</li>
                })}
            </ul>
            <hr />
            <button type='button' onClick={goToPlanets}>Voltar à listagem</button>
        </div>
    )
}


export default Planet