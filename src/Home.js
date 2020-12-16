import React from 'react'
import "./home.css"
import Card from './components/Cards'
import Slideshow from "./components/Slideshow"

export default function Home() {
    return (
        <div className="home">
            <Slideshow className="imageslider"/>
            <Card/>
        </div>
    )
}
