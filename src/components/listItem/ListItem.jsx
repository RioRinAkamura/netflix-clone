
import {   Check, Close, KeyboardArrowDownOutlined, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import './listItem.scss'

const ListItem = ({ index, title, poster_path, name, overview, vote_average , genres}) => {

    const IMG_API = "https://image.tmdb.org/t/p/w1280";

    const [isHovered, setIsHovered] = useState(false);

    // const trailer="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"

    return (
        <div
            className="list-item"
            style={{ left: isHovered && index * 305 - 50 + index * 2.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                // src="https://occ-0-325-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfLGdjzO2tu1e2j5HeRrEuiXi1VULtPYdVPzvaikP7jRPmmJKk5dKRL6GUK-0k5rxQG3QhYpw78gigmoYtcvOI0kPawv2af0BwnRepS0lC94J5t42D6YGRfaO9QO9hSPlA.webp?r=be8"
                src={IMG_API + poster_path}
                alt={title}
            />
            {isHovered && (
                <>
                    {/* <video src={trailer} autoPlay={ true} loop /> */}
                    <div className="itemInfo">
                        <div className="icons">
                            <div className="left">
                                <PlayArrow  className="icon"/>
                                <Check  className="icon"/>
                                <ThumbUpAltOutlined  className="icon"/>
                                <ThumbDownAltOutlined  className="icon"/>
                                <Close className="icon"/>
                            </div>
                            <div className="right">
                                <KeyboardArrowDownOutlined className="icon"/>

                            </div>
                        </div>
                        <div className="itemInfoTop">
                            <span className="match">{vote_average}</span>
                            <span className="limit">16+</span>
                            <span>1 Season</span>
                            <span className="quality">HD</span>
                        </div>
                        <div className="desc">
                            <span>{title}</span>
                            
                        </div>
                        <div className="genre">{genres}</div>
                    </div>
                </>
            )}
        </div>
    )
}

export default ListItem
