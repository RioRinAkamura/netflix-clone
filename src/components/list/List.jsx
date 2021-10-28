import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import React, { useEffect, useRef, useState } from 'react'
import ListItem from '../listItem/ListItem'
import ListItem2 from '../listItem2/ListItem2'
import './list.scss'

const List = (listName) => {

    // https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=cc6aa5a8f11a66b0c47a150884fc6dd4&page=1
    
    const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=cc6aa5a8f11a66b0c47a150884fc6dd4&page=1";

    const [movies, setMovies] = useState([]);

    useEffect(async () => {
        fetch(FEATURED_API)
            .then(res => res.json())
            .then(data => {
            console.log(data);
            setMovies(data.results)
        })
    }, [])
    

    const [isMoved, setIsMoved] = useState(false);

    const [slideNumber, setSlideNumber]= useState(0)

    const listRef = useRef();

    const handleClick = (direction) => {
        setIsMoved(true)
        let distance = listRef.current.getBoundingClientRect().x -50
        if (direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${305 + distance}px)`
        }
        if (direction === "right" && slideNumber < movies.length - 6) {
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-305 + distance}px)`
        }
    }

    return (
        <div className="list">
            <span className="list-title">Continue Watching</span>
            <div className="wrapper">
                <ArrowBackIosOutlined
                    className="sliderArrow left"
                    onClick={() => handleClick("left")}
                    style={{display: !isMoved && "none"}}
                />
                <div className="container" ref={listRef}>

                    {movies.length > 0 && movies.map((movie, i)=>
                        <ListItem
                            key={movie.id}
                            {...movie}
                            data={movie}
                            index={i}
                            />
                    )}
                    {/* <ListItem2 index={ 0}/>
                    <ListItem2 index={ 1}/>
                    <ListItem2 index={ 2}/>
                    <ListItem2 index={ 3}/>
                    <ListItem2 index={ 4}/>
                    <ListItem2 index={ 5}/>
                    <ListItem2 index={ 6}/>
                    <ListItem2 index={ 7}/>
                    <ListItem2 index={ 8}/>
                    <ListItem2 index={ 9}/>
                    <ListItem2 index={ 10}/>
                    <ListItem2 index={ 11}/> */}
                </div>
                <ArrowForwardIosOutlined className="sliderArrow right" onClick={()=>handleClick("right")}/>
                
            </div>
        </div>
    )
}

export default List
