import React from 'react'
import './Tab.scss'
import { Link } from 'react-router-dom';
import {HomeOutlined, WorkOutlineOutlined, AssignmentOutlined, FolderSpecialOutlined} from '@material-ui/icons/';
const Tab =() => {
  return (
    <div className="tabs">
        <Link to="/" className="tab todos-tab">
            <div className="tab-tile" >
                <HomeOutlined/>
            </div>
        </Link>

        <Link to="/resume" className="tab todos-tab">
            <div className="tab-tile" >
            <WorkOutlineOutlined/>
            </div>
        </Link>

        <Link to="/lessonalyzer" className="tab todos-tab">
            <div className="tab-tile" >
            <FolderSpecialOutlined/>
            </div>
        </Link>

    <a routerLink="blog" routerLinkActive="selected" className="tab notes-tab">
        <div className="tab-tile">
            <AssignmentOutlined/>
        </div>
    </a>
</div>
  )
}

export default Tab
