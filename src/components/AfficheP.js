import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AfficheP({el}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
       <Modal show={show} onHide={handleClose} width={'70%'}>
       <Modal.Header closeButton>
         <Modal.Title> </Modal.Title>
       </Modal.Header>
       <Modal.Body>
<video width="100%" height="100%" controls>
    <source src={el.video} type='video/mp4'>
    </source>
</video>
       </Modal.Body>
       <Modal.Footer>
         <Button variant="secondary" onClick={handleClose}>
           Close
         </Button>
       </Modal.Footer>
     </Modal>
      

          <div className="ag-courses_item">
            <span className="ag-courses-item_link">
              <div className="ag-courses-item_bg" />
              <div className="ag-courses-item_title">
              <span >
        {el.name}<br/> 
        <button onClick={handleShow} style={{alignSelf:'right'}}>Demo <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512" style={{fill:'#f9b234'}}><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg></button>
            </span>
              </div>
            </span>
         
        </div>
    </>
  )
}

export default AfficheP