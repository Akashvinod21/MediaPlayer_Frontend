import React, { useEffect, useState } from 'react'
import { faTrash,faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { deleteVideoHistoryApi, getAllVideoHistory } from '../services/allApi';


function Watch_history() {
  const [allVideo,setAllVideo]=useState([])

  const getVideoHistory = async()=>{
    const result = await getAllVideoHistory()
    // console.log(result);
    if(result.status>=200 && result.status<300){
      setAllVideo(result.data)
    }
  }
  console.log(allVideo);

  const handleDeleteVideo=async(id)=>{
    await deleteVideoHistoryApi(id)
    getVideoHistory()
  }

  useEffect(()=>{
    getVideoHistory()
  },[])
  return (
    <>
    
    <div className="row w-100 my-5">
      <div className='justify-content-between d-flex p-md-5'>
      <h5 className='ms-2'>Watch History</h5>
      <h5><Link to={'/home'} style={{textDecoration:"none"}}><FontAwesomeIcon icon={faHouse} className='me-3' /><span className='hide'>Back to home</span></Link></h5>
      </div>
      <div className="col-md-2"></div>
      <div className="col-md-8 table-responsive">
        
        {allVideo.length>0?<table className='table mt-5 p-5 text-center'>
          <thead>
            <tr>
              <th>Sl No</th>
              <th>Caption</th>
              <th>URL</th>
              <th>Timestamp</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
           
           {allVideo?.map((item,index)=>
              (<tr>
                <td>{index+1}</td>
                <td >{item.caption}</td>
                <td><Link to={item.url}>{item.url}</Link></td>
                <td>{item.timeStamp}</td>
                <td><button className='btn btn-warning' onClick={()=>handleDeleteVideo(item.id)}><FontAwesomeIcon icon={faTrash}/></button></td>
              </tr>))}
          </tbody>
        </table>
        :
        <p className='text-center mt-4'>NO Video history Availaible</p>}
      </div>
      <div className="col-md-2"></div>
    </div>
    </>
  )
}

export default Watch_history