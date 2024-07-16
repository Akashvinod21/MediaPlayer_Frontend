import React from 'react'
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram,faTwitter,faFacebook,faLinkedin,faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

function Footer() {
  return (
   <>
      <div className='container-fluid'>
      <div className="row  p-5 bg-primary">
        <div className="col-md-4">
          <h4 className='text-warning mt-mb-5 mt-4 mt-md-0'><FontAwesomeIcon icon={faVideo}  className='me-3'/>Media Player</h4>
          <p className='mt-md-5'style={{textAlign:'justify'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam laudantium expedita non veniam, assumenda vel rerum natus. Eos dolores maxime aut, fuga debitis necessitatibus in, aliquid laborum quos unde blanditiis!</p>
        </div>
        <div className="col-md-2">
          <h4 className='text-warning mb-md-5 mt-4 mt-md-0'>Links</h4>
          <Link to={'/'}><p>Landing Page</p></Link>
          <Link to={'/home'}><p>Home</p></Link>
          <Link to={'/Watch_history'}><p>Watch History</p></Link>
        </div>
        <div className="col-md-2">
          <h4 className='text-warning mb-md-5 mt-4 mt-md-0'>Guides</h4>
          <p>React</p>
          <p>React Bootstrap</p>
          <p>Bootswatch</p>
        </div>
        <div className="col-md-4">
          <h4 className='text-warning  mt-4 mt-md-0'>Contact us</h4>
          <div className='d-flex mt-md-4 '>
            <input type="text" className='form-control rounded-3' placeholder='Email ID' />
            <button className='btn btn-warning ms-4'>Subscribe</button>
          </div>
          <div className='d-flex justify-content-between mt-4'>
          <FontAwesomeIcon icon={faInstagram} className='fa-2x' />
          <FontAwesomeIcon icon={faTwitter} className='fa-2x' />
          <FontAwesomeIcon icon={faFacebook} className='fa-2x' />
          <FontAwesomeIcon icon={faLinkedin} className='fa-2x' />
          <FontAwesomeIcon icon={faWhatsapp} className='fa-2x' />
          </div>
        </div>
      </div>
      </div>
   </>
  )
}

export default Footer