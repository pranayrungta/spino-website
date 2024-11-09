import React from 'react'
import Layout from "../components/Layout"
import Banner from '../components/Banner'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function OneImage({file}) {
  const [modalShow, setModalShow] = React.useState(false);
  return (<>
    <div className="col-sm-4">
    <div className="gallery-img">
      <Button rel="ligthbox" variant='light'
        onClick={() => setModalShow(true)} >
        <img src={file} alt={file}/>
      </Button>
    </div>
    </div>

    <Modal show={modalShow} onHide={() => setModalShow(false)}
      size="lg" aria-labelledby="contained-modal-title-vcenter"
          centered>
      <Modal.Body>
        <img src={file} alt={file}/>
      </Modal.Body>
    </Modal>
  </>);
}


export default function Gallery() {
  const files = ['0U5A2695.JPG', '0U5A2747.JPG', '0U5A2794.JPG',
    'IMG-20240910-WA0021.jpg', '0U5A2703.JPG', '0U5A2749.JPG',
    'IMG-20240910-WA0012.jpg', 'IMG-20240910-WA0023.jpg',
    '0U5A2707.JPG', '0U5A2758.JPG', 'IMG-20240910-WA0013.jpg',
    'IMG-20240910-WA0024.jpg', '0U5A2710.JPG', '0U5A2762.JPG',
    'IMG-20240910-WA0015.jpg', 'IMG-20240910-WA0026.jpg',
    '0U5A2716.JPG', '0U5A2771.JPG', 'IMG-20240910-WA0017.jpg',
    'printed-reel.jpg', '0U5A2722.JPG', '0U5A2780.JPG']
  return (<Layout>
    <Banner page='glry'/>
    <div className="innerbody">
      <div className="container">
      <div className="white_bg">
      <div className="row" id="allimages">
        {files.map((file, i)=>
          <OneImage file={file} key={i}/>)
        }
      </div>
      </div>
      </div>
    </div>
    <div className="newsletter_area"> </div>
  </Layout>)
}
