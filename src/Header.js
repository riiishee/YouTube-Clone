import React, {useState} from "react";
import MenuIcons from "@material-ui/icons/Menu";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon  from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationIcon from "@material-ui/icons/Notifications";
 import Avatar from "@material-ui/core/Avatar";
 import {Link} from "react-router-dom";
// import { useState } from "react";

 


function Header(){

  const [inputSearch, setInputSearch] = useState('');


    return(
        <div className="header">
        <div className="header_left">
            {/* <h1> I am a header</h1> */}
            <MenuIcons />
            
            <Link to="/">
            <img  className="header_logo"
             src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" 
             alt="YouTube" />
            </Link>
            
          
            
           
            </div>

            <div className="header_input">
            <input  onChange={e => setInputSearch(e.target.value)} value={inputSearch}
            placeholder="search"
            type="text" />

            
   <Link to={`/search/${inputSearch}`}>
   <SearchIcon  className="header_inputButton"/>
   </Link>
            
                

            </div>
            <div className="header_icons">


 <VideoCallIcon className="header_icon"/>
 <AppsIcon className="header_icon"/>
 <NotificationIcon className="header_icon" />
 {/* <Avatar /> */}
 </div>


        </div>

    )
}

export default Header;