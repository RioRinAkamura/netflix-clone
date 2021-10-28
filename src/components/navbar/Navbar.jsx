import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import React, { useState } from 'react'
import './navbar.scss'

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return () => (window.onscroll === null)
    }
    


    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt=""
                    />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className="icon"/>
                    <span>KID</span>
                    <Notifications className="icon"/>
                    <img
                        src="https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.6435-9/134059299_2817501421806529_3062535600816435827_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=l55wHwspAc8AX9IPDwx&_nc_ht=scontent.fsgn13-2.fna&oh=5306bb3aa1acf0cc8de1d2c245a27ced&oe=619BDF23"
                        alt=""
                    />
                    <div className="profile">
                    <ArrowDropDown className="icon"/>
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
