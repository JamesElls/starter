import {Route, Switch} from 'react-router-dom';
import React from 'react'
import NavBar from '../components/NavBar'
import Card from '../components/Card'

const Home = () => {
    return (
        <div>
            <>
                <NavBar />
            </>

            <>
                <Card />
            </>
        </div>
        
    )
}

export default Home
