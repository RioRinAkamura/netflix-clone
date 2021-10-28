import { ArrowBack } from '@material-ui/icons'
import React from 'react'
import './watch.scss'

const Watch = () => {
    return (
        <div className="watch">
            <div className="back">
                <ArrowBack />
                Home
            </div>
            <video className="video" src="../../assets/Awards Titles CC.mp4" autoPlay progress controls />

            
        </div>
    )
}

export default Watch
