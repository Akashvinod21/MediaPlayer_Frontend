import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import { addVideoHistory, deleteVideoApi } from '../services/allApi';



function VideoCard({video,setDeleteVideoStatus,isPresent}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() =>{
    setShow(true);
    const caption=video?.caption
    const url=video?.embedLink
    const time= new Date()
    const timeStamp=new Intl.DateTimeFormat("en-GB",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(time)
    console.log(timeStamp);


    const reqBody = {
      caption,url,timeStamp
    }

    const result=await addVideoHistory(reqBody)
    console.log(result);
  }

  const handleDelete = async(id) => {
    const result = await deleteVideoApi(id)
    setDeleteVideoStatus(result.data)
  }

  const videoDrag=(e,video)=>{
    console.log(video);
    e.dataTransfer.setData("videoDetails",JSON.stringify(video))
  }
  return (
    <>
    <Card style={{ width: '100%',border:"0px" }} draggable onDragStart={(e)=>videoDrag(e,video)}>
     {!isPresent && <Card.Img variant="top" onClick={handleShow} src={video?.imageUrl} height={'200px'} />}
      <Card.Body>
        
       <div className='d-flex justify-content-between'>
       <Card.Title  onClick={handleShow}>{video?.caption} </Card.Title>
         {!isPresent && <Button variant="info" onClick={(e)=>handleDelete(video?.id)} ><FontAwesomeIcon icon={faTrash} /></Button>}
       </div>
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="517" src={`${video?.embedLink}?autoplay=1`} title="Neeraj Madhav - BALLAATHA JAATHI [Official Video] ft. Dabzee | Baby Jean | ​⁠Rzee" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default VideoCard