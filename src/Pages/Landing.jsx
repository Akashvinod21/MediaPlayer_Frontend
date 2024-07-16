import React from 'react'
import {Col,Row} from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Landing() {
  return (
    <>
      <Row className='w-100 mt-5 d-flex justify-content-center align-items-center ps-4  '>
        <Col md={1}></Col>
        <Col md={5} className='p-3'>
        <h2>Welcome to <span className='text-warning'>MEDIA Player</span></h2>
        <p className='mt-3'style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, natus. Provident rem, sit voluptatibus molestiae velit facere dignissimos ea alias inventore! Fugiat quasi rem assumenda quos natus saepe, qui neque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores blanditiis minima ducimus perspiciatis dolor quaerat vel? Consequuntur neque, atque, assumenda tenetur, similique architecto cum vel nemo voluptate cupiditate ipsa velit. lor</p>
       <Link to={'/home'}> <button className='btn btn-primary mt-3'>Get Started</button></Link>
        </Col>
        <Col md={1}></Col>
        <Col md={5} className='p-5 d-flex justify-content-center align-items-center'>
        <img src="https://cdn.dribbble.com/users/4689135/screenshots/12155256/media/e786423a1fc30fb0d80160e3fc323374.gif" alt="" className='w-100'/>
        </Col>
        
      </Row>
      <div className='container my-5'>
      <h1 className='text-center mt-5'>Features</h1>
        <Row>
          <Col md={1}></Col>
          <Col md={3}>
          <Card style={{ width: '100%' }} className='p-3 mt-3'>
        <Card.Img variant="top" src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
       </Card.Body>
      </Card></Col>
  
      <Col md={4}  className='px-md-5'>
        <Card style={{ width: '100%' }} className='p-3 mt-3 bg-primary'>
          <Card.Img variant="top" src="https://cdn.dribbble.com/users/497438/screenshots/2084032/xtyf_1.gif" height={"300px"}/>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            
          </Card.Body>
        </Card>
      </Col>
  
      <Col md={3}>
        <Card style={{ width: '100%' }} className='p-3 mt-3'>
          <Card.Img variant="top" src="https://i.pinimg.com/originals/b6/bb/78/b6bb788dfdab8f4ae1d3ba8591ee489f.gif" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            
          </Card.Body>
        </Card>
      </Col>
  
          <Col md={1}></Col>
        </Row>
      </div>

      <div className='container-fluid my-5'>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10 border border-primary p-3 my-5 border-2 rounded">
            <div className="row p-4">
              <div className="col-md-6">
              <h3 className='text-secondary'>Simple fast and powerful</h3>
              <p className='mt-5'><span className='fs-4 text-warning'>Play Everything:</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, dolor perferendis possimus nihil error.</p>
              <p className='mt-5'><span className='fs-4 text-warning'>Play Everything:</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, dolor perferendis possimus nihil error.</p>
              <p className='mt-5'><span className='fs-4 text-warning'>Play Everything:</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, dolor perferendis possimus nihil error.</p>
              </div>
              <div className="col-md-6">
              <iframe width="100%" height="400" src="https://www.youtube.com/embed/gPpQNzQP6gE" title="Akshath - Nadaaniyan (Official Video) Aisha Ahmed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </>
  )
}

export default Landing