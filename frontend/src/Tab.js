import React from 'react'
import './Tab.scss'
import { NavLink } from 'react-router-dom';
import {HomeOutlined, WorkOutlineOutlined, OndemandVideo, FolderSpecialOutlined} from '@material-ui/icons/';

const Tab =() => {
  return (
    <div className="tabs">
        <NavLink exact to="/home" className={(navData) => navData.isActive ? "selected tab bookmarks-tab" : "tab bookmarks-tab" }>
            <div className="tab-tile" >
                <HomeOutlined/>
            </div>
        </NavLink>

        <NavLink exact to="/resume"  className={(navData) => navData.isActive ? "selected tab todos-tab" : "tab todos-tab" }>
            <div className="tab-tile" >
            <WorkOutlineOutlined/>
            </div>
        </NavLink>

        <NavLink exact to="/lessonalyzer" className={(navData) => navData.isActive ? "selected tab notes-tab" : "tab notes-tab" }>
            <div className="tab-tile" >
            <FolderSpecialOutlined/>
            </div>
        </NavLink>

        <NavLink exact to="/movies"  className={(navData) => navData.isActive ? "selected tab bookmarks-tab" : "tab bookmarks-tab" }>
            <div className="tab-tile">
                <OndemandVideo/>
            </div>
        </NavLink>
</div>
  )
}

export default Tab
