import {Route, Switch} from 'react-router-dom';
import React from 'react'
import NavBar from '../components/NavBar'
import Card from '../components/Card'
import HeroImage from '../components/HeroImage'

const Home = () => {
    return (
        <div>
            <>
                <NavBar />
            </>

            <HeroImage image='https://www.seayou.ch/wp-content/uploads/2018/08/AM28748.jpg' />

        </div>
        
    )
}

export default Home
