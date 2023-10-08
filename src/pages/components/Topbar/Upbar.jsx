import React from 'react'
import './Topbar.css'
import { Search, Person, Chat, Notifications } from '@mui/icons-material'

export default function Upbar() {
  return (
    <div className='topbarContainer'>
        <div className='topbarLeft'>
          <span className='logo'>SocialHub</span>
          </div>
          <div className='topbarCenter'>
            <div className='searchBar'>
              <Search className="searchIcon"/>
            <input placeholder='Search for friend, post or video' className='searchInput'/>
            </div>
          </div>
            <div className='topbarRight'>
                    <div className='topbarLink'>
                        <span className="topbarlink">Homepage</span>&nbsp;&nbsp;&nbsp;    
                        <span className="topbarlink">Timeline</span>
                        </div>
                  <div className="topbarIcons">
                   <div className="topbarIconItem">
                      <Person/>
                      <span className="topbarIconBadge">1</span>
                    </div>
                          <div className="topbarIconItem">
                            <Chat/>
                            <span className="topbarIconBadge">1</span>
                            </div>
                                  <div className="topbarIconItem">
                                  <Notifications/>
                                  <span className="topbarIconBadge">1</span>
                                        </div>
                   </div>
                   <img src="/assets/person/1.jpg" alt="" className="topbarImg" />

            </div>
        </div>

  )
}
