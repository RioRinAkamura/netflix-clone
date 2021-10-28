
import React from 'react'
import Featured from '../../components/featured/Featured'
import Navbar from '../../components/navbar/Navbar'
import List from '../../components/list/List'
import './home.scss'

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            {/* <Featured type="movie"/> */}
            <Featured />
            <List listName="Continue To Watch"/>
            <List listName="Popular"/>
            <List listName="Upcoming"/>
            <List listName="Anime"/>
            <List listName="Series"/>
            <List listName="TV Series"/>
           
        </div>
    )
}

export default Home
