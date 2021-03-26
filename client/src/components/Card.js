import {useState} from 'react'
import { MEDIUM_SPACE } from '../styles'
//import CardContainer from './CardContainer'
import {MEDIUM_SPACING} from '../styles'
import React from 'react'

const Card = (props) => {
    const {header, children} = props
    const [hideBody, setHideBody] = useState(false)

    return (
        
        <div class="card" style={{width: '18rem'}}>
            <div class="card-body">
                
                <h5 class="card-title">{header}</h5>
                <h6 class="card-subtitle mb-2 text-muted"></h6>

                <p class="card-text">{children}</p>

            </div>
        </div>
    )
}

export default Card
