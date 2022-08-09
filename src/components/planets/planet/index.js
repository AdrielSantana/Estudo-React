import React from 'react'
import GrayImg from '../../shared/gray_img'
import DescriptionWithLink from '../../shared/DescriptionWithLink'

import { Link } from 'react-router-dom'

const Planet = (props) => {
    let title

    if (props.title_with_underline) {
        title = <h4><u>{props.name}</u></h4>
    } else {
        title = <h4>{props.name}</h4>
    }

    return (
        <div>
            <Link to={`/planet/${props.id}`}>{title}</Link>

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
            <hr />
        </div>
    )
}


export default Planet