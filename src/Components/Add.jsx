import { faCloudArrowUp,faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react'
import { allVideoApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add({setAddVideoStatus}) {
  const [show, setShow] = useState(false);
  const [videoDetails,setVideoDetails]=useState({
    caption:"",
    imageUrl:"",
    embedLink:""

  })
  console.log(videoDetails); 


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getLink=(e)=>{
    const link=e.target.value
    console.log(link);
      if(link.startsWith('https://youtu.be/')){
        setVideoDetails({...videoDetails,embedLink:`https://www.youtube.com/embed/${link.slice(17,28)}`})
      }
      else{
        setVideoDetails({...videoDetails,embedLink:`https://www.youtube.com/embed/${link.slice(-11)}`})
      }
  }

  const handleUpload =async(e)=>{
    e.preventDefault()

    const result = await allVideoApi(videoDetails)

    if(result.status>=200 && result.status<300){
      toast.success('Video added succesfully')
      handleClose()
      setAddVideoStatus(result.data)
    }
    else{
      toast.warning('Something went wrong')
      console.log(result);
    }
    console.log(result);
  }

  return (
    <>
    <div className='d-flex align-items-center justify-content-center'>
      <h2>Add new video</h2>
      <button className='btn fs-4' onClick={handleShow}><FontAwesomeIcon icon={faCloudArrowUp}/></button>
    </div>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><FontAwesomeIcon icon={faFilm} className='me-2' />Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className='text-warning'>Please fill the following details</p>
          <form>
            <div className="mb-3">
              <input type="text" className='form-control' placeholder='Video Caption' onChange={(e)=>setVideoDetails({...videoDetails,caption:e.target.value})}/>
            </div>
            <div className="mb-3">
            <input type="text" className='form-control' placeholder='Video Image' onChange={(e)=>setVideoDetails({...videoDetails,imageUrl:e.target.value})}/>
            </div>
            <div className="mb-3">
            <input type="text" className='form-control' placeholder='Video URL' onChange={(e)=>getLink(e)}/>
            </div>
          </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="secondary" onClick={(e)=>handleUpload(e)}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer position="top-center" theme="light" autoClose={2000}/>
    </>
  )
}

export default Add