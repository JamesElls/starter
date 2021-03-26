import React from 'react'

const HeroImage = ({ image, link }) => {
    return (
        <div style={{width: '100%', position: 'relative'}}>
            <img src={image} class="img-fluid" style={{width: '100%', position: 'relative'}}></img>
            <button type="button" class="btn btn-dark" style={{position: 'absolute', top: '50%', left: '50%', right: '50%'}}>Dark</button>

        </div>
    )
}

export default HeroImage
