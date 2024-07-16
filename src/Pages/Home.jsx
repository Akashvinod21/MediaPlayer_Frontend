import React, { useState } from 'react'
import Add from '../Components/Add'
import View from '../Components/View'
import Category from '../Components/Category'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons/faClockRotateLeft'
import { Link } from 'react-router-dom'



function Home() {
  const [addVideoStatus,setAddVideoStatus]=useState([])
  const [dragVideo,setDragVideo]=useState(false)
  return (
   <>
   <div className='d-flex p-5'>
    <Add setAddVideoStatus={setAddVideoStatus}/>
    <h5 className='ms-auto'><Link to={'/Watch_history'}><span className='hide'>Watch History</span><FontAwesomeIcon icon={faClockRotateLeft} className='ms-3' /></Link></h5>
   </div>

   <div className="row w-100 p-4">
    <div className="col-md-9">
      <View addVideoStatus={addVideoStatus} setDragVideo={setDragVideo}/>
    </div>
    <div className="col-md-3">
      <Category dragVideo={dragVideo} setDragVideo={setDragVideo}/>
    </div>
   </div>
   </>
  )
}

export default Home